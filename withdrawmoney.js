

module.exports.withdraw = (money) => {
    let remain =money ;
    let remainBank1000 = 10;
    let remainBank500 = 10 ; 
    let remainBank100 = 10;
    if(remain >= 1000){
        let bank1000  = money / 1000;
        if(remainBank1000 >= parseInt(bank1000,10)){
            remainBank1000 -=parseInt(bank1000,10);
            remain =  money % 1000 ; 
            console.log(`แบ๊งค์พัน จำนวน ${parseInt(bank1000)} ใบ`);
        }
    } 
    if(remain >= 500){
        let bank500  = remain / 500;
        if(remainBank500 >= parseInt(bank500,10)){
            remainBank500 -=parseInt(bank500,10);
            remain =  remain % 500 ; 
            console.log(`แบ๊งค์ห้าร้อย จำนวน ${parseInt(bank500)} ใบ`);
        }
    } 
    if(remain >=100) {
        let bank100  = remain / 100;
        if(remainBank100 >= parseInt(bank100,10)){
            remainBank100 -=parseInt(bank100,10);
            remain =  remain % 100 ; 
            console.log(`แบ๊งค์ร้อย จำนวน ${parseInt(bank100)} ใบ`);
        }
    }

    if(remain >=100){
        console.log(`จำนวนเงินแบ๊งค์ไม่เพียงพอที่จำถอน`);
        } else{
        console.log(`เหลือเศษจำนวน ${remain} บาท`);
    }
    
}
require('make-runnable/custom')({
    printOutputFrame: false
})
