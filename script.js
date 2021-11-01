
let selectedColor = "black";

const colors = ['black' , 'green', 'gold', 'gray']


let o = document.getElementsByClassName("color");

for (let i = 0 ; i < colors.length ; i += 1){


  
    
        o[i].style.backgroundColor = colors[i];
        o[i].addEventListener('click', selceionarCor);  


}



function selceionarCor (element) {   

  let g = element.target

  

  document.getElementsByClassName('selected')[0].classList.remove('selected')
  g.classList.add('selected')


  selectedColor = g.style.backgroundColor;
  
  
}


z = document.getElementsByClassName('pixel');

for (let i = 0 ; i < z.length ; i += 1){


    
    
    
     z[i].addEventListener('click', corQuadro);  


}

function corQuadro (element) {

    let h = element.target
    h.style.backgroundColor = selectedColor
 

}


function limparQuadro () {

        for (let x = 0 ; x < z.length ; x += 1) {
            
            z[x].style.backgroundColor = 'white';


        }

        
}


    document.getElementById("clear-board").addEventListener('click', limparQuadro)








