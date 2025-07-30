

    

function toggleForm(){
    let signUpForm=document.getElementById("signup")
    let signInForm=document.getElementById("signin")

    signUpForm.classList.toggle("flex")
    signInForm.classList.toggle("flex")
}
function validateForm() {
    

let userName=document.getElementById("name").value;
let email=document.getElementById("signup-email").value;
let password=document.getElementById("signup-password").value;
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
     
}else if (confirm.trim() !== password.trim()) {
    error.textContent = "Passwords do not match";
    return false;
}


const user={
    name: userName,
    email: email,
    password: password

}

localStorage.setItem("user",JSON.stringify(user))

const userData= JSON.parse(localStorage.getItem("user"))



error.textContent=""

console.log(userData.name)
alert("Successfully Registered")

toggleForm()
return true
}


function signinForm(){
    let email=document.getElementById("signin-email").value;
    let password=document.getElementById("signin-password").value;
    let error= document.getElementById("error")

console.log(email)
const userData= JSON.parse(localStorage.getItem("user"))

   if(userData.email===email && userData.password===password) {
        alert("login succussfull")
        window.location.href="home.html"
        return false
    }else if (!userData) {
        alert("No user found. please sign up first.")
    }
    else{
        alert("invalid credentials")
        return false
    }
    
    return true

}

function toggleIcon(pwdid,iconid) {
     const pwd=document.getElementById(pwdid)
    const icon=document.getElementById(iconid)
    if (pwd.type === 'password') {
        pwd.type = 'text';
        icon.textContent = '🙈';
    } else {
        pwd.type = 'password';
        icon.textContent = '👁️';
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const info=document.getElementById("user-info")
    const userData=localStorage.getItem("user")
   
    if(!userData){
    alert("hello guest! please sign up")
        toggleForm()
    }else{
     const user=JSON.parse(localStorage.getItem("user"))
    info.innerHTML=`Hello <mark id="highlight"> ${user.name} </mark>Welcome to my page`
    console.log(info)
    }
})

function logout(){
    alert("You have been logged out")
    localStorage.removeItem("user")
    window.location.href=("index.html")
}