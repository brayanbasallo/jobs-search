<template>
    <h1 class="text-6xl font-bold">Home results page</h1>
    <button @click="goToHome">Go to home</button>    
</template>

<script>
export default {
    name: 'JobResultsView',
    methods: {
        goToHome() {
            this.$router.push({ name: 'Home' });
        },
    },
};
</script>