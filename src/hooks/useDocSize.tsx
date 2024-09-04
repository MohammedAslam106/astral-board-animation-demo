'use client'

import { useEffect, useState, useCallback } from "react"

export default function useDocSize() {
    const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0
    })

    const onResize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            onResize()
            window.addEventListener('resize', onResize)

            return () => window.removeEventListener('resize', onResize)
        }
    }, [onResize])

    return windowSize
}