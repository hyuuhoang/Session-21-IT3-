let monney = +prompt("Nhập số tiền bạn cần gửi");
let month = +prompt("Nhập số tháng gửi");
let interest = +prompt("Lãi suất tháng (%)"); // Lãi suất theo tháng
let initialmonney = monney;

for (let i = 0; i < month; i++) {
    monney *= (1 + interest / 100); // Cộng dồn lãi suất hàng tháng
}
interest = monney-initialmonney;
document.write(`Số tiền lãi là : ${interest.toFixed(2)} <br>`);
document.write("Số tiền cuối cùng sau " + month + " tháng là: " + monney.toFixed(2));
