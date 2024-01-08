// Les variables dont j'ai besoin

var sp, btn_start, btn_stop, t, ms, s ,mn, h;

// fonction pour initialiser les variables quand la page se charge

window.onload= function(){
    sp= document.getElementsByTagName('span');
    btn_start= document.getElementById('start');
    btn_stop= document.getElementById('stop');
    t;
    ms=0, s=0, mn=0 ,h=0;
    
}

// mise en place du compteur

function update_chrono(){

    ms+=1;
    if(ms==10)
    {
        ms=0;
        s+=1;
    }

    if(s==60)
    {
        s=0;
        mn+=1;
    }

    if(mn==60)
    {
        mn=0;
        h+=1;
    }

  // Insertion des valeurs dans les spans
  //[0] permet de selectionner le premier span
  //[1] permet de selectionner le deuxieme span etc...
  
  sp[0].innerHTML = h + "h";
  sp[1].innerHTML = mn + "min";
  sp[2].innerHTML = s + "s";
  sp[3].innerHTML = ms + "ms";
}

//mise en place de la fonction du boutton start

function start(){

    // cette ligne de code exécute la fonction update_chrono() tous les 100 ms
    t=setInterval(update_chrono,100);

    btn_start.disabled= true;

}

// mise en place de la fonction du boutton stop

function stop(){

    clearInterval(t); // suppression de l'interval t qu'on a créé
    btn_stop.disabled= false;
}

// mise en place de la fonction du button reset qui réinitialise les valeurs du compteurs

function reset(){

    clearInterval (t);
    btn_start.disabled= false;
    ms=0, s=0, mn=0, h=0;
    // ici on insére ces nouvelles valeurs dans les spans 
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}