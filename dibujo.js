var d = document.getElementById("dibujouwu");
var lienzo = d.getContext("2d");
dibujarlinea("pink", 10, 300, 220, 10);
dibujarlinea("pink", 300, 10, 10, 20);
function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial,);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}



