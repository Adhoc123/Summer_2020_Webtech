function validation() {
  var x = document.forms["myform"]["email"].value;
  if (x == "") {
    document.getElementById("demo").innerHTML="* Cannot be empty";
    return false;
  }
}