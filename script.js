document.getElementById("changeBtn").addEventListener("click", function(){
document.body.style.background = "skyblue";
});

function showText(n){

let text = document.getElementById("displayText");

if(n === 1){
text.innerHTML = "Item 1 clicked: Flexbox is used for layout alignment.";
}
else if(n === 2){
text.innerHTML = "Item 2 clicked: Responsive design adjusts to screen size.";
}
else{
text.innerHTML = "Item 3 clicked: Media queries help mobile responsiveness.";
}

}
