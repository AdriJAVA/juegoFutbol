var futbolGame = (function() {
    this.cristiano = {
        id: 'cristiano',
        x : 0,
        y : 0
    }
    this.messi = {
        id: 'messi',
        x: 0,
        y: 0
    }
    this.jugador = this.cristiano;
    this.elapsedTime = 0;

    function getPlayer(player) {
        return document.getElementById(player.id);
    }

    function reset() {
        clearCristiano();
        clearMessi();    

        var div = document.getElementById('tiempo'); 
        clearInterval(timer);
        div.innerHTML = 0;
    }    

    function clearCristiano() {
        var cristianoDOM = getPlayer(cristiano);
        cristianoDOM.style.display = 'initial';
        cristianoDOM.style.top = 0;
        cristianoDOM.style.left = 0;
        cristiano.x = 0;
        cristiano.y = 0;
    }

    function clearMessi() {
        var messiDOM = getPlayer(messi);
        messiDOM.style.display = 'none';
        messiDOM.style.top = 0;
        messiDOM.style.left = 0;
        messi.x = 0;
        messi.y = 0;
    }


    function clock(){    
        var div = document.getElementById('tiempo'); 
        elapsedTime = 0;
        timer = setInterval(function(){
            elapsedTime = elapsedTime + 1; 
            div.innerHTML = elapsedTime;
        }, 1000);
    }

    function moveImage(key) {
        switch(key) {
        case 37:
            if(jugador.x >= 10 ){
                jugador.x -= 10;
                getPlayer(jugador).style.left = jugador.x + 'px';
            }
            break;
        case 39:
            if(jugador.x <= 740){
                jugador.x += 10;
                getPlayer(jugador).style.left = jugador.x + 'px';
            }
            break;
        case 38:
            if(jugador.y >= 10){
                jugador.y -= 10;
                getPlayer(jugador).style.top = jugador.y + 'px';
            } 
            break;
        case 40:
            if(jugador.y <= 440){
                jugador.y += 10;
                getPlayer(jugador).style.top = jugador.y + 'px';
            }
        break;

        case 13:
            changePlayer();
            break;
        }

        checkWinner();
    }

    function changePlayer() {
        if (jugador.id === cristiano.id) {
            hidePlayer();
            jugador = messi;
            showPlayer();
            clock();

        } else {
            jugador = cristiano;
        }
    }

    function hidePlayer() {
        getPlayer(jugador).style.display = 'none';
    }

    function showPlayer() {
        getPlayer(jugador).style.display = 'initial';
    }

    function checkWinner() {
        if (jugador.id === messi.id) {
            if (messi.x === cristiano.x && messi.x === cristiano.y) {
                alert('Has ganado! Has tardado: ' + elapsedTime );
                reset();
            }       
        }
    }

    return {
        moveImage: moveImage
    }   
})();

    
document.onkeydown = ((event) =>{
    var key = event.which;
    futbolGame.moveImage(key);
});