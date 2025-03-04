let str = prompt("Nhập vào một chuỗi bất kỳ: ");
let search = prompt("Nhập ký tự cần tìm kiếm: ");
if (str && search && search.length === 1) {
    let found = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === search) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log("Tồn tại từ cần tìm kiếm");
    } else {
        console.log("Không tồn tại từ cần tìm kiếm");
    }
} else {
    console.log("Dữ liệu nhập vào không hợp lệ");
}