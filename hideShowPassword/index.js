



let password = document.getElementById("password");
let eyeicon = document.getElementById("eyeicon");

// eyeicon.onclick = function(){
//     if(password.type == "password"){
//         password.type = "text";
//         eyeicon.src ="/hideShowPassword/img/eye-open.png"
//     }else{
//         password.type = "password";
//         eyeicon.src ="/hideShowPassword/img/eye-close.png"
//     }
// }


eyeicon.addEventListener("click", ()=>{
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "/hideShowPassword/img/eye-open.png"
    }else{
        password.type = "password";
        eyeicon.src = "/hideShowPassword/img/eye-close.png"
    }
})