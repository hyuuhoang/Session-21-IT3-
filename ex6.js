let number = +prompt("Nhập 1 số nguyên bất kỳ");
for(let i=1; i<number; i++){
    if(number%i==0){
        document.write(`${i}`);
    }
}