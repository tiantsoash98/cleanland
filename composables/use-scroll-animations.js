export default () => {
    const { gsap, CustomEase } = useGsap()
    const defaultEase = ref("")
    const defaultDuration = ref(0)
    const defaultStagger = ref(0)

    const initScrollAnimations = () => { 
        defaultDuration.value = 1
        defaultStagger.value = 0.09
        defaultEase.value = getComputedStyle(document.body).getPropertyValue('--default-ease') || "power2.inOut"
        CustomEase.create("default-ease", defaultEase.value)

        // Reveal text
        document.querySelectorAll('.section-reveal__text')
            .forEach(function(triggerElement){
                let targetLines = triggerElement.querySelectorAll('.split-type--line')

                if(targetLines.length){
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "top 90%",
                            end: "top top",
                            toggleActions: "play none none none",
                        }
                    }) 
              
                    tl.from(targetLines, {
                        yPercent: 100,
                        ease: "default-ease",
                        duration: defaultDuration.value,
                        stagger: defaultStagger.value
                    })
                }
            })


        // Reveal block
        document.querySelectorAll('.section-reveal__block')
            .forEach(function(triggerElement){

                if(triggerElement.length){
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerElement,
                            start: "top 90%",
                            end: "top top",
                            toggleActions: "play none none none",
                        }
                    }) 
              
                    tl.from(triggerElement, {
                        y: '5vh',
                        opacity: 0,
                        ease: "default-ease",
                        duration: defaultDuration.value,
                    })
                }
            })
    }

    const destroyScrollAnimations = () => { 

    }

    return { 
        initScrollAnimations,
        destroyScrollAnimations
    }
}