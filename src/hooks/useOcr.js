import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../reducers/User';
import useRequest from './useRequest';
import axios from 'axios';

const GOOGLE_APPLICATION_CREDENTIALS='ya29.c.Kp0B5AeWZygJameYGeUvyyaqGPT8LcT_i8aWJLJc1QmQMqfxBkbCl0NPMBxK0ds3PRgh4PDpps3klJm0pwJx50EpgA31ZML35oJHUjX5O59GBekxOxV9gfCn6IrGKoDblcvEAktunKlUi--8KMO1itvYdL8J71cmeykfWcr8kW1t2Gy_SfVY0296cLdt30lvJRRRRcyzK3htpkvj-NnWRw'
const quickstart = async (image) => {
    const data = await axios({
        url: 'https://vision.googleapis.com/v1/images:annotate',
        method: 'post',
        headers: {
            Authorization: `Bearer ${GOOGLE_APPLICATION_CREDENTIALS}`,
            "Content-Type" : "application/json; charset=utf-8"
        },
        data: {
            requests: [{
                image: {
                    content: image
                    // source: {
                    //     imageUri: 'gs://capston_vegan/admin.jpg'
                    //     // imageUri: 'gs://cloud-samples-data/vision/using_curl/shanghai.jpeg'
                    // }
                },
                features: [
                    {
                    type: "TEXT_DETECTION",
                    maxResults: 1,
                    model: "builtin/latest"
                }],
                 imageContext: {
                     languageHints: ["ko", "en"]
                 }
            }]            
    }})
    return data;
}

export default function useOcr() {
    const dispatch = useDispatch();
    const [image, setImage] = React.useState(undefined);
    const [loading, setLoading] = React.useState(false);
    const [ocr, { run: getOcr }] = useRequest(quickstart);
    const [ocrState, setOcrState] = React.useState({
        responses: [{
            textAnnotations: ['']
        }]
    });

    React.useEffect(()=>{
        if(ocr.pending){
            setLoading(true);
        }
    }, [ocr.pending])

    React.useEffect(()=>{
        if(ocr.fulfilled){
            console.log('---------------success-------------');
            setLoading(false);
            setOcrState(ocr.data.data);
            // console.log(ocr.data.data);
        }
    }, [ocr.fulfilled])

    React.useEffect(()=>{
        if(ocr.rejected){
            setLoading(false);
            console.log('---------------Error-------------');
            console.log(ocr.error);
        }
    }, [ocr.rejected])


  return [{ocr, image, loading, ocrState}, {getOcr, setImage, setLoading}];
}

