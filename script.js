window.onload = function(){
    moveCristiano();
    
}

function moveCristiano(){
    
    var cristiano = document.getElementById('cristiano');
    
    moveImage(cristiano);
}


function moveImage(jugador){
    var x = 0;
    var y = 0;
    document.onkeydown = ((event) =>{
         var key = event.which;
         switch(key) {
            case 37:
                if(x >= 10 ){
                    x = x - 10;
                    jugador.style.left = x + 'px';
                }
                break;
            case 39:
                 if(x <= 740){
                    x = x + 10;
                    jugador.style.left = x + 'px';
                }
                break;
            case 38:
                if(y >= 10){
                    y = y - 10;
                    jugador.style.top = y + 'px';
                } 
                break;
            case 40:
                 if(y <= 440){
                    y = y + 10;
                    jugador.style.top = y + 'px';
                }
                break;
            case 13:
                 if(jugador.id == 'cristiano'){
                    clock();
                    xCristiano = x;
                    yCristiano= y;
                    jugador.style.display = 'none';
                     
                    var messi = document.getElementById('messi');
                    messi.style.display = 'initial'; 
                    moveImage(messi);
                 }
                 break;
         }
        
        if(jugador.id == 'messi'){
            comprobar(xCristiano,x,y,yCristiano);
        }
        
    });
    
    function comprobar(xCristiano,xMessi,yMessi,yCristiano){
        if(xMessi == xCristiano && yMessi == yCristiano){
            alert('Has ganado! Has tardado: ' + t );
            reset();
        }
    }
    
}

 function clock(){
        
        var div = document.getElementById('tiempo'); 
        t = 0;
        timer = setInterval(function(){
            t = t + 1; 
            div.innerHTML = t;
        }, 1000);
    }

function reset(){
    var cristiano = document.getElementById('cristiano');
    var messi = document.getElementById('messi');
    var div = document.getElementById('tiempo'); 
    
    cristiano.style.display = 'initial';
    cristiano.style.top = 0;
    cristiano.style.left = 0;
    
    messi.style.display = 'none';
    messi.style.top = 0;
    messi.style.left = 0;
    
    xCristiano = 0;
    yCristiano= 0;
    
    clearInterval(timer);
    div.innerHTML = 0;
    
    moveCristiano();
   
}