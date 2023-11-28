import { useState, useEffect } from 'react'

const MOBILE_SCREEN = 1024

export function useWindowSize(initialIsMobileValue = false) {
    const [screenWidth, setScreenWidth] = useState(0)
    const [isMobile, setIsMobile] = useState(initialIsMobileValue)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setScreenWidth(window.innerWidth)
            setIsMobile(window.innerWidth <= MOBILE_SCREEN)
        }
    }, [])

    return { screenWidth, isMobile }
}
