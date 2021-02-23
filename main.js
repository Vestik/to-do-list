let pridat = document.getElementById('tlacitko');                       //proměnná pro tlačítko    
let ukoly = document.getElementById('ukoly');                           //proměnná pro ukládání úkolů
let vlozeny = document.getElementById('vloz');                          //proměnná pro zadávaný text

pridat.addEventListener('click', function(){                            //kliknutí zapne funkci
    var paragraph = document.createElement('p');                        //vytvoří paragraf
    paragraph.classList.add('paragraph-styl');                       //přidá css k paragrafu

    paragraph.innerText = vlozeny.value;                                //value bude rovna zadanému textu

    ukoly.appendChild(paragraph);                                       //konec paragrafu

    vlozeny.value = null;                                               //vyresetovani přidání

    paragraph.addEventListener('click', function(){                     //jedno kliknutí vyvolá funkci
        paragraph.style.textDecoration = "line-through";                //zaškrknutí textu
    })
    paragraph.addEventListener('dblclick', function(){                  //dvě kliknutí vyvolá funkci
        ukoly.removeChild(paragraph);                                   //vymazání textu dvojté kliknutí
    })
})

    
