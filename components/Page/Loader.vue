<template>
    <div class="page-loader container" v-if="pageLoaderState != 'loadedd'">
        <div class="page-loader__frame overlay"></div>
        <div class="page-loader__wrapper row">
            
            <div class="page-loader__logo-wrapper col-2 col-start-6">
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
    }
    &__logo-wrapper {
        display: flex;
        align-items: center;
        z-index: 1;
    }
    &__logo {
        overflow: hidden;

        & path {
            transform: translateY(132px);
        }
    }
}
</style>