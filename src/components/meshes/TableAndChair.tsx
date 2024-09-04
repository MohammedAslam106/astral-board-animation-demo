'use client'

import useDocSize from "@/hooks/useDocSize"
import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"

interface TableAndChairProps{
    
}

useGLTF.preload('/models/table-chair.glb')

export default function TableAndChairModel({}:TableAndChairProps ){
    const groupRef=useRef<Group>(null)
    const {nodes,materials,animations,scene}=useGLTF('/models/table-chair.glb')
    const {width}=useDocSize()
    // console.log(animations)

    const {actions,clips}=useAnimations(animations,scene)
    const scroll=useScroll()
    const state=useThree()

    useEffect(()=>{
        if(actions['Animation']){
            actions['Animation'].play().paused=true
        }
    },[])

    useEffect(()=>{
        // -1.5, 1, width < 768 ? 10.5 : 4.5 --->These are the values before
        state.camera.position.set(-.075, .315, width < 768 ? 9.5 : 5.9)

        // state.camera.position.set(-.4, -0.125, width < 768 ? 9.5 : 4.5)
        // state.camera.fov(30)
    },[width])

    useFrame(
        ()=>{
            // @ts-ignore
            actions['Animation'].time=
                // @ts-ignore
                (actions['Animation']?.getClip().duration * scroll.offset) / 1
                // console.log(state.camera.position.x)
            
                // console.log(scroll.offset)

                if(scroll.offset<=0.35){
                    // console.log(scroll.offset)
                // console.log(state.camera.position.z)
                // console.log(scroll.range(1/3, 1 / 3))
                    state.camera.position.setX(scroll.offset * 4.5 )
                    state.camera.position.setZ((scroll.offset * 4.85) + 5.9)
                }else if(scroll.offset<=0.25){
                    state.camera.position.setZ(5.9)
                }
        }
    )

    return(
        <group ref={groupRef}>
            <primitive object={scene}/>
        </group>
    )
}