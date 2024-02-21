import { createPinia, setActivePinia } from 'pinia'
import axios from 'axios'

import { useJobsStore } from '@/stores/jobs'

import { useUserStore } from '@/stores/user'

vi.mock('axios')
describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores job listings', () => {
    const store = useJobsStore()
    expect(store.jobs).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('FETCH_JOBS', () => {
    it('makes API request and store received data', async () => {
      axios.get.mockResolvedValue({
        data: ['job 1', 'job 2']
      })
      const store = useJobsStore()
      await store.FETCH_JOBS()
      expect(store.jobs).toEqual(['job 1', 'job 2'])
    })
  })
})

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('UNIQUE_ORGANIZATIONS', () => {
    it('returns unique organizations from list of jobs', () => {
      const store = useJobsStore()
      store.jobs = [{ organization: 'org 1' }, { organization: 'org 2' }, { organization: 'org 1' }]
      expect(store.UNIQUE_ORGANIZATIONS).toEqual(new Set(['org 1', 'org 2']))
    })
  })

  describe('UNIQUE_JOB_TYPES', () => {
  it('finds unique job types from list of jobs', () => {
    const store = useJobsStore()
    store.jobs = [
      { jobType: 'Full Time' },
      { jobType: 'Part Time' },
      { jobType: 'Full Time' }
    ]
    const result = store.UNIQUE_JOB_TYPES;

    expect(result).toEqual(new Set(['Full Time', 'Part Time']))
  })
  })

  it('returns jobs that are associated with the given organiztion', () => {
    const jobStore = useJobsStore()
    jobStore.jobs = [
      { organization: 'Google' },
      { organization: 'Amazon' },
      { organization: 'Microsoft' }
    ]

    const userStore = useUserStore()
    userStore.selectedOrganizations = ['Google', 'Microsoft']

    expect(jobStore.FILTER_JOBS_BY_ORGANIZATION).toEqual([
      { organization: 'Google' },
      { organization: 'Microsoft' }
    ])
  })

  it('returns all jobs if no organizations are selected', () => {
    const jobStore = useJobsStore()
    jobStore.jobs = [
      { organization: 'Google' },
      { organization: 'Amazon' },
      { organization: 'Microsoft' }
    ]

    const userStore = useUserStore()
    userStore.selectedOrganizations = []

    expect(jobStore.FILTER_JOBS_BY_ORGANIZATION).toEqual([
      { organization: 'Google' },
      { organization: 'Amazon' },
      { organization: 'Microsoft' }
    ])
  })

  describe("FILTER_JOBS_BY_JOB_TYPE", () => {
    it('identifies jobs that match the selected job types', () => {
      const jobStore = useJobsStore()
      jobStore.jobs = [
        { jobType: 'Full Time' },
        { jobType: 'Tempory' },
        { jobType: 'Part Time' }
      ]

      const userStore = useUserStore()
      userStore.selectedJobTypes = ['Full Time', 'Part Time']

      const result = jobStore.FILTER_JOBS_BY_BY_JOB_TYPES
      expect(result).toEqual([
        { jobType: 'Full Time' },
        { jobType: 'Part Time' }
      ])
    })
     
    it('returns all jobs if no job types are selected', () => {
      const jobStore = useJobsStore()
      jobStore.jobs = [
        { jobType: 'Full Time' },
        { jobType: 'Tempory' },
        { jobType: 'Part Time' }
      ]

      const userStore = useUserStore()
      userStore.selectedJobTypes = []

      const result = jobStore.FILTER_JOBS_BY_BY_JOB_TYPES
      expect(result).toEqual([
        { jobType: 'Full Time' },
        { jobType: 'Tempory' },
        { jobType: 'Part Time' }
      ])
    })
  });
})
