let N = +prompt("Nhập vào số nguyên N: ");

if (N > 0) {
    document.write("Các số chia hết cho 5 từ 1 đến " + N + " là: <br>");
    for (let i = 1; i <= N; i++) {
        if (i % 5 == 0) {
            document.write(i + " ");
        }
    }
} else {
    alert("Vui lòng nhập số nguyên dương!");
}
