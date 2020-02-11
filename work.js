

var menu_state = false;
console.log("what is !",menu_state, ! menu_state);




function MenuToggle(){
    console.log("menu state start close", menu_state);
    if (menu_state === false){
        MenuOpen();
        menu_state = true;
    } else {
            MenuClose();
            menu_state = false;
    }
    console.log("menu state end open", menu_state); 
}


function MenuOpen(){
    document.querySelector("#menu").style.display = " block";
    setTimeout (function(){
    document.querySelector("#menu").style.opacity = 1;},100);
    menu_state = true;

}

function MenuClose (){
    document.querySelector("#menu").style.opacity = 0;
    setTimeout (function(){ 
        document.querySelector("#menu").style.display ="none";
    },500);
   
    menu_state = false;
}
