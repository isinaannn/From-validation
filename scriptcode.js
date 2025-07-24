
let userName=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let confirm=document.getElementById("confirm-password").value;
let error= document.getElementById("error")

function validateForm() {
    

let userName=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let confirm=document.getElementById("confirm-password").value;
let error= document.getElementById("error")



if (userName.trim()==="") {
    error.textContent="name field is required"
    return false
}
if (email.trim()==="") {
    error.textContent="email is required"
    return false
}else if(!email.includes("@") || !email.includes(".")){
    error.textContent="email format invalid"
    return false
}

if (password.trim()==="") {
    error.textContent="password required"
    return false
}else if (password.length<6) {
    error.textContent="password should must atleast 6 characters"
    return false
    
}
if(confirm.trim()===""){
     error.textContent="please confirm your password"
     return false
     
}else if (confirm !== password) {
    error.textContent = "Passwords do not match";
    return false;
}
const user={
    name: userName,
    email: email,
    password: password

}

localStorage.setItem("user",JSON.stringify(user))


error.textContent=""


alert("form submitted successfully")

return true
}