"use client"
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function CilindroPage() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [radiusTop, setRadiusTop] = useState(1);
  const [radiusBottom, setRadiusBottom] = useState(1);
  const [height, setHeight] = useState(2);
  const [cylinder, setCylinder] = useState<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xEECAD1); // Establece el color de fondo
    mountRef.current.appendChild(renderer.domElement);

    // Añadir luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Añadir luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Crear geometría del cilindro
    const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 32);

    // Material del cilindro
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      opacity: 0.5,
      side: THREE.DoubleSide,
      transparent: true,
    });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    setCylinder(cylinder);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (cylinder) {
      cylinder.geometry.dispose();
      cylinder.geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 32);
    }
  }, [radiusTop, radiusBottom, height]);

  return (
    <div>
      <div>
        <label>
          Radio superior:
          <input
            type="number"
            value={radiusTop}
            onChange={(e) => setRadiusTop(Number(e.target.value))}
          />
        </label>
        <label>
          Radio inferior:
          <input
            type="number"
            value={radiusBottom}
            onChange={(e) => setRadiusBottom(Number(e.target.value))}
          />
        </label>
        <label>
          Altura:
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
      </div>
      <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
}

