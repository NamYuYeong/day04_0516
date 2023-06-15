//비동기처리는 async
//try{ }catch()finally{} //반드시 에러처리가 들어가야함

const fs = require('fs');
const fspromises = require('fs').promises;
const path = require('path');

const fileOption =async()=>{
    try{
        const data= await fspromises.readFile('./datas/lorem.txt','utf-8'); 
        //await반드시 기다렷다가 실행 async 처리된 함수에서만 사용

        console.log("1. readfile", data);
        console.log("2. console.log");
    }catch(err){
        console.log(err);

    }finally{
        //try코드테서 에러가 없이도 반드시 실행
        //catch구문이 실행이돼도 반드시 처리

        console.log("finally 반드시 실행");
        //db.close 넣어줌

    }
}

fileOption();