import { screen, render } from '@testing-library/vue'
import axios from 'axios'

import SpotLight from '@/components/JobSearch/SpotLight.vue'

vi.mock('axios')

describe('SpotLight.vue', () => {
  const mockSpotLightsRender = (spotLight = []) => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: 'some image',
          title: 'some title',
          description: 'some description',
          ...spotLight
        }
      ]
    })
  }

  it('provids image to parent component', async () => {
    mockSpotLightsRender()
    render(SpotLight, {
      slots: {
        default: `
                    <template #default="slotProps">
                        <h1>{{ slotProps.img }}</h1>
                    </template>
                `
      }
    })

    const text = await screen.findByText('some image')
    expect(text).toBeInTheDocument()
  })

  it('provids title to parent component', async () => {
    const spotLight = {
      title: 'Another title'
    }
    mockSpotLightsRender(spotLight)

    render(SpotLight, {
      slots: {
        default: `
                    <template #default="slotProps">
                        <h1>{{ slotProps.title }}</h1>
                    </template>
                `
      }
    })

    const title = await screen.findByText('Another title')
    expect(title).toBeInTheDocument()
  })

  it('provids description to parent component', async () => {
    const spotLight = {
      description: 'Another description'
    }
    mockSpotLightsRender(spotLight)
    render(SpotLight, {
      slots: {
        default: `
                    <template #default="slotProps">
                        <h1>{{ slotProps.description }}</h1>
                    </template>
                `
      }
    })

    const description = await screen.findByText('Another description')
    expect(description).toBeInTheDocument()
  })
})
