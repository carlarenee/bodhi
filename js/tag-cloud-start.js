window.onload = function() {
  try {
    TagCanvas.Start('myCanvas');
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};
