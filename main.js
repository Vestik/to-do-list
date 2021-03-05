let pridat = document.getElementById('tlacitko');  
let ukoly = document.getElementById('ukoly');  
let vlozeny = document.getElementById('vloz');



pridat.addEventListener('click', function(){ 
    if (vlozeny.value == "") {
    alert("Zadej text!!!");
    }
    else{
    var vystup = document.createElement("ahoj");
    var cudl = document.createElement("BUTTON");
    var t = document.createTextNode("Odstranit ukol");
    cudl.appendChild(t);
    vystup.innerHTML = vlozeny.value;

    vlozeny.value = null;

    cudl.classList.add('cudl-styl');
    
    ukoly.appendChild(vystup); 
    ukoly.appendChild(cudl);

    vystup.addEventListener('click', function(){                     
        vystup.style.textDecoration = "line-through";               
    })

    vystup.addEventListener('click', function(){                     //jedno kliknutí vyvolá funkci
        vystup.style.textDecoration = "line-through";                //zaškrknutí textu v DOMU
    })

    cudl.addEventListener('click', function(){
        ukoly.removeChild(vystup);
        ukoly.removeChild(cudl);
    })
}
})

function navod() {alert("zadáš text stisknutím + přidáš do to-do listu \n\n\ajednim kliknutím splníš úkol \ndvěma kliknutímy odstraníš úkol");}       //alert návod