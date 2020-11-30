import axios from 'axios';
import qs from 'qs';

interface ICodeMessage {
    200: string;
    201: string;
    202: string;
    204: string;
    400: string;
    401: string;
    403: string;
    404: string;
    405: string;
    406: string;
    410: string;
    422: string;
    500: string;
    502: string;
    503: string;
    504: string;
}

const codeMessage: ICodeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    405: '请求方法不被允许。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

/**
 * 异常处理程序
 */

export const request = (paras: any) => {

    const { api, method, payload, callback } = paras;


    switch(method) {
        case 'get': // Get 请求，数据
            return axios({
                url: api,
                method: method,
                headers: {
                    'content-type': 'application/json',
                },
                timeout: 1000,
                data: qs.stringify(payload),
            }).then((res): void => {
                callback(res);
            }).catch((error): void => {
                console.log(error)
            });
        case 'post':    // Post 请求，数据
            console.log(method)
            return fetch(api, {
                body: JSON.stringify(payload), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, same-origin, *omit
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // *client, no-referrer
            }).then(response => {
                return response.json();
            }).then(data => {
                callback(data);
            }).catch(error => {
                console.error(error)
            })
        case 'down':    // Down 请求，文件下载
        case 'upload':  // Upload 请求，文件上传

    }
}


