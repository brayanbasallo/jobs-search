import {render, screen} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'

import MainNav from '@/components/Navigation/MainNav.vue'

describe('MainNav', () => {
    const renderMainNav = () => {
        render(MainNav, {
            global: {
                stubs: {
                    FontAwesomeIcon: true,
                    RouterLink: RouterLinkStub,
                }
            },
        })
    }

    it('display company name', () => {
        renderMainNav()
        //screen.debug() // uncomment to see the rendered HTML
        const companyName = screen.getByText('Bobo Careers')
        expect(companyName).toBeInTheDocument()
    })
    it("displays menu items fot navegations", () => {
        renderMainNav()
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

    describe("When the user logs in", () => {
        it("displays the profile picture", async () => {
            renderMainNav()
            let profileImage = screen.queryByRole("img", {
                name: /user profile image/i, // use a regex to match the alt text
            })
            expect(profileImage).not.toBeInTheDocument()

            const loginButton = screen.getByRole("button",{
                name: /sing in/i,
            })
            await userEvent.click(loginButton)
            profileImage = screen.getByRole("img", {
                name: /user profile image/i, // use a regex to match the alt text
            })
            expect(profileImage).toBeInTheDocument()
        });
    })
})