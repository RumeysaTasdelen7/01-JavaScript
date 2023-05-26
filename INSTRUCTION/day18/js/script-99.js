import randomMix, { numberSortASC, numberSortDESC, stringSortASC, stringSortDESC } from "./sort.js";
const arr1 = ["Ali", "Veli", "Selin", "Şener", "Leyla", "Zeki", "Metin"];
const arr2 = [56, 13, 6, 134, 44, 12];
document.getElementById("btn1").addEventListener("click", ()=>{
    console.log(stringSortASC(arr1));  //alfabeye göre baştan sona sıralar
});
document.getElementById("btn2").addEventListener("click", ()=>{
    console.log(stringSortDESC(arr1)); //alfabeye göre sondan başa sıralar
});
document.getElementById("btn3").addEventListener("click", ()=>{
    console.log(numberSortASC(arr2));  //küçükten büyüğe sıraladı
});
document.getElementById("btn4").addEventListener("click", ()=>{
    console.log(numberSortDESC(arr2)); //büyükten küçüğe sıralar
});
document.getElementById("btn5").addEventListener("click", ()=>{
    console.log(randomMix(arr2));  //karışık sıralar
});