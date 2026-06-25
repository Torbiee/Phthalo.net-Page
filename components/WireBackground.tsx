"use client";
import * as THREE from "three";
import { useMemo, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Water } from "@react-three/drei";
import { Mesh, PlaneGeometry } from "three";

export default function WireBackground() {
  const myMesh = useRef<Mesh>(null!);

  const geometry = useMemo(() => {
	  const geo = new PlaneGeometry(40, 30, 40, 20);

	  const positions = geo.attributes.position;

	  for (let i = 0; i < positions.count; i++) {
		  const height = Math.random() * 5;
		  positions.setZ(i, height);
	  }
	  positions.needsUpdate = true;
	  geo.computeVertexNormals();
	  return geo;
  }, []);

  useFrame(({ clock }) => {
	  if (!myMesh.current) return;
    myMesh.current.rotation.z = Math.sin(clock.elapsedTime * 0.05) * 0.3;
  });

  return (
    <mesh ref={myMesh} geometry={geometry} rotation={[-Math.PI / 5, 0, 0]} position={[0, -1, 0]}>
      <meshStandardMaterial color="#38bdf8"  wireframe/>
    </mesh>
  );
}

