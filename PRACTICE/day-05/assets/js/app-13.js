let body=document.querySelector("body")
let colorName=document.querySelector("#color")
let butonEl=document.querySelector("#btn")

const colors=[
    "Red",
    "Green",
    "Yellow",
    "Purple",
    "Aqua",
    "Cornflowerblue",
    "Orange",
    "Pink",
    "White",
];



//console.log(colors[colors.length-1])

let index;
const colorChange = () => {

index=Math.floor(Math.random()*colors.length)

body.style.backgroundColor=colors[index]
colorName.innerHTML=colors[index]
buttonEl.innerHTML=colors[index]

}

butonEl.addEventListener("click",()=>{
    colorChange()
})
