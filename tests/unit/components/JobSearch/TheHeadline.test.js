import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import TheHeadline from '@/components/JobSearch/TheHeadline.vue'

describe('TheHeadline', () => {
    // describe('vites playground', () => {
    //     it('tracks wether it has been called', () => {
    //         const mockFunction = vitest.fn();
    //         mockFunction(1, 2, 3);
    //         expect(mockFunction).toHaveBeenCalledWith(1, 2, 3);
    //     })
    // })
    beforeEach(() => {
        vi.useFakeTimers(); // use fake timers
    })

    afterEach(() => {
        vi.useRealTimers(); // use real timers
    })


    it('displays introduction action verb', () => {
        render(TheHeadline)
        const actionPhrase = screen.getByRole('heading', { 
            name: /build for everyone/i
        })
        expect(actionPhrase).toBeInTheDocument()
    })

    it('change action verb at a consistent interval', () => {
        const mock = vi.fn(); // mock function
        vi.stubGlobal('setInterval', mock); // stub the global setInterval function

        render(TheHeadline)

        expect(mock).toHaveBeenCalledTimes(1); // check if setInterval has been called once
    })

    it('swaps action verb after interval', async () => {
        render(TheHeadline)
        vi.advanceTimersToNextTimer(); // advance the timer to the next timer
        await nextTick(); // wait for the next tick
        const actionPhrase = screen.getByRole('heading', { 
            name: /create for everyone/i
        })
        expect(actionPhrase).toBeInTheDocument()
    })
    
    it('removes interval when component is unmounted', () => {
        const clearInterval = vi.fn();
        vi.stubGlobal('clearInterval', clearInterval);
        const { unmount } = render(TheHeadline)
        unmount();
        expect(clearInterval).toHaveBeenCalledTimes(1);
        vi.unstubAllGlobals();
    })
})