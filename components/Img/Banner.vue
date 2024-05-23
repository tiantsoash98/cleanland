<template>
    <section class="section img-banner parallax">
        <div class="parallax__wrapper">
            <nuxt-img
                :src="img.src"
                class="parallax__img img img-load" 
                sizes="sm:100vw md:100vw lg:100vw 100vw"
                :alt="img.alt || ''"
                loading="lazy"
            />
        </div>
        <div class="img-banner__content-wrapper overlay pt-12 pb-12">
            <div class="img-banner__content-overlay overlay"></div>
            <div class="container img-banner__content section-reveal__text">
                <div class="title-h2 split-type">A green revolution</div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    img: Object,
})
</script>

<style lang="scss" scoped>
.img-banner {
    &__content-wrapper {
        display: flex;
        color: var(--color-neutral-0);
        z-index: 2;
    }
    &__content-overlay {
        background-color: var(--color-neutral-950);
        opacity: 0;
        z-index: 1;
    }
    &__content {
        z-index: 1;
    }
}
</style>