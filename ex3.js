let passwork = 12345;
let pass = +prompt("Nhập mật khẩ gồm 5 số");
if(!isNaN(pass)){
    if(pass == passwork){
        alert("mật khẩu đã đúng");
    }else{
        alert("mật khẩu sai ")
    }
}else{
    alert("số nhập vào không hợp lệ");
}
