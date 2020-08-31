function validation()
{
  var x = document.forms["myform"]["gender"].value;
  if (x == "") {
    document.getElementById("demo").innerHTML = "* Atleast one of them has to be selected";
    return false;
  }
}