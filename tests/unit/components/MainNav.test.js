import {render, screen} from '@testing-library/vue'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
    it('display company name', () => {
        render(MainNav)
        //screen.debug() // uncomment to see the rendered HTML
        const companyName = screen.getByText('Bobo Careers')
        expect(companyName).toBeInTheDocument()
    })
    it("displays menu items fot navegations", () => {
        render(MainNav)
        const navegationMenuItems = screen.getAllByRole("listitem")
        const navegationMenuItemsText = navegationMenuItems.map(
            (item) => item.textContent
        );
        expect(navegationMenuItemsText).toEqual([
            "Teams",
            "Location",
            "Life at Bobo careers",
            "How we hire",
            "Students",
            "Jobs"
        ])        
    })
})