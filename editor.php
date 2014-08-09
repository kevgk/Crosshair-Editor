<!DOCTYPE html>
<html>
	<head>
		<!-- Title & Meta Tags -->
		<title>Crosshair Editor</title>
		<meta charset="utf-8">

		<!--Load Stylesheets -->
		<link rel="stylesheet" href="css/style.css"/>
		<link rel="stylesheet" href="css/jquery-ui-1.10.1.custom.min.css"/>

		<!-- Load Javascript -->
		<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
		<script type="text/javascript" src="js/improv3d-editor.js"></script>
		<script type="text/javascript" src="//code.jquery.com/ui/1.11.0/jquery-ui.min.js"></script>
	</head>
	<body>
		<!-- Page -->
		<div id="page">
			<!-- Sidebar -->
			<div id="sidebar">
				<fieldset>
					<legend>Size</legend>
					<label>Size</label>
					<div class="range">
						<div class="min">0%</div>
						<div class="mid">I</div>
						<div class="max">200%</div>
					</div>
					<div id="slider-proportional"></div>
					<label>Width</label>
					<div class="range">
						<div class="min">0%</div>
						<div class="mid">I</div>
						<div class="max">200%</div>
					</div>
					<div id="slider-width"></div>
					<label>Height</label>
					<div class="range">
						<div class="min">0%</div>
						<div class="mid">I</div>
						<div class="max">200%</div>
					</div>
					<div id="slider-height"></div>
					<label>Image Size</label>
					<div class="range">
						<div class="min">32px</div>
						<div class="mid">I</div>
						<div class="max">256px</div>
					</div>
					<div id="slider-size"></div>
				</fieldset>
				<fieldset>
					<legend>Colors</legend>
					<label>Red</label>
					<div class="range">
						<div class="min">0%</div>
						<div class="mid">I</div>
						<div class="max">100%</div>
					</div>
					<div id="slider-red"></div>
					<label>Green</label>
					<div class="range">
						<div class="min">0%</div>
						<div class="mid">I</div>
						<div class="max">100%</div>
					</div>
					<div id="slider-green"></div>
					<label>Blue</label>
					<div class="range">
						<div class="min">0%</div>
						<div class="mid">I</div>
						<div class="max">100%</div>
					</div>
					<div id="slider-blue"></div>
					<label>Alpha</label>
					<div class="range">
						<div class="min">0%</div>
						<div class="mid">I</div>
						<div class="max">100%</div>
					</div>
					<div id="slider-alpha"></div>
				</fieldset>
			</div>
			<!-- Workspace -->
			<div id="workspace">
				<fieldset>
					<legend>Preview</legend>
					<noscript>
							<h4>For full functionality of this site it is necessary to enable JavaScript.</h4>
							Here are the <a href="http://www.enable-javascript.com/" target="_blank">
							instructions how to enable JavaScript in your web browser</a>.<br/><br/>
					</noscript>
					<div id="center">
						<canvas id="canvas" width="64" height="64" class="header-toplink-active">Your browser doesn't support our features.</canvas>
					</div>
				</fieldset>
				<fieldset>
					<legend>Options</legend>
					<a href="#" id="btn-download">Download</a>
					<a href="#" id="btn-invert">Invert Colors</a>
					<a href="#" id="btn-reset">Reset</a>
				</fieldset>
			</div>
		</div>
		<img onload="editor.load();" src="test_crosshair.png" id="src" alt="image_source"/>
	</body>
</html>