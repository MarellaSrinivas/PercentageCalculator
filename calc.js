var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultfiled = document.getElementById('ResultField');
var form = document.getElementById('Percentage');

form.addEventListener('submit', function(event) {

    if(!numField1.value || !numField2.value)
        {
            alert("Please Enter Values");
        }
    else{
        
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        var result = x/y;
        var Percentage = result*100;
        resultfiled.innerHTML="answer is" + Percentage + "%";
        event.preventDefault();
    }

});