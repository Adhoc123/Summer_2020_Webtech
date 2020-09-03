function validate()
{
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 var male = document.getElementById('male').value;
 var female = document.getElementById('female').value;
 var other = document.getElementById('other').value;
 var day = document.getElementById('day').value;
 var month = document.getElementById('month').value;
 var year = document.getElementById('year').value;
 var blood = document.getElementById('bg').value;
 var ssc = document.getElementById('ssc').value;
 var hsc = document.getElementById('hsc').value;
 var bsc = document.getElementById('bsc').value;
 var msc = document.getElementById('msc').value;
 var file = document.getElementById('file').value;

 var lent = name.length;
 if(name=="")document.getElementById("nmsg").innerHTML="Field cannot be empty";
 else if(lent< 2)document.getElementById("nmsg").innerHTML="Length can't be less then 2";
 else if(name[0]>= '0' && name[0]<= '9'||name[0]=='+'||name[0]=='-'||name[0]=='*'||name[0]=='/'||name[0]=='='||name[0]=='@'||name[0]=='$'||name[0]=='%'||name[0]=='!'||name[0]=='|'||name[0]=='?' )document.getElementById("msg").innerHTML="name must contaion (a-z,A-Z, dot(.) or dash(-)) ";
 if(email=="")document.getElementById("emsg").innerHTML="Please drop your email";
 if(male=="on"&&female=="on"&&other=="on")document.getElementById('gmsg').innerHTML="Select one";
 if(day==""&&month==""&&year=="")document.getElementById('bmsg').innerHTML="Enter your birth date";
  else if(!(parseInt(day)>=1 && parseInt(day)<=31) || !(parseInt(month) >=1 && parseInt(month)<=12) || !(parseInt(year) >=1900 && parseInt(year) <=2016))
   {   
        
        document.getElementById('bmsg').innerHTML="choose day between 1 - 31 and month between 1 - 12 and year between 1900 - 2016";
   }
 if(blood=="")document.getElementById('bgmsg').innerHTML="You have to Select one";
 if(ssc==""&&hsc==""&&bsc==""&&msc=="")document.getElementById('demsg').innerHTML="select one";
 if(file=="")document.getElementById('fmsg').innerHTML="Please choose any";
}
