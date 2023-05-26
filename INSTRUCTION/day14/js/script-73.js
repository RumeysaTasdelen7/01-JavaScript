import { students } from "../data/students.js";
document.getElementById("btnShowLowScores").addEventListener("click", ()=>{
    setColorForLowScores();
});
const setColorForLowScores = () => {
    const trEls = document.querySelectorAll("#tblStudents tbody tr");
    
    trEls.forEach( (tr)=>{
        const score = tr.querySelector("td:last-child").innerText;
        if(score<50){
            tr.classList.add("table-danger");
        }
    } )
}
const loadData = () => { 
    let html = "";
    students.forEach( (student, i)=>{
        html += `
            <tr>
                <td>${i+1}</td> 
                <td>${student.name}</td>
                <td>${student.point}</td>    
            </tr>`;
    } )  
    const tbodyEl = document.querySelector("#tblStudents tbody");
    tbodyEl.innerHTML = html;
    
    /* 20.satırda student.id demiyor oluşumuzun sebebi id sürekli değişebilir i+1 demeliyiz i=0 olduğu için hiç sorun yaşamayız*/
 }
 loadData();