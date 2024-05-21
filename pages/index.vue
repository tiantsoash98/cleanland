<template>
    <main class="page mt-24" id="top">
        <HomeHero/>
    </main>
</template>

<script setup>
const { init, destroy } = useInitScript()

useHead({
    title: 'CleanLand | Natural and sustainable agricultural solutions',
})


onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    destroy()
})
</script>

<style lang="scss" scoped>

</style>