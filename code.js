document.addEventListener("DOMContentLoaded", function() {
	var paintcanvas = document.getElementById("canvas1");
	var context = paintcanvas.getContext("2d");
	var color = 'black';
	var radius = 50;
	var isPainting = false;
  
	function paintCircle(x, y) {
	  context.beginPath();
	  context.arc(x, y, radius, 0, Math.PI * 2, true);
	  context.fillStyle = color;
	  context.fill();
	}
  
	function setWidth(value) {
	  if (isNumeric(value)) {
		paintcanvas.width = value;
		console.log(`Width: ${value}`);
	  }
	}
  
	

	function setHeight(value) {
	  if (isNumeric(value)) {
		paintcanvas.height = value;
		console.log(`Height: ${value}`);
	  }
	}
  
	function startPaint() {
	  isPainting = true;
	}
  
	function endPaint() {
	  isPainting = false;
	  context.beginPath(); // Clear the current path
	}
  
	function doPaint(event) {
	  if (isPainting) {
		var x = event.offsetX;
		var y = event.offsetY;
		paintCircle(x, y);
	  }
	}
  
	function clearCanvas() {
	  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
	}
  
	function isNumeric(value) {
	  return !isNaN(value);
	}
  
	// Attach event listeners
	paintcanvas.onmousedown = startPaint;
	paintcanvas.onmousemove = doPaint;
	paintcanvas.onmouseup = endPaint;
	
	// Attach onchange event listeners for width and height inputs
	var widthInput = document.querySelector('input[placeholder="Set Width"]');
	var heightInput = document.querySelector('input[placeholder="Set Height"]');
	
	widthInput.onchange = function() {
	  setWidth(this.value);
	};
	
	heightInput.onchange = function() {
	  setHeight(this.value);
	};
  });
  