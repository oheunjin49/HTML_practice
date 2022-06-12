//동기 프러그램
//return 총 물건값
function buy_normal(item, price, quantity){
    //1 출력
    console.log(item +" 상품을"+quantity+"개 골라서 점원에게 주었습니다.")
    //2 출력
    console.log("계산이 필요합니다,");

    let total = price * quantity;
    return total;
}
function pay(tot){
    //3출력
    console.group(tot+"원을 지불하였습니다.");
}
let result = buy_normal("고구마",1000,5);
pay(result);