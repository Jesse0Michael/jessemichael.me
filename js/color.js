var ani = angular.module('colorBoxes',['ngAnimate']);


ani.animation('.color-box', function(){
  return{
    addClass: function(element, className, done){
      if(className == 'color') {
        try {
          document.getElementById(element[0].id.replace('box-','')).play();
        }
        catch (er) { }
        var r = Math.floor((Math.random() * 55) + 200);
        var g = Math.floor((Math.random() * 55) + 200);
        var b = Math.floor((Math.random() * 55) + 200);

        var rand = (r.toString(16) + g.toString(16) + b.toString(16));

        $('#' + element[0].id).css('transition', 'background-color 100ms linear');
        $('#' + element[0].id).css('backgroundColor', '#' + rand);
      }
      else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if(className == 'color') {
        try {
          document.getElementById(element[0].id.replace('box-','')).pause();
        }
        catch (er) { }

        $('#' + element[0].id).css('transition', 'background-color 1000ms linear');
        $('#' + element[0].id).css('backgroundColor', '#f8f8f8');
      }
      else {
        done();
      }
    }
  }
});
