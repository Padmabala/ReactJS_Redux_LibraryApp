import { PRIMARY_SERVER } from "../constants/serverUrls"

const fetchDetails=async(route,method)=>{
    const requestUrl=PRIMARY_SERVER+route;
    const response=await fetch(requestUrl);
    // ('http://127.0.0.1:3005/users?username=test4&password=test4')
    const data=await response.json();
    console.log(data,"fetch");
    return data;
    // return new Promise(async(resolve,reject)=>{
    //     await fetch(route)
    //     .then(response => {response.json()})
    //     .then(data=>resolve(data))
    //     .catch(error=>{
    //         reject(error);
    //     });
    // })
    /*const response=await fetch('http://127.0.0.1:3005/users?username=test4&password=test4')
    const [data]=response.json()
    return data;*/

} 
export default fetchDetails;

/* const response =await fetch('http://127.0.0.1:3005/users?username=test4&password=test4')
    const data= await response.json();
    console.log("fdhfjdshfkjdhfkj",data); */

    /*return new Promise((resolve,reject)=>{
        fetch('http://127.0.0.1:3005/users?username=test4&password=test4')
        .then(response => response.json())
        .then(data=>resolve(data))
        .catch(error=>{
            reject(error);
        });
    
    });*/