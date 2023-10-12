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
