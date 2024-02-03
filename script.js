let incrementBtn = document.getElementById("incrementBtn");
let counterValue = document.getElementById("counterValue");




// if (isNaN(number)) {

//     number = 0;
// }
// counterValue.textContent = number;


incrementBtn.onclick = function() {
    localStorage.setItem("key", 0);
    number += 1;
    counterValue.textContent = number;
   
};
let number = parseInt(localStorage.getItem("key"));




    
 

 
 


 














