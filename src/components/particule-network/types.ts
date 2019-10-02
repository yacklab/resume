export interface ParticleNetworkProps {
  viewHeight?: number;
  particleOptions?: ComponentParticleOptions;
  divStyle?: React.CSSProperties;
  renderBG?(props: React.ReactNode): React.ReactElement;
  children?: React.ReactNode;
}

export interface Particle {
  setVelocity(x: number, y: number): void;
  getx(): number;
  gety(): number;
  setx(nx: number): void;
  sety(ny: number): void;
  update(): void;
  draw(): void;
}

export interface ParticleOptions {
  netColor: CanvasFillStrokeStyles["fillStyle"];
  dotColor: CanvasFillStrokeStyles["strokeStyle"];
  globalAlpha: number;
  densityDivider: number;
}
export interface ComponentParticleOptions {
  netColor?: CanvasFillStrokeStyles["fillStyle"];
  dotColor?: CanvasFillStrokeStyles["strokeStyle"];
  globalAlpha?: number;
  densityDivider?: number;
}
