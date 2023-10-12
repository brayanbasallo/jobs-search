import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import JobListings from '@/components/JobResults/JobListings.vue'
import { useJobsStore } from '@/stores/jobs'

describe('JobListings.vue', () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: '1',
      ...queryParams
    }
  })

  const renderJobListings = ($route) => {
    const pinia = createTestingPinia()
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        },
        mocks: {
          $route
        },
        plugins: [pinia]
      }
    })
  }

  it('fetches jobs', () => {
    const $route = createRoute()
    renderJobListings($route)
    const jobsStore = useJobsStore()
    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled()
  })

  it('display maximum of 10 jobs', async () => {
    const $route = createRoute()
    renderJobListings($route)
    const jobsStore = useJobsStore()
    jobsStore.jobs = Array(15).fill({})
    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
  })

  describe('when params exclude page number', () => {
    it('displays page number 1', () => {
      const queryParams = { page: undefined }
      const $route = createRoute(queryParams)
      renderJobListings($route)

      expect(screen.getByText(/page 1/i)).toBeInTheDocument()
    })

    it('when params include page number', () => {
      const queryParams = { page: '3' }
      const $route = createRoute(queryParams)
      renderJobListings($route)

      expect(screen.getByText(/page 3/i)).toBeInTheDocument()
    })
  })

  describe('when the user is on the first page', () => {
    it('not show the previous page button', async () => {
      const queryParams = { page: '1' }
      const $route = createRoute(queryParams)

      renderJobListings($route)
      const jobsStore = useJobsStore()
      jobsStore.jobs = Array(15).fill({})

      await screen.findAllByRole('listitem')

      const previousLink = screen.queryByRole('link', { name: /previous page/i })
      expect(previousLink).not.toBeInTheDocument()
    })

    it('show the next page button', async () => {
      // axios.get.mockReturnValue({ data: Array(15).fill({}) })
      const queryParams = { page: '1' }
      const $route = createRoute(queryParams)

      renderJobListings($route)
      const jobsStore = useJobsStore()
      jobsStore.jobs = Array(15).fill({})
      await screen.findAllByRole('listitem')
      const nextLink = screen.queryByRole('link', { name: /next/i })
      expect(nextLink).toBeInTheDocument()
    })
  })

  describe('when the user is on the last page', () => {
    it('does not show the next page button', async () => {
      // axios.get.mockReturnValue({ data: Array(15).fill({}) })
      const queryParams = { page: '2' }
      const $route = createRoute(queryParams)

      renderJobListings($route)
      const jobsStore = useJobsStore()
      jobsStore.jobs = Array(15).fill({})

      await screen.findAllByRole('listitem')
      const nextLink = screen.queryByRole('link', { name: /next/i })
      expect(nextLink).not.toBeInTheDocument()
    })

    it('shows the previous page button', async () => {
      const queryParams = { page: '2' }
      const $route = createRoute(queryParams)

      renderJobListings($route)
      const jobsStore = useJobsStore()
      jobsStore.jobs = Array(15).fill({})

      await screen.findAllByRole('listitem') // wait for the jobs to load

      const previousLink = screen.queryByRole('link', { name: /previous/i })
      expect(previousLink).toBeInTheDocument()
    })
  })
})
