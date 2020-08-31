<?php

    if(isset($_POST['submit']))
    {
        $userid = $_REQUEST['uid'];
        if($userid == NULL || (!$_REQUEST['fname']))echo "Invalid Profile!";
        elseif ($_REQUEST['fname'] && $userid > 0) 
        {
            $file = $_REQUEST['fname'];
            echo "Submit Successful!";
        }
    }
?>