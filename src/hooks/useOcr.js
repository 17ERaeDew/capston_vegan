import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRequest from './useRequest';
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';
import { setProduct } from '../reducers/Product';

const quickstart = async (image) => {
  let today = new Date();
  const data = await axios({
    url:
      'https://914de598614046ba8ed9926e156f0a31.apigw.ntruss.com/custom/v1/4048/f59721ea1f9fbd7439e43de741937b01a938480cfad748e00dcbee7807d1c016/general',
    method: 'post',
    headers: {
      'X-OCR-SECRET': 'ZlR6Y1BLUVNQTllDZndsenlSSWRQU0xWRlRFV0tKRWY=',
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
  // const data = `제품명 치즈초코파이 식품유형 초콜릿 내용량 384g 업소명 및 소재지 롯데제과(주) 경남 양산시 양산대로 1158 유통기한 측면표기일까지(연.월.일) 내포장재질 폴리프로필렌 품목보고번호 19780614009442 밀가루(밀;미국산),탕,물엿,쇼트닝(가공유지(부분경화유;팜스터아린유(말레이시아산),동물성유지(호주산)),식물성지(부분경화유(말레이시아산); 원재료명 팜유,팜핵유),혼합분유,코코아분말(인도네시0산),D-소비톨액,글리서린,체다치즈분말(덴마크산),주정0.63%,유당,기타가공품,포도당,젤라틴,전란액,정제소금,산도조절제I,합성향료(치즈형,밀크향,바닐라향),산도절제Ⅱ,구연산,코코아마스(코코아빈;가나산),유화제I,신도조절제II,홍화황색소,유화제II,혼합제제(유화제,아라비아검,산도조절제),바닐린,잔탄검밀,쇠고기,대두,우유,돼지고기,계란 함유`;
  return data;
};

const sendServer = async (text, vegan) => {
  const data = await axios({
    // url: 'https://capstonvegan.herokuapp.com/api/sendText',
    url: 'http://192.168.43.38:8080/api/sendText',
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
      // setLoading(true);
    }
  }, [ocr.pending, checkVegan.pending]);

  React.useEffect(() => {
    if (ocr.fulfilled) {
      console.log('ocr---------------success-------------');
      let text = '';
      ocr.data.data.images[0].fields.forEach((value, index) => {
        text += `${value.inferText} `;
      });
      console.log(text);
      postCheckVegan(text, user.vegan - 1);
      textEl.current = text;
    }
  }, [ocr.fulfilled]);

  React.useEffect(() => {
    if (checkVegan.fulfilled) {
      console.log('server---------------success-------------');
      console.log('---------------vegan-------------');
      console.log(checkVegan.data.data.vegan);
      console.log('---------------type-------------');
      console.log(checkVegan.data.data.type);
      console.log('---------------title-------------');
      console.log(checkVegan.data.data.title);
      console.log('---------------not_match-------------');
      console.log(checkVegan.data.data.not_match);
      console.log('---------------desc-------------');
      console.log(textEl.current);
      console.log('---------------substitution-------------');
      console.log(checkVegan.data.data.substitution);

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
      console.log('ocr---------------Error-------------');
      console.log(ocr.error);
      setError(true);
    }
  }, [ocr.rejected]);

  React.useEffect(() => {
    if (checkVegan.rejected) {
      console.log('server---------------Error-------------');
      console.log(checkVegan.error);
      setError(true);
    }
  }, [checkVegan.rejected]);
  return error;
}
