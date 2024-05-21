<template>
    <div class="hero pb-8">
        <div class="hero__content-wrapper row">
            <div class="container">
                <div class="col-full hero__content-box">
                    <h1 class="title-h1">
                        <div class="split-type animate__title-in">Natural <br>solutions</div>
                    </h1>
                </div>
            </div>
        </div>
        <div class="hero__video-wrapper overlay">

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
}
</style>