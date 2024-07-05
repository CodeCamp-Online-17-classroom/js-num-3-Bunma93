// write code here
function bonus(){
    let cost = prompt("ยอดซื้อ-ขาย")
    let total = Math.floor(cost/100);
    return total;
}

let totalbonus = bonus();
console.log(totalbonus);

