Here is your info :
<?php  
   
   if(isset($_POST['submit']))
   {
   	  $name = $_REQUEST['name'];
      $email = $_REQUEST['email'];
      $gender = $_REQUEST['gender'];
       $day = $_REQUEST['day'];
       $month = $_REQUEST['month'];
       $year = $_REQUEST['year'];
      $blood = $_REQUEST['bgrp'];
      $ssc = $_REQUEST['ssc'];
      $hsc = $_REQUEST['hsc'];
      $bsc = $_REQUEST['bsc'];
      $msc = $_REQUEST['msc'];
      $file = $_REQUEST['file'];
      
       echo $name;
       echo $email;
       echo $gender;
       echo $day;
       echo $month;
       echo $year;
       echo $blood;
       echo $ssc;
       echo $hsc;
       echo $bsc;
       echo $msc;
       echo $file;
      

   }
?>
