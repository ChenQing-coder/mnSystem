import {Message} from 'iview'
import WebStorageCache from 'web-storage-cache'
const wsCache=new WebStorageCache()
export default function ({ $axios, redirect }) {
    $axios.defaults.baseURL='/';
    $axios.onRequest(config => {//携带token验证
        config.headers['x-access-token'] = (wsCache.get('token') || {});
        return config;
    })
    $axios.onResponse(config => {//将错误统一抛出
        let {success,data}=config.data;
        if(!success){
          var msg=(typeof data.msg)=='string'?data.msg:data.msg.message;
           Message.error(msg)
           if(data.code==401){
              redirect('/admin/login');
           }
        }
        return config.data;
      })
    $axios.onError(error => {
        let code=error.response.status;
        if(code=='401'){
            redirect('/admin/login');
        }else if (code === 400) {
        redirect('/400')
      }
    })
  }