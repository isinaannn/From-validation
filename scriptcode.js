

const signup= document.getElementById("signup")
const signin= document.getElementById("signin")


function toggleForm(){
    let signUpForm=document.getElementById("signup")
    let signInForm=document.getElementById("signin")

    signUpForm.classList.toggle("flex")
    signInForm.classList.toggle("flex")
}
    if (signup) {
        
    
signup.addEventListener("submit",async function signUp(event){
    
    event.preventDefault()
    

    const form = event.target;
    console.log(form)
    // 🔍 Check HTML5 validation first
    if (!form.checkValidity()) {
        form.reportValidity(); // Show built-in browser validation errors
        return;
    }
    

let userName=document.getElementById("name").value;
let email=document.getElementById("signup-email").value;
let password=document.getElementById("signup-password").value;
let confirm=document.getElementById("confirm-password").value;
let error= document.getElementById("error");
 





if (password==="") {
    error.textContent="password required"
    return 

}else if (password.length<6) {
    error.textContent="password should must atleast 6 characters"
   
    return
}

if(confirm===""){
     error.textContent="please confirm your password"
    return
     
}else if(confirm!==password) {
    error.textContent = "Passwords do not match";
    // alert("This password is wrongggg");
    return
}
 try{
const res=await fetch("https://my-json-server-yi0p.onrender.com/users",{
    method: "POST",
    headers: {
        'content-Type': 'application/json'
    },
    body : JSON.stringify({userName,email,password})
})

if (!res.ok) {
  console.log("response error")  
}
const data= await res.json()

console.log(data)

 }
 catch(err) {
    console.error("Fetch error:",err)
 }

alert("registration success")
toggleForm()

return true

})

    }


    if (signin) {
        
    

 signin.addEventListener("submit",async function signin(event){

    event.preventDefault()
    let email=document.getElementById("signin-email").value;
    let password=document.getElementById("signin-password").value;
    let error= document.getElementById("error")
    console.log()
try{
    const res=await fetch(`https://my-json-server-yi0p.onrender.com/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
    if (!res.ok) {
        console.log("fetch failed")
        // alert("fetch failed")
    }else{
        // alert("fetch success")
    }
    const data=await res.json()


    console.log(data)
    if (data.length>1) {
        alert("multiple users in same email")
    }else if (data.length<1) {
        alert("inavlid email or password")
    }else {
        alert(`login succussfull`)
        window.location.href="home.html"
        localStorage.setItem("userName",data[0].userName)
        localStorage.setItem("userId",data[0].id)
        
       
    }

} catch (err) {  
    console.error("Error logging in",err)
}
  
    
    return true
 })

function toggleIcon(pwdid,iconid) {
     const pwd=document.getElementById(pwdid)
    const icon=document.getElementById(iconid)
    if (pwd.type === 'password') {
        pwd.type = 'text';
        icon.textContent = '👁️';
    } else {
        pwd.type = 'password';
        icon.textContent = '🙈';
    }
}

    }

window.addEventListener("DOMContentLoaded", function(){
    
    const userInfo= document.getElementById("user-info")
    
    if (userInfo) {
   const userName= localStorage.getItem("userName")
   console.log(userName)
     userInfo.textContent=`hello ${userName} now you can leave`
     console.log('script loaded')
    }else{
        console.log("elemnet is not defined this page")
    }
})



async function logout(){
    const confirmation= confirm("Do you want to logout")
       const userId= localStorage.getItem("userId")
    if (confirmation==true) {

        const res= await fetch(`https://my-json-server-yi0p.onrender.com/users/${userId}`,{
            method : "DELETE"
        })

        if (!res.ok) {
            console.log("response error")
        }

        localStorage.removeItem("userId")
        localStorage.removeItem("userName")
         window.location.href="index.html"
        

    
    toggleForm()
    }
   
    
}


