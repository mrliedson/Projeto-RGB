const r = document.getElementById('r');
const g = document.getElementById('g');
const b = document.getElementById('b');
let divColor = document.getElementById('rgb')
let text = document.getElementsByClassName('text')

let rvalue = 0
let gvalue = 0
let bvalue = 0


function atualizar(){
    rvalue = r.value;
    gvalue = g.value;
    bvalue = b.value;
    divColor.style.backgroundColor = `rgb(${rvalue}, ${gvalue}, ${bvalue})`

    r.style.accentColor = `rgb(${rvalue},0,0)`;
    g.style.accentColor = `rgb(0,${gvalue},0)`;
    b.style.accentColor = `rgb(0,0, ${bvalue})`;

    text[0].value = r.value;
    text[1].value = g.value;
    text[2].value = b.value;
}
atualizar();
