<template>
    <main class="flex-auto bg-brand-gray-2 p-8">
        <ol>
           <JobListeng v-for="job in jobs" :key="job.id" :job="job" />
        </ol>
    </main>
</template>

<script>
import axios from 'axios';

import JobListeng from '@/components/JobResults/JobListeng.vue';
export default {
    name: "JobListings",
    components: {
        JobListeng
    },
    data() {
        return {
            jobs: []
        }
    },
    async mounted() {
        const response = await axios.get('http://localhost:3000/jobs')
        this.jobs = response.data
    }
}
</script>