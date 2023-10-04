import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import MainNav from '@/components/Navigation/MainNav.vue'
import { useUserStore } from '@/stores/user'

describe('MainNav', () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia()
    const $route = {
      name: 'Home'
    }
    render(MainNav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        },
        mocks: {
          $route
        }
      }
    })
  }

  it('display company name', () => {
    renderMainNav()
    //screen.debug() // uncomment to see the rendered HTML
    const companyName = screen.getByText('Bobo Careers')
    expect(companyName).toBeInTheDocument()
  })
  it('displays menu items fot navegations', () => {
    renderMainNav()
    const navegationMenuItems = screen.getAllByRole('listitem')
    const navegationMenuItemsText = navegationMenuItems.map((item) => item.textContent)
    expect(navegationMenuItemsText).toEqual([
      'Teams',
      'Location',
      'Life at Bobo careers',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('When the user logs in', () => {
    it('displays the profile picture', async () => {
      renderMainNav()
      const userStore = useUserStore()

      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i // use a regex to match the alt text
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sing in/i
      })
      userStore.isLoggedIn = true
      await userEvent.click(loginButton)
      profileImage = screen.getByRole('img', {
        name: /user profile image/i // use a regex to match the alt text
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
