


//함수표현식으로 wait2()정의
const wait2 = inputStr =>{
    return new Promisefunction((resolve, reject)=>{
        setTimeout(()=>{
            console.log(inputStr);
            //성공표시
            resolve();
        },1000);
    });
}
//promise로 만든 wait2함수를 호출
wait2("A")
    .then(()=>wait2("B"))
    .then(()=>wait2("c"))