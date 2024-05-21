<template>
    <div class="page-loader container" v-if="pageLoaderState != 'loaded'">
        <div class="page-loader__frame overlay"></div>
        <div class="page-loader__wrapper pb-6 pb-md-14">
            <div class="page-loader__logo-wrapper">
                <IconLogoHorizontal class="page-loader__logo"/>
            </div>            
        </div>
    </div>
</template>

<script setup>
const pageLoaderState = usePageLoaderState()
</script>

<style lang="scss">
.page-loader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100dvh;
    z-index: var(--z-index-loader);

    &__frame {
        height: 100dvh;
        width: 100%;
        background-color: var(--color-neutral-0);
    }
    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }
}
</style>