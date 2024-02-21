import { defineStore } from 'pinia'
import getJobs from '../api/getJobs'
import { useUserStore } from '@/stores/user'

export const FETCH_JOBS = 'FETCH_JOBS'
export const UNIQUE_ORGANIZATIONS = 'UNIQUE_ORGANIZATIONS'
export const UNIQUE_JOB_TYPES = 'UNIQUE_JOB_TYPES'
export const FILTER_JOBS_BY_ORGANIZATION = 'FILTER_JOBS_BY_ORGANIZATION'
export const FILTER_JOBS_BY_BY_JOB_TYPES = 'FILTER_JOBS_BY_BY_JOB_TYPES'

export const useJobsStore = defineStore('jobs', {
  state: () => ({
    jobs: []
  }),
  actions: {
    async [FETCH_JOBS]() {
      this.jobs = await getJobs()
    }
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set()
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization))
      return uniqueOrganizations;
    },
    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set()
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType))
      return uniqueJobTypes;
    },
    [FILTER_JOBS_BY_ORGANIZATION](state) {
      const userStore = useUserStore()
      if (!userStore.selectedOrganizations.length) 
        return state.jobs
      
      return state.jobs.filter((job) => userStore.selectedOrganizations.includes(job.organization))
    },
    [FILTER_JOBS_BY_BY_JOB_TYPES](state) {
      const userStore = useUserStore()
      if (!userStore.selectedJobTypes.length) 
        return state.jobs
      
      return state.jobs.filter((job) => userStore.selectedJobTypes.includes(job.jobType))
    }
  }
})
