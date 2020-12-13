import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../reducers/User';
import useRequest from './useRequest';
import axios from 'axios';

const quickstart = async (image) => {
  // let today = new Date();
  // const data = await axios({
  //     url: 'https://914de598614046ba8ed9926e156f0a31.apigw.ntruss.com/custom/v1/4048/f59721ea1f9fbd7439e43de741937b01a938480cfad748e00dcbee7807d1c016/general',
  //     method: 'post',
  //     headers: {
  //         'X-OCR-SECRET': 'ZlR6Y1BLUVNQTllDZndsenlSSWRQU0xWRlRFV0tKRWY=',
  //         "Content-Type" : "application/json; charset=utf-8"
  //     },
  //     data: {
  //         version: 'V1',
  //         requestId: '123',
  //         timestamp: Date.parse(today),
  //         lang: 'ko',
  //         images: [{format: 'png', data: image, name: '식품'}]
  // }})
  const data = `밀가루(밀;미국산),탕,물엿,쇼트닝(가공유지(부분경화유;팜스터아린유(말
    레이시아산),동물성유지(호주산)),식물성지(부분경화유(말러|이시아산);
    원재료명
    팜유,팜핵유),혼합분유,코코아분말(인도네시0산),D-소비톨액,글리서린,체다치
    즈분말(덴마크산),주정0.63
    %,유당,기타가공품,포도당,젤라틴,전란액,정제소금,산도
    조절제I,합성향료(치즈형,밀크향,바닐라향),산도절제Ⅱ,구연산,코코아마스(코코아
    빈;가나산),유화제I,신도조절제II,홍화황색소,유화제II,혼합제제(유화제,아라비아검,
    산도조절제),바닐린,잔탄검
    밀,쇠고기,대두,
    우유,
    돼지고기,
    계란 함유`;
  return data;
};

const sendServer = async (text, vegan) => {
  const data = await axios({
    url: 'https://capstonvegan.herokuapp.com/api/sendText',
    method: 'post',
    data: {
      text: '초코파이',
      vegan: vegan,
    },
  });
  return data;
  return true;
};

export default function useOcr() {
  const dispatch = useDispatch();
  const [image, setImage] = React.useState(undefined);
  const [loading, setLoading] = React.useState(false);
  const [ocr, { run: getOcr }] = useRequest(quickstart);
  const [checkVegan, { run: postCheckVegan }] = useRequest(sendServer);
  const [ocrState, setOcrState] = React.useState({
    images: [
      {
        fields: [{ inferText: '' }],
      },
    ],
  });
  const user = useSelector((state) => state.User.user);

  React.useEffect(() => {
    if (ocr.pending || checkVegan.pending) {
      setLoading(true);
    }
  }, [ocr.pending, checkVegan.pending]);

  React.useEffect(() => {
    if (checkVegan.fulfilled) {
      console.log('server---------------success-------------');
      setLoading(false);
      setOcrState(checkVegan.data.body);
    }
  }, [checkVegan.fulfilled]);

  React.useEffect(() => {
    if (ocr.fulfilled) {
      console.log('ocr---------------success-------------');
      postCheckVegan(ocr.data, 0); // user.vegan);
      setOcrState(ocr.data.data);
    }
  }, [ocr.fulfilled]);

  React.useEffect(() => {
    if (ocr.rejected) {
      setLoading(false);
      console.log('ocr---------------Error-------------');
      console.log(ocr.error);
    }
  }, [ocr.rejected]);

  React.useEffect(() => {
    if (checkVegan.rejected) {
      setLoading(false);
      console.log('server---------------Error-------------');
      console.log(checkVegan.error);
    }
  }, [checkVegan.rejected]);

  return [
    { ocr, image, loading, ocrState },
    { getOcr, setImage, setLoading },
  ];
}
