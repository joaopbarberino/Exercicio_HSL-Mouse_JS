function pintar(corW, corH){
    corH = corH;
    document.body.style.background = `hsl(${corW}deg,100%,${corH}%)`;
}

function calcularCor(event){
    let x = event.x;
    
    let w = window.innerWidth;
    let h = window.innerHeight;    
    
    let corW = (event.x/w)*360;
    let corH = ((h - event.y)/h)*100;     

    pintar(corW, corH);
}

window.addEventListener("mousemove", calcularCor);
