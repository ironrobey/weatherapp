<template>
    <div class="flex flex-col min-h-screen font-Montserrat bg-gradient-to-t from-cyan-400 to-blue-600 p-2">
        <div class="w-full sm:w-2/3 md:w-2/3 lg:w-5/6 mx-auto">
            <h1 class="text-3xl text-gray-300 my-3">
                <RouterLink :to="{ name: 'home' }">Weather App</RouterLink>
            </h1>
        </div>
        <RouterView />
    </div>
</template>

<script setup>
    import { RouterView } from 'vue-router'
</script>