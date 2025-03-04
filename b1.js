let N = +prompt("Nhập vào số nguyên N: ");
let sum = 0;

if (N > 0) {
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    alert("Tổng các số từ 1 đến " + N + " là: " + sum);
} else {
    alert("Vui lòng nhập số nguyên dương!");
}
