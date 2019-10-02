import React, { useRef, useState, useEffect } from "react";
import isEqual from "lodash/isEqual";
import { ParticleNetworkProps, Particle, ParticleOptions } from "./types";
import { vh } from "../../helpers";

// TODO: Find a less convoluted and more performant way to render background

const CreateParticle = function(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  options: ParticleOptions
): Particle {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;

  const velocity = {
    x: (Math.random() - 0.5) * 0.33,
    y: (Math.random() - 0.5) * 0.33
  };
  return {
    setVelocity: function(x, y) {
      velocity.x = x;
      velocity.y = y;
    },
    getx: () => x,
    gety: () => y,
    setx: nx => (x = nx),
    sety: ny => (y = ny),
    update: function() {
      if (x > canvas.width + 20 || x < -20) {
        velocity.x = -velocity.x;
      }
      if (y > canvas.height + 20 || y < -20) {
        velocity.y = -velocity.y;
      }
      x += velocity.x;
      y += velocity.y;
    },
    draw: function() {
      ctx.beginPath();
      ctx.fillStyle = options.dotColor;
      ctx.globalAlpha = options.globalAlpha;
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
      ctx.fill();
    }
  };
};

const CreateParticuleNetwork = function(
  canvas: HTMLCanvasElement,
  options: ParticleOptions
) {
  const ctx = canvas.getContext("2d");
  const particles: Particle[] = [];
  for (
    let i = 0;
    i < (canvas.width * canvas.height) / options.densityDivider;
    i++
  ) {
    if (ctx) {
      particles.push(CreateParticle(canvas, ctx, options));
    }
  }
  const update = function() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = particles.length - 1; j > i; j--) {
          let distance = Math.sqrt(
            Math.pow(particles[i].getx() - particles[j].getx(), 2) +
              Math.pow(particles[i].gety() - particles[j].gety(), 2)
          );
          if (distance > 120) {
            continue;
          }

          ctx.beginPath();
          ctx.strokeStyle = options.netColor;
          ctx.globalAlpha = (120 - distance) / 120;
          ctx.lineWidth = options.globalAlpha;
          ctx.moveTo(particles[i].getx(), particles[i].gety());
          ctx.lineTo(particles[j].getx(), particles[j].gety());
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(update);
  };
  const init = function() {
    if (ctx) {
      let mouseParticle = CreateParticle(canvas, ctx, options);
      mouseParticle.setVelocity(0, 0);
      particles.push(mouseParticle);
      canvas.addEventListener("mousemove", function(e: MouseEvent) {
        mouseParticle.setx(e.clientX - canvas.offsetLeft);
        mouseParticle.sety(e.clientY - canvas.offsetTop);
      });
      canvas.addEventListener("mouseup", function(e: MouseEvent) {
        mouseParticle.setVelocity(
          (Math.random() - 0.5) * 0.33,
          (Math.random() - 0.5) * 0.33
        );
        mouseParticle = CreateParticle(canvas, ctx, options);
        mouseParticle.setVelocity(0, 0);
        particles.push(mouseParticle);
      });

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = particles.length - 1; j > i; j--) {
          let distance = Math.sqrt(
            Math.pow(particles[i].getx() - particles[j].getx(), 2) +
              Math.pow(particles[i].gety() - particles[j].gety(), 2)
          );
          if (distance > 120) {
            continue;
          }
          ctx.beginPath();
          ctx.strokeStyle = options.netColor;
          ctx.globalAlpha = (120 - distance) / 120;
          ctx.lineWidth = 0.7;
          ctx.moveTo(particles[i].getx(), particles[i].gety());
          ctx.lineTo(particles[j].getx(), particles[j].gety());
          ctx.stroke();
        }
      }
      requestAnimationFrame(update);
    }
  };

  return {
    init
  };
};

const ParticleNetwork: React.FunctionComponent<ParticleNetworkProps> = ({
  children,
  viewHeight = 100,
  particleOptions = {
    netColor: "#FFF",
    dotColor: "#FFF",
    globalAlpha: 0.7,
    densityDivider: 20000
  },
  divStyle,
  renderBG,
  renderProps
}) => {
  const canvaRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(vh(viewHeight));

  useEffect(() => {
    const canvas = canvaRef.current;
    if (canvas) {
      CreateParticuleNetwork(canvas, particleOptions as ParticleOptions).init();
    }
    window.addEventListener("resize", function() {
      setWidth(window.innerWidth);
      setHeight(vh(viewHeight));
    });
  });
  const Background: React.FunctionComponent = ({ children }) => {
    if (!renderBG) {
      return <div style={{ ...divStyle }}>{children}</div>;
    } else {
      return renderBG(children, renderProps);
    }
  };
  return (
    <Background>
      <canvas ref={canvaRef} width={width} height={height} />
      {children}
    </Background>
  );
};

export default React.memo(
  ParticleNetwork,
  (
    { children, renderBG, ...rest },
    { children: newChildren, renderBG: newRenderBG, ...newRest }
  ) => isEqual(rest, newRest)
);
