import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb')
  console.log(nodes);
//   console.log(materials);
//   if (!nodes || !materials) {
//     console.error("Nodes or materials not loaded properly");
//     return null; // Or return a loading spinner or placeholder
//   }

  return (
    <group {...props} dispose={null}>
        {nodes && nodes.computer_computer_mat_0 && (
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_computer_mat_0.geometry}
                material={materials.computer_mat}
            />
        )} 
        {nodes && nodes.computer_computer_mat_0 && (
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.server_server_mat_0.geometry}
        material={materials.server_mat}
      />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vhs_vhsPlayer_mat_0.geometry}
        material={materials.vhsPlayer_mat}
      />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelf_stand_mat_0.geometry}
        material={materials.stand_mat}
      />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard_mat_0.geometry}
        material={materials.mat_mat}
      />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.arm_arm_mat_0.geometry}
        material={materials.arm_mat}
        />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tv_tv_mat_0.geometry}
        material={materials.tv_mat}
    />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0.geometry}
        material={materials.table_mat}
    />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
    <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cables_cables_mat_0.geometry}
        material={materials.cables_mat}
    />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.props_props_mat_0.geometry}
        material={materials.props_mat}
      />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.screen_screens_0.geometry}
      material={materials.screens}
    />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.screen_glass_glass_0.geometry}
     material={materials.glass}
    />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.Ground_ground_mat_0.geometry}
    material={materials.ground_mat}
    />
        )}
        {nodes && nodes.computer_computer_mat_0 && (
    <mesh
    castShadow
    receiveShadow
    geometry={nodes.peripherals_key_mat_0.geometry}
    material={materials.key_mat}
    />
        )}
    </group>
  )
}

useGLTF.preload('/models/hacker-room.glb')

export default HackerRoom