function validate()
{
   var name = document.getElementById('name').value;
   var contact = document.getElementById('number').value;
   var password = document.getElementById('password').value;
   if(name=="")document.getElementById('nmsg').innerHTML="Please drop name";
   if(contact=="")document.getElementById('cmsg').innerHTML="fill your number";
   if(password=="")document.getElementById('pmsg').innerHTML="save your pass";
}