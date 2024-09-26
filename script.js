// var username = prompt ("Please enter your name");
// document.getElementById('output').innerHTML += "Hello " + username + " Nice to meet you";

/* document.getElementById('clickMe').addEventListener('mouseover', function(){
    alert("Button was hovered");

});

document.getElementById('colorinput').addEventListener('input', function(event) {

 console.log("You typed", event.target.value);

}); */

document.addEventListener('DOMcontentloaded', function() {

var form = document.getElementById('colorform');
var input = document.getElementById('colorinput');
var messagediv = document.getElementById('message');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var color = input.value.trim();

    if(color){
        messagediv.textContent = "Your color is" + color;
        messagediv.style.color = color;
        messagediv.classList.remove('hidden');

    }
    else{

        messagediv.classList.add('hidden');
    }
    

    });

});
