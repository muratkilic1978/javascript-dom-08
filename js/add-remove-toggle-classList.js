


//getElemMessage.classList.remove("message");
//getElemMessage.classList.add("updatemessage");
// Vanilla JavaScript 
//let myBoxElem = document.querySelector(".message").addEventListener("click", function() {
//    this.textContent = "Sign up to receive our newsletter for 10% off!";
//    this.classList.toggle('updatemessage');
//});

//
//let classElement = document.querySelector(".defaultStyle").addEventListener("click", function() {
//    if (this.getAttribute("class") == "defaultStyle"){
//         this.innerHTML= "Get <strong>20% discount</strong> off your first order!<br /><button id='discountBtn'>10OFF-FIRSTBUY</button>";
//         this.setAttribute("class", "changeStyle");
//        }
//       else{
//        this.innerHTML= "Get discount code HERE";   
//         this.setAttribute("class", "defaultStyle");
//        }
//});

let idElement = document.querySelector("#normalMessage").addEventListener("click", function() {
    if (this.getAttribute("id") == "normalMessage"){
         this.innerHTML= "Get <strong>20% discount</strong> off your first order!<br /><button id='discountBtn'>10OFF-FIRSTBUY</button>";
         this.setAttribute("id", "changeMessage");
        }
       else{
         this.innerHTML= "Get discount code HERE";
         this.setAttribute("id", "normalMessage");
        }
});