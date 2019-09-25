function mojaFunkcja(){
    var mobile = document.getElementById("phone").value;
    mobile.length;
    if(mobile.length <= 8 || mobile.length >=10){
        alert ('Wprowadzono nieprawidłowy numer');
    }
    if(mobile.length = ""){
        alert ('Wprowadzono nieprawidłowy numer');
    }
}