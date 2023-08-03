import nextElementInList from '@/utils/nextElementinList.js';

describe('nextElementInList', () => {
    it('Locates element in list and returns the next element in list', () => {
        const list = ['A', 'B', 'C', 'D', 'E'];
        const element = 'C';
        const result = nextElementInList(list, element);
        expect(result).toBe('D'); 
    });
    describe('when element is last in list', () => {
        it('locates next element at start of list', () => {
            const list = ['A', 'B', 'C', 'D', 'E'];
            const element = 'E';
            const result = nextElementInList(list, element);
            expect(result).toBe('A');
        });
    });
});