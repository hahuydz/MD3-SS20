let a = prompt("Nhập số a: ");
let b = prompt("Nhập số b: ");
if (!isNaN(a) && !isNaN(b) && Number.isInteger(Number(a)) && Number.isInteger(Number(b))) {
    a = Number(a);
    b = Number(b);
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    console.log(result);
} else {
    console.log("Không hợp lệ");
}