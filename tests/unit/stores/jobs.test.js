import { createPinia, setActivePinia } from 'pinia'
import axios from 'axios'

import { useJobsStore } from '@/stores/jobs'
import { describe } from 'vitest'
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
      await store.FETCH_JOBS ()
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
      store.jobs = [
        { organization: 'org 1' },
        { organization: 'org 2' },
        { organization: 'org 1' }
      ]
      expect(store.UNIQUE_ORGANIZATIONS).toEqual(new Set(['org 1', 'org 2']))
    })
  })
})
