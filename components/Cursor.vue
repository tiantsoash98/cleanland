<template>
    <div class="cursor">
        <div class="cursor__content cursor__slider overlay">
            <span>Slider</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
.cursor {
    $root:&;
    position: fixed;
    background-color: black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.3s var(--alias-default-ease),
                width 0.3s var(--alias-default-ease),
                height 0.3s var(--alias-default-ease),
                opacity 0.3s var(--alias-default-ease), 
                background-color 0.3s var(--alias-default-ease);
    user-select: none;
    pointer-events: none;
    z-index: var(--z-index-cursor);
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s var(--alias-default-ease);
        transform: scale(0);
    }

    &--hidden {
        opacity: 0;
    }

    &--link {
        width: 20px;
        height: 20px;
    }

    &--slider {
        width: var(--title-h1);
        height: var(--title-h1);
        background-color: var(--color-neutral-100);

        & #{$root}__slider {
            transform: scale(1);
        }
    }
}
</style>