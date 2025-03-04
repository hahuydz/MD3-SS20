let N = prompt("Nhập một chuỗi số nguyên: ");
if (!isNaN(N) && Number.isInteger(Number(N))) {
    let reversedN = N.split('').reverse().join('');
    if (N === reversedN) {
        console.log("Là số đối xứng");
    } else {
        console.log("Không phải số đối xứng");
    }
} else {
    console.log("Số không hợp lệ");
}