                                                  
document.getElementById("nextButton").onclick = function(){
window.location.href = "discretisation.html";                               }               
let s = document.getElementById("slider");
let btn = document.getElementById("nextButton");

btn.style.opacity = parseFloat(s.value);
 s.addEventListener("input", function () {
   btn.style.opacity = parseFloat(s.value);
    });

