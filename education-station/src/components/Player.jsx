import { useSphere } from "@react-three/cannon";
import React, { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { Vector3 } from "three";
import { useKeyboardInput } from "../hooks/useKeyboardInput";
import { useMouseInput } from "../hooks/useMouseInput";
import { useVariable } from "../hooks/useVariable";
import { Raycaster } from "three";

const speed = 300;

export const Player = () => {
  const [sphereRef, api] = useSphere(() => ({
    mass: 1,
    fixedRotation: true,
    position: [0, 1, 0],
    args: 0.2,
    material: {
      friction: 0
    }
  }));

  const pressed = useKeyboardInput(["w", "a", "s", "d", " "]);
  const input = useVariable(pressed);

  const { camera, scene } = useThree();

  const state = useRef({
    timeToShoot: 0,
    timeTojump: 0,
    vel: [0, 0, 0],
    jumping: false
  });

  useEffect(() => {
    api.velocity.subscribe((v) => (state.current.vel = v));
  }, [api]);

  useFrame((_, delta) => {
    const { w, s, a, d } = input.current;

    let velocity = new Vector3(0, 0, 0);
    let cameraDirection = new Vector3();
    camera.getWorldDirection(cameraDirection);

    let forward = new Vector3();
    forward.setFromMatrixColumn(camera.matrix, 0);
    forward.crossVectors(camera.up, forward);

    let right = new Vector3();
    right.setFromMatrixColumn(camera.matrix, 0);

    let [horizontal, vertical] = [0, 0];

    if (w) {
      vertical += 1;
    }
    if (s) {
      vertical -= 1;
    }
    if (d) {
      horizontal += 1;
    }
    if (a) {
      horizontal -= 1;
    }

    if (horizontal !== 0 && vertical !== 0) {
      velocity
        .add(forward.clone().multiplyScalar(speed * vertical))
        .add(right.clone().multiplyScalar(speed * horizontal));
      velocity.clampLength(-speed, speed);
    } else if (horizontal !== 0) {
      velocity.add(right.clone().multiplyScalar(speed * horizontal));
    } else if (vertical !== 0) {
      velocity.add(forward.clone().multiplyScalar(speed * vertical));
    }


    api.velocity.set(
      velocity.x * delta,
      state.current.vel[1],
      velocity.z * delta
    );

    camera.position.set(
      sphereRef.current.position.x,
      sphereRef.current.position.y + 1,
      sphereRef.current.position.z
    );
  });

  return <></>;
};
