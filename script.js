function compute() {
    p = document.getElementById("principal").value;

    r = document.getElementById("rate").value;

    y = document.getElementById("years").value;
    result = document.getElementById("principal").value;

    function num() {
        var v = document.getElementById("principal").value;
        if (v <= 0) {
            alert("Value should be a positive number")
        }
    }

    function sliderChange(val) {
        document.getElementById("slider").value;
    }

    var dateobj = newDate();
    var B = dateobj.getFullYear();
    year = b + y;

    var interest = principal * years * rate / 100;

    var amt = interest;
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit" + p + ",<br/> at an interest rate of" + r + "%,<br/>You will receive an amount of" + amt + ",<br/>in the year" + year;
}
