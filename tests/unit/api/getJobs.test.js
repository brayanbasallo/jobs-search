import axios from 'axios'
import getJobs from '@/api/getJobs'

vi.mock('axios')

describe('getJobs', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Software Engineer'
        }
      ]
    })
  })
  it('fetches job that candidates can apply to', async () => {
    await getJobs()
    expect(axios.get).toHaveBeenCalledWith('http://test.mirealapi.com/jobs')
  })

  it('extracts jobs from response', async () => {
    const data = await getJobs()
    expect(data).toEqual([
      {
        id: 1,
        title: 'Software Engineer'
      }
    ])
  })
})
