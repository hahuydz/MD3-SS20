let a = +prompt("Nhập số a:");
let b = +prompt("Nhập số b:");

if (a == "" || b == "" || b < 0) {
    console.log("Không hợp lệ");
} else {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a; 
    }

    console.log("Kết quả:", result);
}
