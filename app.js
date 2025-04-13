const colors=["red","green","rgb(1,45,20)","#f1c5D"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
  
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = color[randomNumber];
    color.textContent = color[randomNumber];

});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}