import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFiltersSidebard from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'

describe('JobFiltersSidebard.vue', () => {
  const renderComponent = () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    const userStore = useUserStore()

    render(JobFiltersSidebard, {
      global: {
        plugins: [pinia],
        stubs: {
            FontAwesomeIcon: true
        }
      }
    })

    return { jobsStore, userStore }
  }
  it('renders unique list of organizations from jobs store', async () => {
    const { jobsStore } = renderComponent()

    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['org 1', 'org 2', 'org 3', 'org 4', 'org 5'])

    const button = screen.getByRole('button', { name: /organizations/i })
    await userEvent.click(button)

    const organizationsListItems = screen.getAllByRole('listitem')
    const organizations = organizationsListItems.map((item) => item.textContent)
    expect(organizations).toEqual(Array.from(jobsStore.UNIQUE_ORGANIZATIONS))
  })

  it("communicates that user has selected checkbox for organization", async () => {
    const { jobsStore, userStore } = renderComponent()

    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['org 1', 'org 2', 'org 3', 'org 4', 'org 5'])

    const button = screen.getByRole('button', { name: /organizations/i })
    await userEvent.click(button)

    const org1Checkbox = screen.getByRole('checkbox', { name: /org 1/i })
    await userEvent.click(org1Checkbox)

    expect(userStore.ADD_SELECTED_ORGANIZATION).toHaveBeenCalledWith(['org 1'])
  })
})
