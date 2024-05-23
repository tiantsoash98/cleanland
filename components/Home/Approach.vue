<template>
    <section class="section approach">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <IconArrowNarrowRight class="approach__right-icon"/>
                </div>
                <div class="col-8">
                    <div class="section-reveal__text">
                        <h2 class="title-h3 split-type">Clean Land is committed to leading the way in this green revolution, fostering a sustainable agricultural ecosystem that benefits both people and the planet.</h2>
                    </div>
                </div>
            </div>
            <div class="row mt-24 section-reveal__block">
                <div class="col-3 col-start-md-4">
                    <h3 class="title-h6">Our approach</h3>
                </div>
                <div class="col-4">
                    <h4 class="title-h6">Science-Driven Innovation</h4>
                    <p class="approach__text mt-2">We collaborate with leading scientists and agricultural experts to create products that are not only effective but also sustainable. By harnessing the power of nature and the latest scientific advancements, we develop innovative solutions that improve soil health and reduce the need for synthetic chemicals.</p>
                    <h4 class="title-h6 mt-12">Environmental stewardship</h4>
                    <p class="approach__text mt-2">Our products are crafted from natural, renewable resources, ensuring they are safe for the earth and its ecosystems. We prioritize practices that reduce carbon footprints, conserve water, and promote biodiversity. We aim to restore and maintain the health of our planet for future generations.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.approach {
    &__right-icon {
        width: var(--title-h3);
    }
    &__text {
        color: var(--color-neutral-600);
    }
}
</style>