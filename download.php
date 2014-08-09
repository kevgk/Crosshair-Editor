<?php

$file = stripslashes($_GET['!']);
header("Content-type: application/png");
header("Content-Disposition: attachment; filename=siteM16.png");
readfile("downloads/".$file);