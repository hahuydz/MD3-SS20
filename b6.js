let n = +prompt("Nhập vào một số:");
if (n <= 1) {
    console.log("Không hợp lệ");
} else {
    let dem = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            dem++;
        }
    }
    if (dem == 2) {
        console.log(n + " là số nguyên tố");
    } else {
        console.log(n + " không phải là số nguyên tố");
    }
}
