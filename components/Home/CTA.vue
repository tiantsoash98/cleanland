<template>
    <section class="home-cta">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="home-cta__img">
                        <nuxt-img
                            src="/cleanland-cta.jpg"
                            class="img img-load" 
                            sizes="sm:30vw md:30vw lg:30vw 100vw"
                            role="presentation"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div class="col-6 col-start-md-5">
                    <div class="section-reveal__text">
                        <p class="title-h4 split-type">Be a part of the movement and help create a sustainable future for agriculture.</p>
                        <p class="title-h4 split-type mt-8">Connect with us to learn more about our products, services, and how we can support your farming endeavors.</p>
                    </div>
                    <ButtonMain class="mt-12" text="Contact us" :has-icon="true"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-cta {
    &__img {
        height: 50svh;
        transform: translateY(-50%);
    }
}
</style>