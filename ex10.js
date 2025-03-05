let num = Number(prompt(`Bạn hãy nhập số bất kỳ:`));
let prime=2;
let number=0;

if(isNaN(num)){
    document.write(`Không hợp lệ`);
}else{
    document.write(`${num} số nguyên tố đầu tiên là `);
    while(number<num){
        let count=0;
        for(let i=1; i<=prime; i++){
            if(prime%i==0){
                count++;
            }
        }
        if(count==2){
            document.write(`${prime}, `);
            number++;
        }
        prime++;
    }
}