let number = prompt("Nhập vào một chuỗi số nguyên:");
let reverse = ""; 

for (let i = number.length - 1; i >= 0; i--) {
    reverse += number[i];
}

if (number == reverse) {
    alert(number + " là số đối xứng");
} else {
    alert(number + " không phải là số đối xứng");
}
