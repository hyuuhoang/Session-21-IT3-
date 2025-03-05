number1 = 0;
number2 = 0;
for(let i=1; i<=5; i++){
    let num=Number(prompt(`Nhập số thứ ${i}`))
    if(!isNaN(num)){
        if(num%2==0){
            number1++;
        }else{
            number2++;
        }
    }else{
        alert("số nhập vào không hợp lệ");
    }
}
alert("Số chẵn có :" +number1);
alert("Số lẻ có :" +number2);