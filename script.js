const button=document.getElementById("changeBtn");

button.addEventListener("click",function(){

document.body.style.background="skyblue";

});

function showText(number){

let text=document.getElementById("displayText");

if(number===1){

text.innerHTML=
"Item 1: Flexbox allows easy alignment of webpage elements.";

}

else if(number===2){

text.innerHTML=
"Item 2: Responsive layouts automatically adjust for devices.";

}

else{

text.innerHTML=
"Item 3: Media queries help websites work on mobile and desktop.";

}

}
