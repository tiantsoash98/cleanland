export default () => {
    // Lenis scroll
    const { initLenis, destroyLenis } = useLenis()
    // Scroll window listener
    const { initScrollDown, destroyScrollDown } = useScrollDown()
    // Img loaded
    const { initImgLoaded, destroyImgLoaded } = useImgLoaded()
    // Split types
    const { initSplitType, destroySplitType } = useSplitType()
    // Scroll reveal animate
    const { initScrollAnimations, destroyScrollAnimations } = useScrollAnimations()
    // Split types
    const { initLocalTime, destroyLocalTime } = useLocalTime()
    // Marquee
    const { initMarquee, destroyMarquee } = useMarquee()
    // Page load
    const { initPageLoader, destroyPageLoader } = usePageLoader()


    const init = () => {
        initImgLoaded()
        initSplitType()
        initLocalTime()
        initScrollDown()
        initMarquee()
        // Play Page loader out when everything ready if first load
        initPageLoader()
        initLenis()
        initScrollAnimations()
    }

    const destroy = () => {
        destroyImgLoaded()
        destroySplitType()
        destroyLocalTime()
        destroyScrollDown()
        destroyMarquee()
        destroyPageLoader()
        destroyLenis()
        destroyScrollAnimations()
    }

    return { 
        init,
        destroy 
    }
}