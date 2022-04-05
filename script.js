  function random() {
    var result = document.getElementById("result");
    var min =  document.getElementById("min").value;
    var max = document.getElementById("max").value;

    min = parseFloat(min);
    max = parseFloat(max);

    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    result.innerHTML = randomNumber;  
   
  }