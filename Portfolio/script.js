let menuViewable = false;

function Select(){
    document.getElementById("nav").classList = "";
    menuViewable = false;  
}

function showHideMenu(){
    if(menuViewable){
        document.getElementById("nav").classList ="";
        menuViewable = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuViewable = true;
    }
}