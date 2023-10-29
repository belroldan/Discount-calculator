function calculate(){
    var inicial = parseFloat(document.getElementById("total").value);
    var percentage = parseFloat(document.getElementById("percentage").value);

    var total = (inicial * percentage) / 100;

    document.getElementById("result").innerHTML = "$" + total.toFixed();
} 


