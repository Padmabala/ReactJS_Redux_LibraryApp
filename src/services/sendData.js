
import { PRIMARY_SERVER } from '../constants/serverUrls';


export const sendData=(route,method,body)=>{
    const requestUrl=PRIMARY_SERVER + route;
    return new Promise((resolve,reject)=>{
        const headers=new Headers({
            "Content-Type":"application/json",
        });
        const requestConfig={
            headers,
            mode:"cors",
            method,
            body:JSON.stringify(body),
        };
        console.log(requestConfig);
        fetch(requestUrl,requestConfig)
        .then(response=>response.json())
        .then(data=>{
            
            console.log("send data",data);
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        });
    });    
};

