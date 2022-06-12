//연습문제 #1
// const wait = (inputStr,callback) => {
//     setTimeout(()=>{
//         console.log(inputStr);
//         callback();
//     },1000);
// };
// wait("B",()=>{
//     wait("c",()=>{
//        return;
//     })
// });



// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//            console.log("B")
//            console.log("C")
//            resolve();
//     },1000)
// });
// promise.then(function(){
//     console.log("C")
// })
    //1초후에 실행되는 프라미스있습니다.
    //then 실행을 해서 아래처럼 출력해 주세요.
    //출력 :"안녕하세요  님!"

    // let promise = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         let name = prompt("이름을 입력하십시요");
    //         resolve(name);
    //     },1000);
    // });
    // promise.then(function(name){
    //     console.log("안녕하세요"+name+"님!")
    // })
    //연습문제#3
    //아래 Promise 정의가 있습니다
//아래를 보고 promise함수를 호출하여 출력해 보세요
//성공하면 10미만의 숫자를 입력하셨습니다.
// let promise = new Promise(function(resolve,reject){
//     let n = Number(prompt("10미만의 숫자를 입력하세요"));
//     //1초 후에 실생되는 function
//     setTimeout(function(){
//         if(n<=10){
//             resolve(n)
//         }else{
//             reject(`오류: ${n}는 10이상 숫자입니다.`)
//         }
//     },1000)
// });
// promise.then(function(num){
//     console.log(num+"은 10미만의 숫자를 입력하셨습니다.");

// },function(err){
//     console.log(err);

// });
// //다른 방법
// promise
// .then(function(num){
//     console.log(num+"은 10미만의 숫자를 입력하셨습니다.");

// })
// .catch(function(err){
//     console.log(err);

// });

//비동기로 동작하는 function정의
function buyAsync(mymoney){
    return new Promise(function(resolve,reject){
        let payment = Number(prompt("지불하고자 하는 금액을 입력하십시요"));
        //비동기로 동작하는 함수를 실행
        //1초후에 실행
        setTimeout(function(){
            //잔액 계산
           let balance = mymoney -payment
           if(balance > 0){
               console.log(`${payment}원을 지불하셧습니다.`);
               resolve(balance);
           }else{
           reject(`잔액은 ${mymoney}원 입니다. 구매할 수 없습니다.`);
           }
        },1000);
    });
};
buyAsync(500)
            .then(function(balance){
                console.log(`잔액은 ${balance}원 남았습니다.`);
            })
            .catch(function(err){
                console.log(err);
            });
//연습문제
//한 문자를 입력받아서 1초후에 출력하는 비동기 프로그램을 작성하시오.
//입력 :0
//출력: 0

function Async(a){
    return new Promise(function(resolve,reject){
        let b =prompt("문자를 입력하세요");
        setTimeout(function(){
            console.log(b)
        },1000)
        
    })
}
Async().then(function(){
    console.log(b)
})
//연습문제
//두 문자를 공백을 띄워 입력받아서 1초후에 거꾸로 출력하는 비동기 프로그램을 작성하세요
//입력 : a b
//출력 : b
//      a
function A(a){
    return new Promise(function(resolve,reject){
        let arr = prompt("두 문자를 입력하세요").split(" ");
        setTimeout(function(){
            resolve(arr)
        },2000)
    })
}
A().then(function(){
    console.log(arr[0]);
    console.log(arr[1]);

})