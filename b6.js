let N = prompt("Nhập một số nguyên: ");
if (!isNaN(N) && Number.isInteger(Number(N)) && Number(N) > 1) {
    N = Number(N);
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Là số nguyên tố");
    } else {
        console.log("Không phải là số nguyên tố");
    }
} else {
    console.log("Không hợp lệ");
}