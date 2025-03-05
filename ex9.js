let n = +prompt("Nhập 1 số nguyên bất kỳ:");
if (isNaN(n) || n < 2) {
    alert("Số không hợp lệ");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(n + " là số nguyên tố");
    } else {
        alert(n + " không phải là số nguyên tố");
    }
}