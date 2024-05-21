<template>
    <div class="hero pb-14">
        <div class="hero__content-wrapper container">
            <h1 class="title-h3">
                <div class="split-type animate__title-in">Natural and sustainable<br> agricultural solutions</div>
            </h1>
            <ButtonMain :has-icon="true" text="Explore" color="white" class="mt-12"/>
        </div>
        <div class="hero__video-wrapper overlay">
            <div class="hero__video-overlay overlay"></div>
            <video 
                src="/cleanland-hero.mp4" 
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
</script>

<style lang="scss" scoped>
.hero {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100svh;
    display: flex;
    align-items: flex-end;

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
    }
    &__video-overlay {
        background-color: var(--color-neutral-950);
        z-index: 1;
        opacity: 0.3;
    }
}
</style>