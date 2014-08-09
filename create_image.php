<?php

//Save Image in "/downloads/"
define('UPLOAD_DIR', 'downloads/');

$img = $_POST['img'];
$img = str_replace('data:image/png;base64,', '', $img);
$data = base64_decode($img);
$file = UPLOAD_DIR . uniqid() . '.png';

if(file_put_contents($file, $data)) {
	//serve filename
	$file = str_replace('downloads/', '', $file);
	echo $file;
}
else echo 0;