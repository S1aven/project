var parallax = (function () {
  var bgSky = document.querySelector('.parallax_sky');
  var bgHill = document.querySelector('.parallax_hill');
  var bgTrain = document.querySelector('.parallax_train');
  var bgGround = document.querySelector('.parallax_groud');
  var heroContent = document.querySelector('.hero__content');

  return {
    move: function (block, windowScroll,strafeAmount) {
      var strafe = windowScroll / -strafeAmount + '%';
      var style = block.style;
      var transformString = 'translate3d(0,' + strafe + ', 0)';

      style.transform = transformString;
      style.webkitTransform = transformString;
    },

    init: function (wScroll) {
      this.move(bgSky, wScroll, 300);
      this.move(bgHill, wScroll, 250);
      this.move(bgTrain, wScroll, 200);
      this.move(bgGround, wScroll, 150);
      this.move(heroContent, wScroll, 100);
    }
  }
}());

window.onscroll = function () {
  var wScroll = window.pageYOffset;

  parallax.init(wScroll);
};