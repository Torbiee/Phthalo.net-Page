"use client";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Stars, Caustics } from "@react-three/drei";

import { Water } from "three/addons/objects/Water.js";

export default function WaterBackground() {
  const normalMap = useLoader(THREE.TextureLoader, "/watertexture.jpg");
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
 normalMap.wrapS = THREE.RepeatWrapping;
	  normalMap.wrapT = THREE.RepeatWrapping;
	  normalMap.repeat.set(8,8);

  useFrame(({ clock }) => {

	  normalMap.offset.x = clock.elapsedTime * 0.02;
	  normalMap.offset.y = clock.elapsedTime * 0.01;
    camera.lookAt(0, 5, 0);
    
    if (!meshRef.current) return;

    const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);

      const wave =
        Math.sin(x * 0.4 + clock.elapsedTime) * 0.5 +
        Math.cos(y * 0.3 + clock.elapsedTime * 0.8) * 1.5;

      position.setZ(i, wave);
    }
    position.needsUpdate = true;
    geometry.computeVertexNormals();
   
  });

  return (
    <>
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 8, -10]}>
        <planeGeometry args={[300, 200, 150, 150]} />
        <meshPhysicalMaterial
          color="white"
          opacity={0.5}
          roughness={0.1}
          transmission={0.5}
	  normalMap={normalMap}
	  normalScale={[5, 5]}
	  side={THREE.DoubleSide}
	  
        />
      </mesh>
      <mesh position={[0, 30, 0]}>
        <sphereGeometry args={[2]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh position={[0, 30, 0]}>
      <sphereGeometry args={[2.3]} />
      <meshBasicMaterial color="white" opacity={[0.5]}/>
      </mesh>
    </>
  );

}
