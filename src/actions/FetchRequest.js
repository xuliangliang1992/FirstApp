import React, {
    Component
} from 'react';
import {
    ToastAndroid
} from 'react-native';

export default class FetchRequest extends Component {

    /**
     * get请求
     *
     * @static
     * @param {*} url
     * @param {*} loadCallBack
     * @param {*} callBackSuccess
     * @param {*} callBackError
     * @memberof FetchRequest
     */
    static requestGet(url, loadCallBack, callBackSuccess, callBackError) {
        console.log(url);
        loadCallBack();

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('请求成功\n' + JSON.stringify(responseJson));
                //成功回调
                callBackSuccess(responseJson);
            }).catch((error) => {
                console.log('请求失败回调\n', error);
                //失败回调
                callBackError(error);
                ToastAndroid.show("网络异常", ToastAndroid.SHORT);
            });
    }

    /**
     * Post请求
     *
     * @static
     * @param {*} url
     * @param {*} params
     * @param {*} loadCallBack
     * @param {*} callBackSuccess
     * @param {*} callBackError
     * @memberof FetchRequest
     */
    static requestPost(url, params, loadCallBack, callBackSuccess, callBackError) {
        console.log(url + "\n" + JSON.stringify(params));

        loadCallBack();

        fetch("www.doclever.cn:8090/mock/5b6aa3cc2235f12be2134ba6/"+url, {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(params)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('请求成功\n' + JSON.stringify(responseJson));
                //成功回调
                if (responseJson.success) {
                    callBackSuccess(responseJson);
                } else {
                    ToastAndroid.show(responseJson.retMsg, ToastAndroid.SHORT);
                }
            }).catch((error) => {
                console.log('请求失败回调\n', error);
                //失败回调
                callBackError(error);
                ToastAndroid.show("网络异常", ToastAndroid.SHORT);
            });
    }

    /**
     * Put请求
     *
     * @static
     * @param {*} url
     * @param {*} params
     * @param {*} loadCallBack
     * @param {*} callBackSuccess
     * @param {*} callBackError
     * @memberof FetchRequest
     */
    static requestPut(url, params, loadCallBack, callBackSuccess, callBackError) {
        console.log(url + "\n" + JSON.stringify(params));

        loadCallBack();

        fetch(url, {
                method: 'PUT',
                header: { //请求头
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                formData: params //请求参数
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('请求成功回调\n' + JSON.stringify(responseJson));
                //成功回调
                if (responseJson.success) {
                    callBackSuccess(JSON.stringify(responseJson));
                } else {
                    ToastAndroid.show(responseJson.retMsg, ToastAndroid.SHORT);
                }
            }).catch((error) => {
                console.log('请求失败回调\n', error);
                //失败回调
                callBackError(error);
                ToastAndroid.show("网络异常", ToastAndroid.SHORT);
            });
    }
}