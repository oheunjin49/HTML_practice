function buy_asis(item, price, quantity,callback){
    console.log(item +" 상품을"+quantity+"개 골라서 점원에게 주었습니다.")
    
    setTimeout(function(){
        console.log("계산이 필요합니다,");
        let total = price * quantity;
        
        callback(total);
    },2000);    
}
function pay(tot){
    console.log(tot+"원을 지불하였습니다.");
    payString();}
let result = buy_asis("고구마",1000,5,pay);
pay(result);