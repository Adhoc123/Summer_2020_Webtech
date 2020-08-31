
window.gvalid=false;
function free()
{ 
    if(document.getElementById("SSC").checked)window.gvalid=true;
    else if(document.getElementById("HSC").checked)window.gvalid=true;
    else if(document.getElementById("BSc").checked)window.gvalid=true;
    else
    {
        document.getElementById("msg").innerHTML="please choose at least one degree";
        window.gvalid=false;
       
    }
}

function deletes()
{
    document.getElementById("msg").innerHTML="";
}


function validate()
{
    if(window.gvalid==true)return true;
    else return false;
}