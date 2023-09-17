import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import axios from 'axios'

import JobListings from '@/components/JobResults/JobListings.vue'

vi.mock('axios')

describe('JobListings.vue', () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: '1',
      ...queryParams
    }
  })

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
        mocks: {
          $route
        }
      }
    })
  }

  it('fetches jobs', () => {
    axios.get.mockReturnValue({ data: [] })
    const $route = createRoute()
    renderJobListings($route)
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/jobs')
  })

  it('display maximum of 10 jobs', async () => {
    axios.get.mockReturnValue({ data: Array(15).fill({}) })
    const $route = createRoute()
    renderJobListings($route)
    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
  })
})
