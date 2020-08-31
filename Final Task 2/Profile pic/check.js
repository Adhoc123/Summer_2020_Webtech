window.evalid=false;
window.uvalid=false;
function clearuser()
{
    var userId = document.getElementById("uid").value;
    if(userId==""  )
    {
       document.getElementById("umsg").innerHTML="field can't be empty";
       window.uvalid=false;
    }

   
    else if (userId<0) 
    {
        document.getElementById("umsg").innerHTML="invalid user id, must be positive";
        window.uvalid=false;
    }
    else window.uvalid=true;
}

function clearpic()
{
    var picture = document.getElementById("fname").value;
    if(picture=="")
    {
        document.getElementById("pmsg").innerHTML="picture can't be empty";
        window.evalid=false;
    }
    else window.evalid=true;

}

function deletes()
{
    document.getElementById("umsg").innerHTML="";
    document.getElementById("pmsg").innerHTML="";
}

function validate()
{
    if(window.evalid==true && window.uvalid==true)return true;
    else return false;
}