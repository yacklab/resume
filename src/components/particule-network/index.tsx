import React, { useRef, useEffect, useState } from "react";
import { vh } from "../../helpers";
import styled from "styled-components";

const Moto = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, 50%, 0);
  font-size: 2.3rem;
  color: white;
`;
const CanvasContainer = styled.div`
  position: relative;
  background-color: #ff9a8b;
  background-image: linear-gradient(
    90deg,
    #ff9a8b 0%,
    #ff6a88 55%,
    #ff99ac 100%
  );

  background-size: 400% 400%;
  animation: MovingBG 15s ease infinite alternate;
  clip-path: polygon(0 0, 100% 0%, 100% 88%, 0% 100%);
  z-index: 0;
  @keyframes MovingBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Avatar = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 50%, 0);
  height: 200px;
  width: 200px;
  img {
    height: 190px;
    width: 190px;
    border-radius: 50%;
    box-shadow: 3px 3px 21px -5px rgba(115, 115, 115, 1);
  }
`;
interface Particle {
  setVelocity(x: number, y: number): void;
  getx(): number;
  gety(): number;
  setx(nx: number): void;
  sety(ny: number): void;
  update(): void;
  draw(): void;
}

const CreateParticle = function(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
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
      ctx.fillStyle = "#fff";
      ctx.globalAlpha = 0.7;
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
      ctx.fill();
    }
  };
};

const CreateParticuleNetwork = function(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  const particles: Particle[] = [];
  for (let i = 0; i < (canvas.width * canvas.height) / 5000; i++) {
    if (ctx) {
      particles.push(CreateParticle(canvas, ctx));
    }
  }
  const update = function() {
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Draw connections
        for (let j = particles.length - 1; j > i; j--) {
          let distance = Math.sqrt(
            Math.pow(particles[i].getx() - particles[j].getx(), 2) +
              Math.pow(particles[i].gety() - particles[j].gety(), 2)
          );
          if (distance > 120) {
            continue;
          }

          ctx.beginPath();
          ctx.strokeStyle = "#fff";
          ctx.globalAlpha = (120 - distance) / 120;
          ctx.lineWidth = 0.7;
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
      let mouseParticle = CreateParticle(canvas, ctx);
      mouseParticle.setVelocity(0, 0);
      particles.push(mouseParticle);
      canvas.addEventListener("mousemove", function(e) {
        mouseParticle.setx(e.clientX - canvas.offsetLeft);
        mouseParticle.sety(e.clientY - canvas.offsetTop);
      });
      canvas.addEventListener("mouseup", function(e: MouseEvent) {
        mouseParticle.setVelocity(
          (Math.random() - 0.5) * 0.33,
          (Math.random() - 0.5) * 0.33
        );
        mouseParticle = CreateParticle(canvas, ctx);
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
          ctx.strokeStyle = "#fff";
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

const ParticuleNetworkComponent = () => {
  const canvaRef = useRef<HTMLCanvasElement>(null);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(vh(70));
  useEffect(() => {
    const canvas = canvaRef.current;
    if (canvas) {
      CreateParticuleNetwork(canvas).init();
    }
    window.addEventListener("resize", function() {
      setWidth(window.innerWidth);
      setHeight(vh(70));
    });
  });
  return (
    <div>
      <CanvasContainer>
        <canvas ref={canvaRef} width={width} height={height} />
        <Avatar>
          <img src="/avatar.svg" alt="" />
        </Avatar>
        <Moto>Web Developper (Full Stack)</Moto>
      </CanvasContainer>
    </div>
  );
};

export default ParticuleNetworkComponent;
