import Particles from "react-tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const particleConfig: any = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 120,
  particles: {
    number: { value: 150, density: { enable: true, area: 800 } },
    color: { value: ["#858597", "#B8B8D2", "#3D5CFF", "#fff", "#ff6905"] },
    shape: { type: "circle" },
    opacity: { value: 0.8, random: true },
    size: { value: 4, random: { enable: true, minimumValue: 1 } },
    move: { enable: true, speed: 1.5, outModes: { default: "out" } },
    links: { enable: false },
  },
  detectRetina: true,
};

interface PropsType {
  className?: string;
}

const ParticlesConfig = ({ className }: PropsType) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className={className}
      init={particlesInit}
      options={particleConfig}
    />
  );
};

export default ParticlesConfig;
