function draw(x1, y1, w1, h1, x2, y2, w2, h2) 
  {
      // get the canvas item from DOM
      var canvas = document.getElementById("canvas");
      if (canvas.getContext)
      {
        // get context of the canvas
        var context = canvas.getContext("2d");

        // using the context to draw
        context.fillStyle = "rgb(256,0,0)";
        context.fillRect (x1, y1, w1, h1);
        
        context.fillStyle = "rgba(0, 0, 200, 0.6)";
        context.fillRect (x2, y2, w2, h2);
      }
  }