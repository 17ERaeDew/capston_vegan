import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRequest from './useRequest';
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';
import { setProduct } from '../reducers/Product';

const quickstart = async (image) => {
  let today = new Date();
  const data = await axios({
    url: process.env.REACT_APP_OCRURL,
    method: 'post',
    headers: {
      'X-OCR-SECRET': process.env.REACT_APP_OCRSECRET,
      'Content-Type': 'application/json; charset=utf-8',
    },
    data: {
      version: 'V1',
      requestId: '123',
      timestamp: Date.parse(today),
      lang: 'ko',
      images: [{ format: 'png', data: image, name: '식품' }],
    },
  });
  return data;
};

const sendServer = async (text, vegan) => {
  const data = await axios({
    url: process.env.REACT_APP_BASEURL,
    method: 'post',
    data: {
      text: text,
      vegan: vegan,
    },
  });
  return data;
};

export default function useOcr(image, navigation, nextNav) {
  const dispatch = useDispatch();
  const [ocr, { run: getOcr }] = useRequest(quickstart);
  const [checkVegan, { run: postCheckVegan }] = useRequest(sendServer);
  const user = useSelector((state) => state.User.user);
  const [error, setError] = React.useState(false);
  const textEl = React.useRef(null);
  React.useEffect(() => {
    getOcr(image);
  }, [image]);

  React.useEffect(() => {
    if (ocr.pending || checkVegan.pending) {
    }
  }, [ocr.pending, checkVegan.pending]);

  React.useEffect(() => {
    if (ocr.fulfilled) {
      let text = '';
      ocr.data.data.images[0].fields.forEach((value, index) => {
        text += `${value.inferText} `;
      });
      postCheckVegan(text, user.vegan - 1);
      textEl.current = text;
    }
  }, [ocr.fulfilled]);

  React.useEffect(() => {
    if (checkVegan.fulfilled) {
      const product = {
        vegan: checkVegan.data.data.vegan,
        cover: `data:image/png;base64,${image}`,
        type: checkVegan.data.data.type,
        title: checkVegan.data.data.title,
        not_match: checkVegan.data.data.not_match,
        desc: textEl.current,
        substitution: checkVegan.data.data.substitution,
      };
      dispatch(setProduct({ ...product, cover: 'none' }));
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              index: 1,
              name: nextNav,
              params: {
                ocr: product,
              },
            },
          ],
        }),
      );
    }
  }, [checkVegan.fulfilled]);

  React.useEffect(() => {
    if (ocr.rejected) {
      setError(true);
    }
  }, [ocr.rejected]);

  React.useEffect(() => {
    if (checkVegan.rejected) {
      setError(true);
    }
  }, [checkVegan.rejected]);
  return error;
}
