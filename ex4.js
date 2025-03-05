let a = +prompt("Nhập a:");
let b = +prompt("Nhập b:");
let c = +prompt("Nhập c:");
delta = b * b + 4 * a * c;
if(delta < 0){
    alert("Phương trình vô nghiệm");
}else if(delta = 0){
    X1 = - b / (2*a);
    X2 = - b / (2*a);
alert(`Phương trình có nghiệm kép X1 = X2 = ${X1}`);
}else{
    X1 = (-b + Math.sqrt(delta))/2 * a;
    X2 = (-b - Math.sqrt(delta))/2 * a;
    alert(`Phương trình có 2 nghiệm phân biệt X1 = ${X1} X2 = ${X2}`);
}