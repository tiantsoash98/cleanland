<template>
    <div class="cursor">
        <div class="cursor__content cursor--img-slider">
            Slider
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.cursor {
    position: fixed;
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    z-index: 1;
    transition: transform 0.3s var(--alias-default-ease),
                opacity 0.3s var(--alias-default-ease), 
                background-color 0.3s var(--alias-default-ease);
    user-select: none;
    pointer-events: none;
    z-index: 10000;
    transform: scale(1);

    &__content {
        display: none;
    }
    &--hidden {
        opacity: 0;
    }

    &--prev {
        transform: scale(0);
    }
    &--next {
        transform: scale(0);
    }

    &--link {
        transform: scale(2);
    }

    &--img-slider {
        background-color: red;
    }
}
</style>