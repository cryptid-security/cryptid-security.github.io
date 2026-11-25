import { useEffect, useRef } from "react";

/**
 * Nocturnal aurora ribbons — adapted from 21st.dev "Aurora voice Hero"
 * (dhileepkumargm), re-tuned to the Cryptid brass/pine palette: slow, dim,
 * low-amplitude strands that read as a horizon glow the torch grazes, not
 * rainbow ribbons. Self-contained simplex noise, zero runtime deps.
 * Honours prefers-reduced-motion (renders one still frame, no loop).
 */
const COLORS = ["#cf9a3a", "#8a6b2c", "#e8c57e"];

export default function AuroraRibbons() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const RIBBONS = 6;
    const SPEED = 0.007;
    const COMPLEXITY = 0.012;
    const AMPLITUDE = 185;

    let frame = 0;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    addEventListener("resize", resize);

    // self-contained 2D simplex noise
    const simplex = (() => {
      const F2 = 0.5 * (Math.sqrt(3) - 1);
      const G2 = (3 - Math.sqrt(3)) / 6;
      const p = new Uint8Array(256);
      for (let i = 0; i < 256; i++) p[i] = i;
      for (let i = 255; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [p[i], p[j]] = [p[j], p[i]];
      }
      const perm = new Uint8Array(512);
      const perm12 = new Uint8Array(512);
      const g = new Float32Array([
        1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0,
        1, -1, 0, -1, 1, 0, 1, -1, 0, -1, 0, -1,
      ]);
      for (let i = 0; i < 512; i++) {
        perm[i] = p[i & 255];
        perm12[i] = perm[i] % 12;
      }
      return (xin: number, yin: number) => {
        let n0 = 0, n1 = 0, n2 = 0;
        const s = (xin + yin) * F2;
        const i = Math.floor(xin + s);
        const j = Math.floor(yin + s);
        const t = (i + j) * G2;
        const x0 = xin - (i - t);
        const y0 = yin - (j - t);
        const i1 = x0 > y0 ? 1 : 0;
        const j1 = x0 > y0 ? 0 : 1;
        const x1 = x0 - i1 + G2;
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2;
        const y2 = y0 - 1 + 2 * G2;
        const ii = i & 255;
        const jj = j & 255;
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) { const gi = perm12[ii + perm[jj]]; t0 *= t0; n0 = t0 * t0 * (g[gi * 3] * x0 + g[gi * 3 + 1] * y0); }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) { const gi = perm12[ii + i1 + perm[jj + j1]]; t1 *= t1; n1 = t1 * t1 * (g[gi * 3] * x1 + g[gi * 3 + 1] * y1); }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) { const gi = perm12[ii + 1 + perm[jj + 1]]; t2 *= t2; n2 = t2 * t2 * (g[gi * 3] * x2 + g[gi * 3 + 1] * y2); }
        return 70 * (n0 + n1 + n2);
      };
    })();

    const draw = () => {
      const w = innerWidth;
      const h = innerHeight;
      const baseY = h * 0.56;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (let idx = 0; idx < RIBBONS; idx++) {
        const color = COLORS[idx % COLORS.length];
        ctx.beginPath();
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, color);
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.3 - idx * 0.03;
        ctx.lineWidth = 1.5;
        for (let x = 0; x < w; x += 6) {
          const noise = simplex(x * COMPLEXITY, idx * 1000 + time);
          const pulse = Math.sin(time * 0.5 + idx * 1000) * 0.1 + 0.9;
          const y = baseY + noise * AMPLITUDE * pulse;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    if (reduce) {
      time = 100;
      draw();
      return () => removeEventListener("resize", resize);
    }

    const loop = () => {
      time += SPEED;
      draw();
      frame = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
