let N = prompt("Nhập một số nguyên dương: ");
if (!isNaN(N) && Number.isInteger(Number(N)) && Number(N) > 0) {
    N = Number(N);
    let tong = 0;
    for (let i = 1; i <= N; i++) {
        tong += i;
    }
    console.log(tong);
} else {
    console.log("dữ liệu nhập vào không hợp lệ");
}