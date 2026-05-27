const button=document.getElementById("changeBtn");

button.addEventListener("click",function(){

document.body.style.background="skyblue";

});


function showText(number){

let text=document.getElementById("displayText");

if(number===1){

text.innerHTML=
"Item 1: Flexbox allows elements to align easily in rows and columns.";

}

else if(number===2){

text.innerHTML=
"Item 2: Responsive layouts automatically adjust to screen sizes.";

}

else{

text.innerHTML=
"Item 3: Media queries help websites work on mobile devices.";

}

}