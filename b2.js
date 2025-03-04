let N = prompt("Nhập một số nguyên dương: ");
if (!isNaN(N) && Number.isInteger(Number(N)) && Number(N) > 0) {
    N = Number(N);
    let result = [];
    for (let i = 1; i <= N; i++) {
        if (i % 5 === 0) {
            result.push(i);
        }
    }
    console.log(`các số chia hết cho 5 từ 1 đến ${N} là : ${result.join(", ")}`);
} else {
    console.log("dữ liệu nhập vào không hợp lệ");
}