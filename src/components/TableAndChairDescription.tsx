'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Scroll, useScroll } from "@react-three/drei";
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

interface TableAndChairDescriptionProps {

}

export default function TableAndChairDescription({ }: TableAndChairDescriptionProps) {
    gsap.registerPlugin(useGSAP,ScrollTrigger)

    const scroll = useScroll()

    const sectOneRef = useRef<HTMLDivElement | null>(null)
    const sectTwoRef = useRef<HTMLDivElement | null>(null)
    const sectThreeRef = useRef<HTMLDivElement | null>(null)
    const sectFourRef = useRef<HTMLDivElement | null>(null)
    // const contRef=useRef<HTMLDivElement | null>(null)

    const scrollDireRef=useRef(1)

    const [header, setHeader] = useState(1)
    const [sectionOne, setSectionOne] = useState(1)
    const [sectionTwo, setSectionTwo] = useState(1)
    const [sectionThree, setSectionThree] = useState(1)
    const [sectionFour, setSectionFour] = useState(1)

    // useEffect(() => {
    //     function checkScrollDirection(event: WheelEvent) {
    //         if (checkScrollDirectionIsUp(event)) {
    //             console.log('UP');
    //             scrollDireRef.current=1
    //         } else {
    //             console.log('Down');
    //             scrollDireRef.current=-1
    //         }
    //     }

    //     function checkScrollDirectionIsUp(event: WheelEvent) {
    //         return event.deltaY > 0;
    //     }


    //     scroll.el.addEventListener('wheel', checkScrollDirection);

    //     return () => scroll.el?.removeEventListener('wheel', checkScrollDirection)
    // }, [])

    useFrame((state, delta) => {
        // console.log(state.camera)
        setHeader(1 - scroll.range(0, 1 / 75))
        // setSectionOne(1)
        // setSectionTwo(scroll.curve(1 / 3, 1 / 3))
        // setSectionThree(scroll.range(2 / 3, 1 / 3))
        // setSectionFour(1)
    })

    useGSAP(()=>{
        gsap.to(sectOneRef.current,{
            scrollTrigger:{
                trigger:sectOneRef.current,
                markers:true,
                pin:true,
                start:'top bottom-=260px',
                end:'bottom+=3000px bottom',
                scroller:scroll.el,
                scrub:2,
                // pinType:'fixed'
            },
            // x:'-=200px',
            background:'blue'
        })
    })

    return (
        <>
            <div className="w-full relative min-h-screen">
                {/* Header */}
                <div style={{ opacity: header }} className=' w-screen py-4 flex flex-col justify-center items-center gap-4 '>
                    <h2 style={{ lineHeight: '82px', fontSize: 'clamp(64px,5.5vw,72px)' }} className='  text-center text-[72px] font-[700] mx-auto max-w-[900px]  '>
                        Trusted <span className='  text-[#C55419]'>Particle Boards</span> Manufacturer & Supplier
                    </h2>

                    <p style={{ lineHeight: '36px', fontSize: 'clamp(18px,3vw,24px)' }} className=' max-w-[700px] mx-auto w-full text-center text-[24px] font-[400]'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aspernatur molestiae provident quidem eveniet.
                    </p>
                </div>

                <div ref={sectOneRef} className=' w-[40%] absolute right-0 top-[100%]'>
                    <div >
                        <p >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis nobis, dolor corrupti dolores, odio rerum numquam assumenda doloremque modi unde ad in eius est esse quas veritatis id harum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, asperiores?
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}


{/* <div className=' w-[40%] fixed right-0 top-[100%] '>
    <div ref={sectOneRef} className=' min-h-[250vh] bg-blue-200 ' >
        <div 
            // style={{ top: (parseInt(sectOneRef.current?.style.top.replace('px','') || '0') + scrollDireRef.current*(scroll.offset * 168)),transition:'none' }} 
            className=' bg-violet-200 '>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis laudantium ipsum aliquid ducimus placeat cupiditate nesciunt odit officiis facere? Neque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate nostrum, voluptatibus provident repudiandae animi molestiae nam saepe esse consequatur!
            </p>
        </div>
    </div>

    <div className=' min-h-[250vh] bg-blue-200' >
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis laudantium ipsum aliquid ducimus placeat cupiditate nesciunt odit officiis facere? Neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate nostrum, voluptatibus provident repudiandae animi molestiae nam saepe esse consequatur!
        </p>
    </div>

    <div className=' min-h-[250vh] bg-blue-200' >
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis laudantium ipsum aliquid ducimus placeat cupiditate nesciunt odit officiis facere? Neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate nostrum, voluptatibus provident repudiandae animi molestiae nam saepe esse consequatur!
        </p>
    </div>

    <div className=' min-h-[250vh] bg-blue-200' >
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis laudantium ipsum aliquid ducimus placeat cupiditate nesciunt odit officiis facere? Neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate nostrum, voluptatibus provident repudiandae animi molestiae nam saepe esse consequatur!
        </p>
    </div>

    <div className=' min-h-[250vh] bg-blue-200' >
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem veritatis laudantium ipsum aliquid ducimus placeat cupiditate nesciunt odit officiis facere? Neque.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate nostrum, voluptatibus provident repudiandae animi molestiae nam saepe esse consequatur!
        </p>
    </div>
</div> */}

