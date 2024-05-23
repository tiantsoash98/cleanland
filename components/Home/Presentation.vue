<template>
    <section class="section presentation" ref="targetSection">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h2 class="paragraph-text">Revolutionize agricultural industry</h2>
                </div>
                <div class="col-6">
                    <p class="title-h4 split-type section-reveal__text">We believe that farmers are the backbone of sustainable agriculture. Our solutions are designed with the farmer in mind, ensuring they are easy to use, cost-effective, and reliable.</p>
                    <p class="title-h4 split-type section-reveal__text mt-8">We work closely with the farming community to understand their challenges and needs, providing tailored solutions and ongoing support to help them transition to more sustainable practices.</p>
                    <ButtonMain class="mt-8" text="Discover our vision" :has-icon="true"/>
                    <div style="height: 100vh;"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const targetSection = ref(null)
const { gsap } = useGsap()
const { textRevealByLine } = useSectionScrollRevealAnimate()

onMounted(() => {
    if(targetSection.value){
        gsap.timeline({
            scrollTrigger: {
                trigger: targetSection.value,
                //trigger element - viewport
                start: "top 90%",
                end: "top center",
            }
        })
        .add(textRevealByLine(targetSection))
    } 
})
</script>

<style lang="scss" scoped>
.presentation {
    margin-top: 100vh;
    background-color: var(--color-neutral-0);
    padding-top: var(--section-vertical-padding);
}
</style>