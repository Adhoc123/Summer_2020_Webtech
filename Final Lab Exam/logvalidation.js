function validate() {
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	if(name == "")
		{
			document.getElementById('nmsg').innerHTML="Can't be empty";
        }
    else if(password == "")document.getElementById('pmsg').innerHTML="Field can't be empty";
}