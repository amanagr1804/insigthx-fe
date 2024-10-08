import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
// import './CanvasAnimation.css'; // Assuming you have some basic CSS styles here

const CanvasAnimation = () => {
  useEffect(() => {
    var canvas = $("#bg").children("canvas"),
      background = canvas[0],
      foreground1 = canvas[1],
      foreground2 = canvas[2],
      config = {
        circle: {
          amount: 18,
          layer: 3,
          color: [255, 160, 122],
          alpha: 0.3
        },
        line: {
          amount: 12,
          layer: 3,
          color: [255, 160, 122],
          alpha: 0.3
        },
        speed: 0.5,
        angle: 20
      };

    if (background.getContext) {
      var bctx = background.getContext("2d"),
        fctx1 = foreground1.getContext("2d"),
        fctx2 = foreground2.getContext("2d"),
        M = window.Math,
        degree = (config.angle / 360) * M.PI * 2,
        circles = [],
        lines = [],
        wWidth,
        wHeight,
        timer;

      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
          setTimeout(callback, 1000 / 60);
        };

      var setCanvasHeight = function () {
        wWidth = $(window).width();
        wHeight = $(window).height();
        canvas.each(function () {
          this.width = wWidth;
          this.height = wHeight;
        });
      };

      var drawCircle = function (x, y, radius, color, alpha) {
        var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
        gradient.addColorStop(
          0,
          "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + alpha + ")"
        );
        gradient.addColorStop(
          1,
          "rgba(" +
            color[0] +
            "," +
            color[1] +
            "," +
            color[2] +
            "," +
            (alpha - 0.1) +
            ")"
        );

        fctx1.beginPath();
        fctx1.arc(x, y, radius, 0, M.PI * 2, true);
        fctx1.fillStyle = gradient;
        fctx1.fill();
      };

      var drawLine = function (x, y, width, color, alpha) {
        var endX = x + M.sin(degree) * width,
          endY = y - M.cos(degree) * width,
          gradient = fctx2.createLinearGradient(x, y, endX, endY);
        gradient.addColorStop(
          0,
          "rgba(" + color[0] + "," + color[1] + "," + color[2] + "," + alpha + ")"
        );
        gradient.addColorStop(
          1,
          "rgba(" +
            color[0] +
            "," +
            color[1] +
            "," +
            color[2] +
            "," +
            (alpha - 0.1) +
            ")"
        );

        fctx2.beginPath();
        fctx2.moveTo(x, y);
        fctx2.lineTo(endX, endY);
        fctx2.lineWidth = 3;
        fctx2.lineCap = "round";
        fctx2.strokeStyle = gradient;
        fctx2.stroke();
      };

      var animate = function () {
        var sin = M.sin(degree),
          cos = M.cos(degree);

        if (config.circle.amount > 0 && config.circle.layer > 0) {
          fctx1.clearRect(0, 0, wWidth, wHeight);
          for (var i = 0, len = circles.length; i < len; i++) {
            var item = circles[i],
              x = item.x,
              y = item.y,
              radius = item.radius,
              speed = item.speed;

            if (x > wWidth + radius) {
              x = -radius;
            } else if (x < -radius) {
              x = wWidth + radius;
            } else {
              x += sin * speed;
            }

            if (y > wHeight + radius) {
              y = -radius;
            } else if (y < -radius) {
              y = wHeight + radius;
            } else {
              y -= cos * speed;
            }

            item.x = x;
            item.y = y;
            drawCircle(x, y, radius, item.color, item.alpha);
          }
        }

        if (config.line.amount > 0 && config.line.layer > 0) {
          fctx2.clearRect(0, 0, wWidth, wHeight);
          for (var j = 0, len = lines.length; j < len; j++) {
            var item = lines[j],
              x = item.x,
              y = item.y,
              width = item.width,
              speed = item.speed;

            if (x > wWidth + width * sin) {
              x = -width * sin;
            } else if (x < -width * sin) {
              x = wWidth + width * sin;
            } else {
              x += sin * speed;
            }

            if (y > wHeight + width * cos) {
              y = -width * cos;
            } else if (y < -width * cos) {
              y = wHeight + width * cos;
            } else {
              y -= cos * speed;
            }

            item.x = x;
            item.y = y;
            drawLine(x, y, width, item.color, item.alpha);
          }
        }

        timer = requestAnimationFrame(animate);
      };

      var createItem = function () {
        circles = [];
        lines = [];

        for (var i = 0; i < config.circle.amount / config.circle.layer; i++) {
          for (var j = 0; j < config.circle.layer; j++) {
            circles.push({
              x: M.random() * wWidth,
              y: M.random() * wHeight,
              radius: M.random() * (20 + j * 5) + (20 + j * 5),
              color: config.circle.color,
              alpha: M.random() * 0.2 + (config.circle.alpha - j * 0.1),
              speed: config.speed * (1 + j * 0.5)
            });
          }
        }

        for (var m = 0; m < config.line.amount / config.line.layer; m++) {
          for (var n = 0; n < config.line.layer; n++) {
            lines.push({
              x: M.random() * wWidth,
              y: M.random() * wHeight,
              width: M.random() * (20 + n * 5) + (20 + n * 5),
              color: config.line.color,
              alpha: M.random() * 0.2 + (config.line.alpha - n * 0.1),
              speed: config.speed * (1 + n * 0.5)
            });
          }
        }

        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(animate);
      };

      $(document).ready(function () {
        setCanvasHeight();
        createItem();
      });

      $(window).resize(function () {
        setCanvasHeight();
        createItem();
      });
    }
  }, []);

  return (
    <div id="bg">
      <canvas></canvas>
      <canvas></canvas>
      <canvas></canvas>
    </div>
  );
};

export default CanvasAnimation;
