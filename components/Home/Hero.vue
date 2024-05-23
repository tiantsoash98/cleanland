<template>
    <div class="hero pb-14" ref="targetSection">
        <div class="hero__content-wrapper container">
            <h1 class="title-h4">
                <div class="split-type animate__title-in">Empowering agricultural <br>professionals with innovative<br>solutions in harmony with nature.</div>
            </h1>
            <ButtonMain :has-icon="true" text="Explore" color="white" class="mt-12"/>
        </div>
        <div class="hero__video-wrapper overlay animate__video-in">
            <div class="hero__video-overlay overlay"></div>
            <video 
                src="/cleanland-hero-2.mp4" 
                class="video"
                autoplay muted loop playsinline
                width="1920"
                height="1080"
            >
            </video>
        </div>
    </div>
</template>

<script setup>
const targetSection = ref(null)
const { gsap } = useGsap()

onMounted(() => {
    if(targetSection.value){
        gsap.timeline({
            scrollTrigger: {
                trigger: targetSection.value,
                //trigger element - viewport
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
        .to(targetSection.value, {
            yPercent: -60,
            ease: "none"
        })
        .to(".hero__video-overlay", {
            opacity: "+=0.3"
        }, '<')

        gsap.timeline({
            scrollTrigger: {
                trigger: targetSection.value,
                //trigger element - viewport
                start: "bottom top",
                end: "bottom -1%",
                toggleActions: "play none none reverse",
            }
        })
        .set(targetSection.value, {
            opacity: 0,
            pointerEvents: "none"
        })
    } 
})
</script>

<style lang="scss" scoped>
.hero {
    width: 100%;
    height: 100svh;
    display: flex;
    align-items: flex-end;
    position: fixed;
    top: 0;

    &__content-wrapper {
        width: 100%;
        align-self: flex-end;
        color: var(--color-neutral-0);

        & > div {
            display: flex;
            align-items: flex-end
        }
    }
    &__video-wrapper {
        z-index: -1;
        background-color: var(--color-neutral-500);
        clip-path: inset(51% 49% round 10px);
    }
    &__video-overlay {
        background-color: var(--color-neutral-950);
        z-index: 1;
        opacity: 0.3;
    }
}
</style>