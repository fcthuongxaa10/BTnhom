    function changeColor(){
        var b = document.querySelector('body');
        if(b.getAttribute("data-mode") === "dark"){
            b.setAttribute("data-mode", "light");
        }else{
            b.setAttribute("data-mode", "dark");
        }
    }