"use client"
// import { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// export default function CilindroPage() {
//   // Especifica que el tipo de la referencia es HTMLDivElement o null
//   const mountRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(2);
//   const [radius, setRadius] = useState(1);

//   useEffect(() => {
//     // Aquí ya no necesitas la comprobación adicional de TypeScript, pero sigue siendo buena práctica
//     if (mountRef.current) {
//       const currentElement = mountRef.current; // Ahora TypeScript sabe que es un HTMLDivElement
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(75, currentElement.clientWidth / currentElement.clientHeight, 0.1, 1000);
//       const renderer = new THREE.WebGLRenderer();
//       renderer.setSize(currentElement.clientWidth, currentElement.clientHeight);
//       currentElement.appendChild(renderer.domElement);

//       const geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
//       const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
//       const cylinder = new THREE.Mesh(geometry, material);
//       scene.add(cylinder);

//       camera.position.z = 5;

//       const animate = () => {
//         requestAnimationFrame(animate);
//         renderer.render(scene, camera);
//       };

//       animate();

//       return () => {
//         if (currentElement) {
//           currentElement.removeChild(renderer.domElement);
//         }
//       };
//     }
//   }, [height, radius]);

//   return (
//     <div>
//       <div ref={mountRef} style={{ width: '100%', height: '400px' }} />
//       <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} placeholder="Altura del cilindro" />
//       <input type="number" value={radius} onChange={(e) => setRadius(Number(e.target.value))} placeholder="Radio del cilindro" />
//     </div>
//   );
// }

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function CilindroPage() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(2);
  const [radius, setRadius] = useState(1);
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 0, z: 5 }); // Estado para la posición de la cámara

  useEffect(() => {
    if (mountRef.current) {
      const currentElement = mountRef.current;
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xf0f0f0); // Cambiar el color de fondo

      const camera = new THREE.PerspectiveCamera(75, currentElement.clientWidth / currentElement.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(currentElement.clientWidth, currentElement.clientHeight);
      currentElement.appendChild(renderer.domElement);

      // Agregar una luz direccional
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      scene.add(directionalLight);

      const geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
      const material = new THREE.MeshPhysicalMaterial({ color: 0x888888, metalness: 1, roughness: 0.2 }); // Ajustar las propiedades para simular metal
      const cylinder = new THREE.Mesh(geometry, material);
      scene.add(cylinder);

      // Función para mover la cámara
      const handleCameraMove = () => {
        camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };

      handleCameraMove();

      const animate = () => {
        requestAnimationFrame(animate);
        handleCameraMove();
      };

      animate();

      return () => {
        if (currentElement) {
          currentElement.removeChild(renderer.domElement);
        }
      };
    }
  }, [height, radius, cameraPosition]);

  // Funciones para mover la cámara
  const moveCameraLeft = () => setCameraPosition(prevPos => ({ ...prevPos, x: prevPos.x - 1 }));
  const moveCameraRight = () => setCameraPosition(prevPos => ({ ...prevPos, x: prevPos.x + 1 }));
  const moveCameraUp = () => setCameraPosition(prevPos => ({ ...prevPos, y: prevPos.y + 1 }));
  const moveCameraDown = () => setCameraPosition(prevPos => ({ ...prevPos, y: prevPos.y - 1 }));
  const zoomCameraIn = () => setCameraPosition(prevPos => ({ ...prevPos, z: prevPos.z - 1 }));
  const zoomCameraOut = () => setCameraPosition(prevPos => ({ ...prevPos, z: prevPos.z + 1 }));

  return (
    <div>
      <div ref={mountRef} style={{ width: '100%', height: '400px' }} />
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(Number(e.target.value))}
        placeholder="Altura del cilindro"
      />
      <input
        type="number"
        value={radius}
        onChange={(e) => setRadius(Number(e.target.value))}
        placeholder="Radio del cilindro"
      />
      <div>
        {/* Flechas para mover la cámara */}
        <button onClick={moveCameraLeft}>Left</button>
        <button onClick={moveCameraRight}>Right</button>
        <button onClick={moveCameraUp}>Up</button>
        <button onClick={moveCameraDown}>Down</button>
        <button onClick={zoomCameraIn}>Zoom In</button>
        <button onClick={zoomCameraOut}>Zoom Out</button>
      </div>
    </div>
  );
}
