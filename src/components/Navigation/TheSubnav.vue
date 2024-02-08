<template>
    <div class="w-full h-16 border-b border border-solid border-brand-gray-1 bg-white">
        <div class="flex h-full items-center px-8">
            <div v-if="onJobResultsPage">
                <font-awesome-icon 
                :icon="['fas', 'search']" 
                class="mr-3 text-brand-blue-1" />
                <span> <span class=" text-brand-green-1">{{ FILTER_JOBS_BY_ORGANIZATION.length }}</span> jobs matched</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useJobsStore, FILTER_JOBS_BY_ORGANIZATION } from '@/stores/jobs';

export default {
    name: 'TheSubnav',
    computed: {
        ...mapState(useJobsStore, [FILTER_JOBS_BY_ORGANIZATION]),
        onJobResultsPage() {
            return this.$route.name === 'JobResults'
        }
    }
}
</script>