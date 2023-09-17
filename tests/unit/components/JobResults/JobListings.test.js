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
      axios.get.mockReturnValue({ data: Array(15).fill({}) })
      const queryParams = { page: '1' }
      const $route = createRoute(queryParams)

      renderJobListings($route)

      await screen.findAllByRole('listitem')

      const previousLink = screen.queryByRole('link', { name: /previous page/i })
      expect(previousLink).not.toBeInTheDocument()
    })

    it('show the next page button', async () => {
      axios.get.mockReturnValue({ data: Array(15).fill({}) })
      const queryParams = { page: '1' }
      const $route = createRoute(queryParams)

      renderJobListings($route)

      await screen.findAllByRole('listitem')
      const nextLink = screen.queryByRole('link', { name: /next/i })
      expect(nextLink).toBeInTheDocument()
    })
  })

  describe('when the user is on the last page', () => {
    it('does not show the next page button', async () => {
      axios.get.mockReturnValue({ data: Array(15).fill({}) })
      const queryParams = { page: '2' }
      const $route = createRoute(queryParams)

      renderJobListings($route)

      await screen.findAllByRole('listitem')
      const nextLink = screen.queryByRole('link', { name: /next/i })
      expect(nextLink).not.toBeInTheDocument()
    })

    it('shows the previous page button', async () => {
      axios.get.mockReturnValue({ data: Array(15).fill({}) })
      const queryParams = { page: '2' }
      const $route = createRoute(queryParams)

      renderJobListings($route)

      await screen.findAllByRole('listitem') // wait for the jobs to load

      const previousLink = screen.queryByRole('link', { name: /previous/i })
      expect(previousLink).toBeInTheDocument()
    })
  })
})
