import {render, screen} from '@testing-library/vue'

import TheSubnav from '@/components/TheSubnav.vue'

describe('TheSubnav', () => {
    /**
     * make renderTheSubnav function to avoid repeat code
     * required data to render TheSubnav component
     * @param {Object} data 
     */
    const renderTheSubnav = (data) => {
        render(TheSubnav, {
            global: {
                stubs: {
                    FontAwesomeIcon: true
                }
            },
            data() {
                return data
            }
        })
    }

    describe('when user is on jobs page', () =>{
        it('display job acount', () => {
            renderTheSubnav({
                onJobResultsPage: true
            })

            const jobCount = screen.queryByText('1653')

            expect(jobCount).toBeInTheDocument()	

        })
    })
    describe('when user is not on jobs page', () =>{
        it('display job acount', () => {
            renderTheSubnav({
                onJobResultsPage: false
            })

            const jobCount = screen.queryByText('1653')

            expect(jobCount).not.toBeInTheDocument()	

        })
    })
})