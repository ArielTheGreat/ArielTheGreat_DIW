function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    if(check(charCode)){
        return true;
    }
    else{
        return false
    }
    return true;
}
function check(x)
{
    if((x == 48) && (document.getElementById("campo").value < 1))
    {
        return false;
    }
    return true;
}
var contador = 0;
var inter;
function iniciar()
{
    var x = parseInt(document.getElementById("campo").value);
    contador = x;
    if(document.getElementById("campo").value != "")
    {document.getElementById("contador").innerHTML = contador;
        inter = setInterval(restar,1000);
    }
}
function restar()
{
    contador = contador - 1;
    document.getElementById("contador").innerHTML = contador;
    if(contador == 0)
        {
            document.getElementById("contador").style.color="red";
            clearInterval(inter);
        }
}
function parar()
{
    clearInterval(inter);
}