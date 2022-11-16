var dir = 1, id = 0, strpos = 0;
var speed = 120;

var str = new Array(1);
str[0] = "ola mundo!";
str[1] = "i love java!!!";

window.onload = function() 
{window.setInterval('ParseText()', speed);}

function ParseText()
{if(dir==1)AddChar();else RemChar();ShowItem();}

function AddChar()
{strpos ++;if(strpos>str[id].length) dir=-1;}

function RemChar()
{strpos --;if(strpos<0) {dir=1; NextItem();}}

function ShowItem()
{var result = str[id].substring(0, strpos);
document.getElementById("dsp").innerHTML = result;}

function NextItem()
{id++;if(id>str.length-1) id=0;}