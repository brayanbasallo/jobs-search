import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import TheSubnav from '@/components/Navigation/TheSubnav.vue'
import { useJobsStore } from '@/stores/jobs'

describe('TheSubnav', () => {
  /**
   * make renderTheSubnav function to avoid repeat code
   * required data to render TheSubnav component
   * @param {Object} data
   */
  const renderTheSubnav = ($route) => {
    const pinia = createTestingPinia()
    const jobStore = useJobsStore()
    render(TheSubnav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        },
        mocks: {
          $route
        }
      }
    })

    return { jobStore }
  }

  describe('when user is on jobs page', () => {
    it('display job acount', async () => {
      const $route = {
        name: 'JobResults'
      }
      const { jobStore } = renderTheSubnav($route)
      const numberOfJobs = 16
      jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({})
      const jobCount = await screen.findByText(numberOfJobs)

      expect(jobCount).toBeInTheDocument()
    })
  })
  describe('when user is not on jobs page', () => {
    it('display job acount', async () => {
      const $route = {
        name: 'Home'
      }
      const { jobStore } = renderTheSubnav($route)
      const numberOfJobs = 16
      jobStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = await screen.queryByText(numberOfJobs)

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
