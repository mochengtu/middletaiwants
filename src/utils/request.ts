import axios from 'axios';
import qs from 'qs';

/*
const codeMessage = {
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
    410: '请求的资源被永久删除，且不会再得到的。'r,
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};
*/

/**
 * 异常处理程序
 */

export const request = (paras: any) => {

    const { api, method, payload, callback } = paras;

    return axios({
        url: api,
        method: method,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify(payload),
    }).then((res): void => {
        callback(res);
    }).catch((error): void => {
        console.log(error)
    });
    /*switch(method) {
        case 'get': // Get 请求，数据
        case 'post':    // Post 请求，数据
        case 'down':    // Down 请求，文件下载
        case 'upload':  // Upload 请求，文件上传

    }*/
}

