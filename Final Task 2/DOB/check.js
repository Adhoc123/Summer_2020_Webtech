
window.nvalid=false;
var i;
 
 function free()
 {
    var date = document.getElementById("date").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    
    if(date ==null|| month==null||year==null)
    {  
        document.getElementById("msg").innerHTML="field can't be empty";
        
        window.nvalid =false;
    }

    else if((date>=1 && date<=31) && (month >=1 && month<=12) && (year >=1900 && year <=2016))
    {   
         
         window.nvalid =true;
        
    }
    
 
    else 
    {
        document.getElementById("msg").innerHTML="must be a valid number (dd: 0-31, mm: 1-12, yyyy: 1900-2016)";  
        window.nvalid =false;
    } 

    
 }

 
function deletes()
{
    document.getElementById("msg").innerHTML = "";
    
}

function validate()
{
   
    if(window.nvalid==true)
    {
       
        return true;
    }
    else
    {
        
        return false;
    }
    
}
