<template>
    <div class="img-slider">
        <Swiper 
            :space-between="spaceBetween"
            :breakpoints="{
                767: {
                    slidesPerView: 3.2,
                },
                576: {
                    slidesPerView: 2.1,
                },
                320: {
                    slidesPerView: 1.1,
                }
            }"
            :slidesOffsetBefore="slidesOffset"
            :slidesOffsetAfter="slidesOffset"
            :grabCursor="true" 
            :modules="modules"
        >
            <SwiperSlide v-for="(img, index) in imgList" :key="index">
                <nuxt-img
                    :src="img.src"
                    class="img-slider__item img img-load" 
                    sizes="sm:80vw md:30vw lg:30vw 80vw"
                    :alt="img.alt || ''"
                    loading="lazy"
                />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { FreeMode, Navigation } from 'swiper/modules'
const modules = [FreeMode, Navigation]

const props = defineProps({
    imgList: {
        type: Array
    }
})

const spaceBetween = 20
const slidesOffset = 27
</script>

<style lang="scss" scoped>
.swiper {
    height: 100%;
}
</style>