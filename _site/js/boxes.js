$(document).ready(function() {(function() {
  var canvas = document.querySelector('#boxes'),
    con = canvas.getContext('2d'),
    cwidth = canvas.width,
    cheight = canvas.height,
    mousePos = {
      x: 0,
      y: 0
    },
    mouseClicked = false,
    toSpeed = 20,
    fromSpeed = 1,
    boxWidth = 35,
    linkBoxWidth = boxWidth * 3 + 10,
    links = [{
      text: "HOME",
      path: "/"
    }, {
      text: "PROJECTS",
      path: "/projects"
    }, {
      text: "BIO",
      path: "/bio"
    }],
    play = true,
    Shape = function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.rgbDefault = 50;
      this.r = this.rgbDefault;
      this.g = this.rgbDefault;
      this.b = this.rgbDefault;
      this.rTarget = this.rgbDefault;
      this.gTarget = this.rgbDefault;
      this.bTarget = this.rgbDefault;
      this.enabled = false;
      this.text = null;
      this.path = null;
    },
    shapes = new Array();
  canvas.addEventListener("mousemove", function(evt) {
    mousePos = getMousePos(canvas, evt);
  });
  canvas.addEventListener("click", function(evt) {
    mouseClicked = true;
  }, false);

  // resize the canvas to fill browser window dynamically
  window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    //min width = text box array size + border
    cwidth = canvas.width = window.innerWidth;
    //cheight = canvas.height = window.innerHeight;
    shapes = new Array();
    var rows = 3;
    var numBoxes = Math.floor((canvas.width - 20) / (boxWidth + 5));
    var offset = ((canvas.width - 30) % (boxWidth + 5) / 2) + 10;
    var linkIdxs = getLinkIdxs(links.length, numBoxes);


    for (var r = 0; r < rows; r++) {
      for (var i = 0; i < numBoxes; i++) {
        var linkIdx = indexOf(linkIdxs, i);
        if (r == 1 && linkIdx != -1) {
          shapes.push(createLinkBox(r, i, offset, linkIdx));
          i = i + 2;
        } else {
          shapes.push(createBox(r, i, offset));
        }
      }
    }
  }
  resizeCanvas();

  function getLinkIdxs(linksSize, numBoxes) {
    var midBox = Math.floor(numBoxes / 2);
    var firstLink = midBox - 1 - ((Math.floor(linksSize / 2) * 6));
    var idxs = [];

    for (var l = 0; l < linksSize; l++) {
    	idxs.push(firstLink + (6 * l));
    }

    //TODO branch off odd/even links
    //if(Math.ceil(linksSize % 2)) {
    	// If theres an odd number of links
    	//alert(centerGap);
    //} else {
    	// If theres an even number of links
    //}
    return idxs;
  }

  function createBox(row, idx, offset) {
    var x = ((boxWidth + 5) * idx) + offset,
      y = ((boxWidth + 5) * row) + 10,
      width = height = boxWidth;
    return new Shape(x, y, width, height);
  }

  function createLinkBox(row, idx, offset, link) {
    var x = ((boxWidth + 5) * idx) + offset,
      y = boxWidth + 15,
      width = linkBoxWidth,
      height = boxWidth;
    var linkShape = new Shape(x, y, width, height);
    linkShape.text = links[link].text;
    linkShape.path = links[link].path;
    return linkShape;
  }

  function indexOf(a, obj) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] === obj) {
        return i;
      }
    }
    return -1;
  }

  function animate() {
    con.clearRect(0, 0, cwidth, cheight);

		// Debug
    // con.font = "8px Verdana";
    // con.fillStyle = "#000";
    // con.fillText(mousePos.x + ", " + mousePos.y, 50, 10);

    for (var i = 0; i < shapes.length; i++) {
      var tmp = shapes[i];

      if (mousePos.x >= tmp.x &&
        mousePos.x <= tmp.x + tmp.width &&
        mousePos.y >= tmp.y &&
        mousePos.y <= tmp.y + tmp.height) {
        if (!tmp.enabled) {
          tmp.enabled = true;
          tmp.rTarget = Math.round(Math.random() * 205) + 50;
          tmp.gTarget = Math.round(Math.random() * 205) + 50;
          tmp.bTarget = Math.round(Math.random() * 205) + 50;
        }
        if (tmp.path != null && mouseClicked) {
          window.location = tmp.path;
        }
      } else {
        if (tmp.enabled) {
          tmp.enabled = false;
          tmp.rTarget = tmp.rgbDefault;
          tmp.gTarget = tmp.rgbDefault;
          tmp.bTarget = tmp.rgbDefault;
        }
      }

      tmp.r = getColor(tmp.r, tmp.rTarget);
      tmp.g = getColor(tmp.g, tmp.gTarget);
      tmp.b = getColor(tmp.b, tmp.bTarget);

      con.fillStyle = "rgba(" + tmp.r + ", " + tmp.g + ", " + tmp.b + ", 0.3)";
      con.fillRect(tmp.x, tmp.y, tmp.width, tmp.height);

      if (tmp.text != null) {
        con.font = "20px Verdana";
        con.fillStyle = "#FFFFFF";
        con.textAlign = "center";
        con.fillText(tmp.text, tmp.x + (tmp.width / 2), tmp.y + ((tmp.height / 4) * 3));
      }

    }
    mouseClicked = false;
    if (play) {
      setTimeout(animate, 5);
    }
  }
  animate();

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  function getColor(current, target) {
    if (current < target) {
      if (target - current <= toSpeed) {
        return target;
      } else {
        return current + toSpeed;
      }
    } else if (current > target) {
      if (current - target <= fromSpeed) {
        return target;
      } else {
        return current - fromSpeed;
      }
    }
    return current;
  }

  })();
});
