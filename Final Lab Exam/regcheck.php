<?php

	if (isset($_GET['error'])) {
		
		if($_GET['error'] == 'db_error'){
			echo "Try again";
		}
	}
	if(isset($_POST['name'])&&isset($_POST['number'])&&isset($_POST['password']))header('logcheck.php');

?>