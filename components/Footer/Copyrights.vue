<template>
    <div class="footer-copyrights">
        <div class="container">
            <div class="footer-copyrights__wrapper row">
                <div class="col-8">©2024 CleanLand</div>
                <div class="col-2 footer-copyrights__develop">Site by Tiantsoa</div>
                <div class="col-2">
                    <ButtonMain class="button" text="Back to top" :has-icon="true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer-copyrights{
    &__wrapper {
        & > div {
            display: flex;
            align-items: center;

            &:last-child {
                justify-content: flex-end;
            }
        }
    }
    &__develop {
        opacity: 0.4;
    }
}
</style>