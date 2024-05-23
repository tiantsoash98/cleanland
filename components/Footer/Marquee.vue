<template>
    <div class="footer-marquee">
        <div class="footer-marquee__wrapper marquee">
            <IconLogoHorizontal/>
            <IconLogoHorizontal/>
            <IconLogoHorizontal/>
            <IconLogoHorizontal/>
        </div>
        <div class="footer-marquee__spacer"></div>
        <div class="footer-marquee__wrapper marquee">
            <IconLogoHorizontal/>
            <IconLogoHorizontal/>
            <IconLogoHorizontal/>
            <IconLogoHorizontal/>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer-marquee {
    display: flex;
    overflow: hidden;

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        gap: var(--spacing-12);
    }
    &__spacer {
        widows: var(--spacing-12);
    }
    & svg {
        height: var(--title-h1);
    }
}
</style>