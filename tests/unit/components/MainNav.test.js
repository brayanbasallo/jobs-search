import {render, screen} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
    it('display company name', () => {
        render(MainNav, {
            global: {
                stubs: {
                    FontAwesomeIcon: true
                }
            },
        })
        //screen.debug() // uncomment to see the rendered HTML
        const companyName = screen.getByText('Bobo Careers')
        expect(companyName).toBeInTheDocument()
    })
    it("displays menu items fot navegations", () => {
        render(MainNav, {
            global: {
                stubs: {
                    FontAwesomeIcon: true
                }
            },
        })
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
            render(MainNav, {
                global: {
                stubs: {
                    FontAwesomeIcon: true
                }
            },
            })
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