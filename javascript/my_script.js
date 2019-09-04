function calculate() {
    var amount = document.getElementById('amount').value;
    var percentage = document.getElementById('percentage').value;
 
    var tip = Number(amount) * Number(percentage) / 100;
    var total = tip + Number(amount);
 
    document.getElementById('tip').innerHTML = tip;
    document.getElementById('total').innerHTML = total;

}
 
document.getElementById('calculate').addEventListener('click', calculate);

