/** @client */
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function CilindroPage() {
  // Especifica que el tipo de la referencia es HTMLDivElement o null
  const mountRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(2);
  const [radius, setRadius] = useState(1);

  useEffect(() => {
    // Aquí ya no necesitas la comprobación adicional de TypeScript, pero sigue siendo buena práctica
    if (mountRef.current) {
      const currentElement = mountRef.current; // Ahora TypeScript sabe que es un HTMLDivElement
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, currentElement.clientWidth / currentElement.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(currentElement.clientWidth, currentElement.clientHeight);
      currentElement.appendChild(renderer.domElement);

      const geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
      const cylinder = new THREE.Mesh(geometry, material);
      scene.add(cylinder);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        if (currentElement) {
          currentElement.removeChild(renderer.domElement);
        }
      };
    }
  }, [height, radius]);

  return (
    <div>
      <div ref={mountRef} style={{ width: '100%', height: '400px' }} />
      <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} placeholder="Altura del cilindro" />
      <input type="number" value={radius} onChange={(e) => setRadius(Number(e.target.value))} placeholder="Radio del cilindro" />
    </div>
  );
}
