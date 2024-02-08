import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFiltersSidebard from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'
import { useJobsStore } from '@/stores/jobs'

describe('JobFiltersSidebard.vue', () => {
  it('renders unique list of organizations from jobs store', async () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()

    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['org 1', 'org 2', 'org 3', 'org 4', 'org 5'])

    render(JobFiltersSidebard, {
      global: {
        plugins: [pinia],
        stubs: {
            FontAwesomeIcon: true
        }
      }
    })

    const button = screen.getByRole('button', { name: /organizations/i })
    await userEvent.click(button)

    const organizationsListItems = screen.getAllByRole('listitem')
    const organizations = organizationsListItems.map((item) => item.textContent)
    expect(organizations).toEqual(Array.from(jobsStore.UNIQUE_ORGANIZATIONS))
  })
})
