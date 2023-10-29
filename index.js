function calculate(){
    var inicial = parseFloat(document.getElementById("total").value);
    var percentage = parseFloat(document.getElementById("percentage").value);

    var totalOne = (inicial * percentage) / 100;

    var total = inicial - totalOne;

    document.getElementById("result").innerHTML = "$" + total.toFixed();
} 


