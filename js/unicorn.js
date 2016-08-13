$(document).ready(function() {
  // Handler for .ready() called.
  moveUp();

  lightFuse("unicorn_1");
  lightFuse("unicorn_2");
  lightFuse("unicorn_3");
  lightFuse("unicorn_4");
});

function moveUp()
{
  $('.Rainbow').animate({
    "top": "440px" }, 1500, 'swing', function() {
     moveDown();
  });
}

function moveDown()
{
  $('.Rainbow').animate({
    "top": "400px" }, 1500, 'swing', function() {
    moveUp();
  });
}

function fireLeft(unicornObject) {
  var dest = Math.floor((Math.random() * 650)); // ending height
  var speed = Math.floor((Math.random() * 5000) + 2000); // time to get accross

  $('#' + unicornObject).animate({
    "top": dest + "px",
    "left": "-100px"
  }, speed, 'swing', function () {
    lightFuse(unicornObject);
  });
}

function fireRight(unicornObject) {
  var dest = Math.floor((Math.random() * 650)); // ending height
  var speed = Math.floor((Math.random() * 5000) + 2000); // time to get accross
  var X = screen.width + 100;

  $('#' + unicornObject).animate({
    "top": dest + "px",
    "left": X + "px"
  }, speed, 'swing', function () {
    lightFuse(unicornObject);
  });
}

function lightFuse(unicornObject) {
  //alert(unicornObject);
  var dir = Math.round(Math.random() * 1); // 0 for fire Left, 1 for fire Right
  var height = Math.floor((Math.random() * 650)); // starting height
  var delay = Math.floor((Math.random() * 6000) + 1000); // firing delay 10-60 seconds

  setTimeout(function () { FIRE(unicornObject, dir, height) }, delay);
}

function FIRE(unicornObject, dir, height) {
  //alert("FIRE " + unicornObject + " " + dir);
  $('#' + unicornObject).css("visibility", "visible")

  if (dir == 1) {
    var X = screen.width + 100;
    $('#' + unicornObject).css("left", X + "px")
    $('#' + unicornObject).css("top", height + "px");
    $('#' + unicornObject).removeClass("flip-horizontal");
    fireLeft(unicornObject);
  }
  else {
    $('#' + unicornObject).css("left", "-200px")
    $('#' + unicornObject).css("top", height + "px");
    $('#' + unicornObject).addClass("flip-horizontal");
    fireRight(unicornObject);
  }
}
