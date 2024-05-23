export default () => {
    // Lenis scroll
    const { initLenis, destroyLenis } = useLenis()
    // Img loaded
    const { initImgLoaded, destroyImgLoaded } = useImgLoaded()
    // Split types
    const { initSplitType, destroySplitType } = useSplitType()
    // Scroll reveal animate
    const { initSectionScrollRevealAnimate, destroySectionScrollRevealAnimate } = useSectionScrollRevealAnimate()
    // Split types
    const { initLocalTime, destroyLocalTime } = useLocalTime()
    // Page load
    const { initPageLoader, destroyPageLoader } = usePageLoader()


    const init = () => {
        initImgLoaded()
        initSplitType()
        initSectionScrollRevealAnimate()
        initLocalTime()
        // Play Page loader out when everything ready if first load
        initPageLoader()
        initLenis()
    }

    const destroy = () => {
        destroyImgLoaded()
        destroySplitType()
        destroySectionScrollRevealAnimate()
        destroyLocalTime()
        destroyPageLoader()
        destroyLenis()
    }

    return { 
        init,
        destroy 
    }
}