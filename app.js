console.log("Hello JavaScript");

function calculate(){
    var name1 = document.getElementById("first-name");
    var name2 = document.getElementById("second-name");
    var random = Math.floor(Math.random()*100);
    document.getElementById('calculate-love').value = random + '%';
}