// Selectors of Border of each element 

let firstNameBorder = document.getElementById("first-name");
let lastNameBorder = document.getElementById("last-name");
let messageBorder = document.getElementById("message");
let emailBorder = document.getElementById("email-address");



// Selectors of required text note
let requierdTextFirst = document.querySelector(".requiredTextFirst");
let requierdTextLast = document.querySelector(".requiredTextLast");
let requierdTextEnquiry = document.querySelector(".requiredTextEnquiry");
let requierdTextMessage = document.querySelector(".requiredTextMessage");
let requiredTextConsent = document.querySelector(".requiredTextConsent");
let requiredTextEmail = document.querySelector(".requiredTextEmail");



let inputs = document.querySelectorAll("input");
let textArea = document.querySelector("textarea")
let success = document.querySelector(".success") 

let form = document.querySelector("form");
form.addEventListener("submit",function(e){
    //a state variable to know if or not to send the succes massage
    let state = true;
    let formData = new FormData(form)
    e.preventDefault();
    let first_name = formData.get("first-name");
    let last_name = formData.get("last-name")
    let email = formData.get("email-address")
    let enquiry = formData.get("enquiry")
    let message = formData.get("message")
    let consent = formData.get("consent")
    
    // Regular Exp of Email Verification
    let regEmail = /\w+\d*\@\w+\.\w+/ig;

    // all conditions of forms verification 

    if (first_name.valueOf() == "") {
        // firstNameBorder.style.borderColor = "rgba(255, 0, 0, 0.63)";
        firstNameBorder.classList.toggle("error")
        requierdTextFirst.style.display = "block";
        state = false;
    }
    if (last_name.valueOf() == "") {
        // lastNameBorder.style.borderColor = "rgba(255, 0, 0, 0.63)";
        lastNameBorder.classList.toggle("error")
        requierdTextLast.style.display = "block";
        state = false;
    }
    if(state){
        success.style.animation = "show 4s forwards ease-in-out";
        inputs.forEach((el)=>{
            if(el.value != "Book Appointment")
            el.value = null;
            el.checked = false;
        })
        textArea.value = "";
        setTimeout(() => {
            success.style.animation = "";
        }, 4000);
    }
})



/*when a user selects and element which is colored in red it should return to normal*/ 


inputs.forEach((el)=>{
    el.addEventListener(("focus"),function(){
        if(el.classList.contains("error")){
            el.classList.toggle("error")
        }
        if(el.id == "general-enquiry" || el.id == "support-request"){
            requierdTextEnquiry.style.display = "none"
        }else if(el.id == "consent"){
            requiredTextConsent.style.display = "none"
        }else if(getComputedStyle(el.nextElementSibling).display == "block" && el.type != "file"){
            el.nextElementSibling.style.display = "none"
        }
    })
})
textArea.addEventListener("focus",function(){
    if(textArea.classList.contains("error")){
        textArea.classList.toggle("error")
    }
    if(getComputedStyle(textArea.nextElementSibling).display == "block"){
        textArea.nextElementSibling.style.display = "none"
    }
})