function f1()
{
    var name = document.getElementById('name').value;
    if(name=="")document.getElementById('nMsg').innerHTML="* Cannot be empty";
    else if((name[0]>='a'&&name[0]<='z')||(name[0]>='A'&&name[0]<='Z'))
    {
    	if(name.length<2)document.getElementById('nMsg').innerHTML="* Length is less than 2";
        if(name.length>=2)document.getElementById('nMsg').innerHTML="";
    }
    else
    {
    	document.getElementById('nMsg').innerHTML="* Can contain a-z or A-Z or dot(.) or dash(-)";
    }

}
