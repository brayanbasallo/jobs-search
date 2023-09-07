import {render, screen} from '@testing-library/vue'

import TheSubnav from '@/components/Navigation/TheSubnav.vue'

describe('TheSubnav', () => {
    /**
     * make renderTheSubnav function to avoid repeat code
     * required data to render TheSubnav component
     * @param {Object} data 
     */
    const renderTheSubnav = ($route) => {
        render(TheSubnav, {
            global: {
                stubs: {
                    FontAwesomeIcon: true
                },
                mocks: {
                    $route
                }
            }
        })
    }

    describe('when user is on jobs page', () =>{
        it('display job acount', () => {
            const $route = {
                name: "JobResults"
            }
            renderTheSubnav($route)

            const jobCount = screen.queryByText('1653')

            expect(jobCount).toBeInTheDocument()	

        })
    })
    describe('when user is not on jobs page', () =>{
        it('display job acount', () => {
            const $route = {
                name: "Home"
            }
            renderTheSubnav($route)

            const jobCount = screen.queryByText('1653')

            expect(jobCount).not.toBeInTheDocument()	

        })
    })
})