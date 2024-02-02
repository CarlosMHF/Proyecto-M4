


function logIn(){
    
    let mail = document.getElementById("inputEmail").value;

if (mail=="Cristopher@gmail.com") {
 
    window.location.href = "../Vista Jefe/index.html"
    alert ("Inicio exitoso")
} else  { 
    if (mail== "Carlos.h@gmail.com") {
     
        window.location.href = "../Vista Docente/index.html" 
        alert ("Inicio exitoso")    
    }else{
        alert ("Credenciales incorrectas") 
    }
}

    
   

    

    
}

