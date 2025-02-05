let icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "/darkMode/img/sun.png";
    }else{
        icon.src = "/darkMode/img/moon.png"
    }
}