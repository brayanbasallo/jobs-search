import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFiltersJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue'
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'

describe('JobFiltersSidebard.vue', () => {
  const renderComponent = () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    const userStore = useUserStore()
    const $router = {
      push: vi.fn()
    }
    render(JobFiltersJobTypes, {
      global: {
        mocks: {
          $router
        },
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })

    return { jobsStore, userStore, $router }
  }
  it('renders unique list of job types from jobs store', async () => {
    const { jobsStore } = renderComponent()

    jobsStore.UNIQUE_JOB_TYPES = new Set(['org 1', 'org 2', 'org 3', 'org 4', 'org 5'])

    const button = screen.getByRole('button', { name: /job types/i })
    await userEvent.click(button)

    const jobTypesListItems = screen.getAllByRole('listitem')
    const jobTypes = jobTypesListItems.map((item) => item.textContent)
    expect(jobTypes).toEqual(Array.from(jobsStore.UNIQUE_JOB_TYPES))
  })

  describe('when user click checkbox', () => {
    it('communicates that user has selected checkbox for organization', async () => {
      const { jobsStore, userStore } = renderComponent()

      jobsStore.UNIQUE_JOB_TYPES = new Set(['org 1', 'org 2', 'org 3', 'org 4', 'org 5'])

      const button = screen.getByRole('button', { name: /job types/i })
      await userEvent.click(button)

      const org1Checkbox = screen.getByRole('checkbox', { name: /org 1/i })
      await userEvent.click(org1Checkbox)

      expect(userStore.ADD_SELECTED_JOB_TYPES).toHaveBeenCalledWith(['org 1'])
    })

    it("navigates user to job reesult page to see frresh batch of filtered jobs", async () => {
      const { jobsStore, $router } = renderComponent()

      jobsStore.UNIQUE_JOB_TYPES = new Set(['org 1', 'org 2', 'org 3', 'org 4', 'org 5'])

      const button = screen.getByRole('button', { name: /job types/i })
      await userEvent.click(button)

      const org1Checkbox = screen.getByRole('checkbox', { name: /org 1/i })
      await userEvent.click(org1Checkbox)

      expect($router.push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })
})
