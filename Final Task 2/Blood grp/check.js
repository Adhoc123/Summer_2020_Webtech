
window.gvalid=false;
function free()
{ 
    var blood= document.getElementById("bgrp").value;
    if(blood=="")
    {
        document.getElementById("bmsg").innerHTML="* please choose at least one";
        window.gvalid=false;
       
    }
    else window.gvalid=true;
}

function deletes()
{
    document.getElementById("bmsg").innerHTML="";
}


function validate()
{
    if(window.gvalid==true)return true;
    else return false;
}