number = 0;
for(let i=1; i<=5; i++){
    let num=Number(prompt(`Nhập số thứ ${i}`))
    if(!isNaN(num)){
        if(num%2!=0){
            number+=num;
        }
    }else{
        alert("số nhập vào không hợp lệ");
    }
}
alert("Tổng các số lẻ là: " +number);