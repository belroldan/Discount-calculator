// let inicial = document.getElementById("total").value;
// let percentage = document.getElementById("percentage").value;
// let button = document.getElementById("")


function calculate(){
    var inicial = parseFloat(document.getElementById("total").value);
    var percentage = parseFloat(document.getElementById("percentage").value);

    var total = (inicial * percentage) / 100;

    document.getElementById("result").innerHTML = "$" + total.toFixed();
} 


