/*	<< Improv3d Crosshair Editor >>
	<crosshair>
		.x
		.y
		.height
		.width
		.inverted
		.red
		.green
		.blue
		.setPosition()
		.setSize()
		.setWidth()
		.setHeight()
		.setRed()
		.setGreen()
		.setBlue()
		.setAlpha()
		.setProportion()
		.invertColors()
		.RefreshColors()
		.draw()
		.download()
		.clear()
	<editor>
		.load()
		.refresh()
*/
	var editor = {}, crosshair = {},
		img, canvas, canvasContext;

	$(document).ready(function() {
		canvas = document.getElementById('canvas');
		canvasContext = canvas.getContext('2d');
		img = document.getElementById('src');

		$('#btn-invert').click(function(){
			crosshair.invertColors();
			return false;
		});

		$('#btn-reset').click(function(){
			editor.load();
			return false;
		});

		$('#btn-download').click(function(){
			crosshair.download();
			return false;
		});

		$('#slider-proportional').slider({
			min: 1,
			max: 200,
			value: 100,
			slide: function(event, ui) {crosshair.setSize(ui.value);}
		});

		$('#slider-width').slider({
			min: 1,
			max: 200,
			value: 100,
			slide: function(event, ui) {crosshair.setWidth(ui.value);}
		});

		$('#slider-height').slider({
			min: 1,
			max: 200,
			value: 100,
			slide: function(event, ui) {crosshair.setHeight(ui.value);}
		});

		$('#slider-size').slider({
			min: 32,
			max: 256,
			value: 64,
			slide: function(event, ui) {crosshair.setProportion(ui.value);}
		});

		$('#slider-red').slider({
			min: 0,
			max: 200,
			value: 100,
			slide: function(event, ui) {crosshair.setRed(ui.value);}
		});

		$('#slider-green').slider({
			min: 0,
			max: 200,
			value: 100,
			slide: function(event, ui) {crosshair.setBlue(ui.value);}
		});

		$('#slider-blue').slider({
			min: 0,
			max: 200,
			value: 100,
			slide: function(event, ui) {crosshair.setGreen(ui.value);}
		});

		$('#slider-alpha').slider({
			min: 1,
			max: 100,
			value: 100,
			slide: function(event, ui) {crosshair.setAlpha(ui.value);}
		});
	});

	/*<crosshair>*/
	crosshair.setPosition = function() {
		crosshair.x = canvas.width - crosshair.width;
		crosshair.y = canvas.height - crosshair.height;
	};

	crosshair.refreshColors = function(e) {
		if(crosshair.inverted == 1) {crosshair.invertColors(0);}
		if(crosshair.red) {crosshair.setRed(editor.red);}
		if(crosshair.green) {crosshair.setGreen(editor.green);}
		if(crosshair.blue) {crosshair.setBlue(editor.blue);}
		if(crosshair.alpha && e == 2) {crosshair.setAlpha(editor.alpha);}
	};

	crosshair.draw = function() {
		canvasContext.drawImage(img, crosshair.x, crosshair.y, crosshair.width, crosshair.height);
		var imageData = canvasContext.getImageData(crosshair.x, crosshair.y, crosshair.width, crosshair.height);
		crosshair.colors = imageData.data;
	};

	crosshair.setSize = function(e) {
		crosshair.clear();
		crosshair.width = img.width/100*e;
		crosshair.height = img.height/100*e;
		crosshair.setPosition();
		crosshair.draw();
		crosshair.refreshColors(0);
		editor.refresh();
		$('#slider-width').slider('value',e);
		$('#slider-height').slider('value',e);
	};

	crosshair.setWidth = function(e) {
		crosshair.width = img.width/100*e;
		crosshair.x = canvas.width - crosshair.width;
		crosshair.clear();
		crosshair.draw();
		crosshair.refreshColors(1);
		editor.refresh();
	};

	crosshair.setHeight = function(e) {
		crosshair.height = img.height/100*e;
		crosshair.y = canvas.height - crosshair.height;
		crosshair.clear();
		crosshair.draw();
		crosshair.refreshColors(1);
		editor.refresh();
	};

	crosshair.invertColors = function(e) {
		var imageData = canvasContext.getImageData(crosshair.x, crosshair.y, crosshair.width, crosshair.height);
		var data = imageData.data;
		for(var i = 0; i < data.length; i += 4) {
			data[i] = 255 - data[i];
			data[i + 1] = 255 - data[i + 1];
			data[i + 2] = 255 - data[i + 2];
		}
		canvasContext.putImageData(imageData, crosshair.x, crosshair.y);
		if (e) {crosshair.inverted = (crosshair.inverted) ? 0 : 1;}
		editor.refresh(1);
	};

	crosshair.setRed = function(e) {
		var imageData = canvasContext.getImageData(crosshair.x, crosshair.y, crosshair.width, crosshair.height);
		var data = imageData.data;
		for(var i = 0; i < data.length; i += 4) {
			data[i] = crosshair.colors[i]/100*e;
		}
		canvasContext.putImageData(imageData, crosshair.x, crosshair.y);
		crosshair.red = true;
		editor.refresh();
	};

	crosshair.setBlue = function(e) {
		var imageData = canvasContext.getImageData(crosshair.x, crosshair.y, crosshair.width, crosshair.height);
		var data = imageData.data;
		for(var i = 0; i < data.length; i += 4) {
			data[i+1] = crosshair.colors[i+1]/100*e;
		}
		canvasContext.putImageData(imageData, crosshair.x, crosshair.y);
		crosshair.blue = true;
		if(crosshair.inverted == 1) {crosshair.invertColors(0);}
		editor.refresh();
	};

	crosshair.setGreen = function(e) {
		var imageData = canvasContext.getImageData(crosshair.x, crosshair.y, crosshair.width, crosshair.height);
		var data = imageData.data;
		for(var i = 0; i < data.length; i += 4) {
			data[i+2] = crosshair.colors[i+2]/100*e;
		}
		canvasContext.putImageData(imageData, crosshair.x, crosshair.y);
		crosshair.green = true;
		if(crosshair.inverted == 1) {crosshair.invertColors(0);}
		editor.refresh();
	};

	crosshair.setAlpha = function(e) {
		var imageData = canvasContext.getImageData(crosshair.x, crosshair.y, crosshair.width, crosshair.height);
		var data = imageData.data;
		for(var i = 0; i < data.length; i += 4) {
			data[i+3] = crosshair.colors[i+3]/100*e;
		}
		crosshair.clear();
		canvasContext.putImageData(imageData, crosshair.x, crosshair.y);
		if(crosshair.inverted == 1) {crosshair.invertColors(0);}
		crosshair.red = true;
		crosshair.green = true;
		crosshair.blue = true;
		crosshair.alpha = true;
		crosshair.refreshColors();
		editor.refresh();
	};

	crosshair.download = function() {
		// saving the file on the server and returning the filename
		$.post('create_image.php',{img: canvas.toDataURL('image/png')}, function(data) {
			// serving the download
			window.location = 'download.php?!='+data;
		});
	};

	crosshair.setProportion = function(e) {
		canvas.width = e;
		canvas.height = e;
		crosshair.x = canvas.width - crosshair.width;
		crosshair.y = canvas.height - crosshair.height;
		crosshair.draw();
		crosshair.refreshColors();
		editor.refresh();
	};

	crosshair.clear = function() {
		canvas.width = canvas.width;
	};

	/*<editor>*/
	editor.load = function() {
		editor.red = $('#slider-red').slider('value');
		editor.green = $('#slider-green').slider('value');
		editor.blue = $('#slider-blue').slider('value');
		editor.alpha = $('#slider-alpha').slider('value');
		crosshair.width = img.width;
		crosshair.height = img.height;
		if(img.width > 256) {
			canvas.width = 256;
			canvas.height = 256;
		} else {
			canvas.width = img.width;
			canvas.height = img.height;
		}
		crosshair.x = canvas.width - crosshair.width;
		crosshair.y = canvas.height - crosshair.height;
		canvasContext.drawImage(img, 0, 0, img.width, img.height);
		$('#slider-size').slider('value',canvas.width);
		crosshair.draw();
		editor.refresh();
		window.setTimeout('imageCheck()', 10);
	};

	editor.refresh = function() {
		$('#canvas').css('margin-left', canvas.width/-2+35);
		$('#center').css('height', canvas.height);
	};

	function imageCheck() {
		if(img.height != canvas.height) {
			if(img.width > 256) {
				canvas.width = 256;
				canvas.height = 256;
			} else {
				canvas.width = img.width;
				canvas.height = img.height;
			}
			crosshair.setSize(100);
			$('#slider-size').slider('value',canvas.width);
		}
	}
