<?php
	$sys = array(
		'REMOTE_ADDR' => $_SERVER['REMOTE_ADDR'],
	 	'HTTP_HOST' => $_SERVER["HTTP_HOST"],
	 	'os'=>php_uname()
	 );  
	echo  json_encode($sys);
?>