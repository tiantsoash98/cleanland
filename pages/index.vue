<template>
    <main class="page" id="top">
        <HomeHero/>
        <HomePresentation/>
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