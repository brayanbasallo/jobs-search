import { render, screen } from '@testing-library/vue'
import UserEvent from '@testing-library/user-event'

import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import { vi } from 'vitest'


describe('JobSearchForm.vue', () => {
    describe('when the user submits the form', () => {
        it("directs user to job results page with user's sarch parameters", async () => {
            const push = vi.fn()
            const $router = { push }
            
            render(JobSearchForm, { 
                global: {
                    mocks: { $router },
                    stubs: {
                        FontAwesomeIcon: true
                    }
                }
            })

            const roleInput = screen.getByRole('textbox', {
                name: /role/i
            })
            await UserEvent.type(roleInput, 'Vue Developer')
            
            const locationInput = screen.getByRole('textbox', {
                name: /where?/i
            })
            await UserEvent.type(locationInput, 'dallas, tx')

            const submitButton = screen.getByRole('button', {
                name: /search/i
            })
            await UserEvent.click(submitButton)

            expect(push).toHaveBeenCalledWith({
                name: 'JobResults',
                query: {
                    role: 'Vue Developer',
                    location: 'dallas, tx'
                }
            })

        })
    })
})