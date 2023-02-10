<template>
    <section class="mt-6"> 
        <h2 class="text-2xl text-white">Nearby Places</h2>
        <table class="table-fixed w-full text-white text-left w-full border-collapse text-left text-sm">
            <thead>
                <tr>
                    <th class="px-6 py-4 font-bold">Name</th>
                    <th class="px-6 py-4 font-bold">Categories</th>
                    <th class="px-6 py-4 font-bold">Address</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                <tr v-for="(place, index) in props.places" :key="index" class="hover:bg-gray-50 hover:text-blue-500">
                    <td class="px-6 py-4">{{ place.name }}</td>
                    <td class="px-6 py-4">{{ parseCategories(place.categories) }}</td>
                    <td class="px-6 py-4">{{ place.location.formatted_address }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script setup>
const props = defineProps({
    places: {
        required: true,
    },
})

const parseCategories = (categories) => {
    const cats = categories.map(category => {
        return category.name
    })

    return cats.join(', ')
}
</script>