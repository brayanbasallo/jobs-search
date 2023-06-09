import {render, screen} from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
    it('display company name', () => {
        render(MainNav)
        //screen.debug() // uncomment to see the rendered HTML
        const companyName = screen.getByText('Bobo Careers')
        expect(companyName).toBeInTheDocument()
    })
})