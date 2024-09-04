'use client'

import { Canvas } from "@react-three/fiber"
import TableAndChairModel from "../meshes/TableAndChair"
import { Suspense, useEffect, useRef } from "react"
import { Environment, Html, OrbitControls, Scroll, ScrollControls, ScrollControlsState, useProgress } from "@react-three/drei"
import { NeutralToneMapping, Vector3 } from "three"
import TableAndChairDescription from "../TableAndChairDescription"
import useDocSize from "@/hooks/useDocSize"
import * as THREE from 'three'

interface TableAndChairProps {

}

const Loader = () => {
    const { progress, active } = useProgress()

    return (
        <Html center>{progress.toFixed()}%</Html>
    )
}

export default function TableAndChairCanvas({ }: TableAndChairProps) {
    // const { width, height } = useDocSize()

    // console.log(26, width)
    // const ele:Vector3= new THREE.Vector3(1,1,1)
    const cameraRef = useRef<Vector3>(new THREE.Vector3(1,1,1))
    // console.log(ele)

    // useEffect(() => {
    //     // console.log(33,cameraRef.current)

    //     // if (cameraRef.current) {
    //         cameraRef.current.set(-1.5, 1, width < 768 ? 10.5 : 4.5)

    //         console.log(33,cameraRef.current)
    //     // }
    // }, [width])

    return (
        <Canvas onCreated={(state)=>state.gl.setClearColor('#F7F3F0',1)} camera={{ fov: 40 }}
            dpr={[1, 1.5]}
            gl={{
                // outputEncoding: THREE.SRGBEncoding,
                outputColorSpace:THREE.SRGBColorSpace,
                toneMapping: NeutralToneMapping,
                toneMappingExposure: .0015,
                antialias: true
            }}>
            <ambientLight intensity={1.5} />

            {/* <OrbitControls/> */}
            <Suspense fallback={<Loader />}>
                <ScrollControls style={{
                    // left: '15px'
                }} damping={0.5} pages={20}>
                    <TableAndChairModel />
                    <Scroll html>
                        <TableAndChairDescription />
                    </Scroll>
                </ScrollControls>
            </Suspense>
        </Canvas>
    )
}