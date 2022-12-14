import pepelaugh from './pepelaugh.png';

document.querySelector('.message button').addEventListener('click', onOk)
document.querySelector('.box').addEventListener('click', onBoxClick)

function onOk() {
    const message = document.querySelector('.message');
    message.classList.add('hide');
    loopBruh()
    playVika()
}

function onBoxClick() {
    const img = document.querySelector('.box .img')
    const pepe = document.getElementById('feels-amazing-man')
    const lid = document.querySelector('.box .box-lid');
    const vika = document.getElementById('vika')
    const amogus = document.getElementById('amogus')

    img.classList.add('img-animate');
    lid.classList.add('lid-animate');

    vika.volume = 0.2;
    setTimeout(() => vika.volume = 1, 2200);
    setTimeout(() => amogus.play(), 600);
    setTimeout(() => pepe.src = pepelaugh, 1700);
}

function playBruh() {
    const bruh = document.getElementById('bruh')
    bruh.play()
}

function loopBruh() {
    let rand = Math.round(Math.random() * 25000) + 5000;
    setTimeout(() => {
        playBruh();
        loopBruh();
    }, rand);
};

function playVika() {
    const vika = document.getElementById('vika')
    vika.play()
}

(function() {
    var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
    NUM_CONFETTI = 300;
    COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70], [100, 232, 70]];
    PI_2 = 2 * Math.PI;
    canvas = document.getElementById("world");
    context = canvas.getContext("2d");
    window.w = canvas.width = window.innerWidth
    window.h = canvas.height = window.innerHeight;
    resizeWindow = function() {
      window.w = canvas.width = window.innerWidth;
      return window.h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeWindow, false);
    window.onload = function() {
      return setTimeout(resizeWindow, 0);
    };
    range = function(a, b) {
      return (b - a) * Math.random() + a;
    };
    drawCircle = function(x, y, r, style) {
      context.beginPath();
      context.arc(x, y, r, 0, PI_2, false);
      context.fillStyle = style;
      return context.fill();
    };
    window.requestAnimationFrame = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
    })();
    Confetti = (function() {
      function Confetti() {
        this.style = COLORS[~~range(0, 6)];
        this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
        this.r = ~~range(6, 10);
        this.r2 = 2 * this.r;
        this.replace();
      }
  
      Confetti.prototype.replace = function() {
        this.opacity = 1;
        this.dop = 0.001 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = 0;
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(-1, 1);
        this.vy = 0.4 * this.r + range(-1, 3);
      };
  
      Confetti.prototype.draw = function() {
        var _ref;
        this.x += this.vx;
        this.y += this.vy;
        this.opacity -= this.dop;
        if (this.opacity < 0 || this.y > this.ymax) {
          this.replace();
        }
        if (!((0 < (_ref = this.x) && _ref < this.xmax))) {
          this.x = (this.x + this.xmax) % this.xmax;
        }
        return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
      };
  
      return Confetti;
  
    })();
  
    confetti = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 1; 1 <= NUM_CONFETTI ? _i <= NUM_CONFETTI : _i >= NUM_CONFETTI; i = 1 <= NUM_CONFETTI ? ++_i : --_i) {
        _results.push(new Confetti);
      }
      return _results;
    })();
  
    window.step = function() {
      var c, _i, _len, _results;
      requestAnimationFrame(step);
      context.clearRect(0, 0, w, h);
      _results = [];
      for (_i = 0, _len = confetti.length; _i < _len; _i++) {
        c = confetti[_i];
        _results.push(c.draw());
      }
      return _results;
    };
  
    step();
  
  }).call(this);