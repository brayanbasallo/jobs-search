<template>
    <main class="flex-auto bg-brand-gray-2 p-8">
        <ol v-for="x in 10" :key="x">
           <JobListeng />
        </ol>
    </main>
</template>

<script>
import JobListeng from '@/components/JobResults/JobListeng.vue';
export default {
    name: "JobListings",
    components: {
        JobListeng
    }
}
</script>