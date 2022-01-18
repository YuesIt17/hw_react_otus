import { prepareInput } from './prepareInput'

describe('Correct tests for prepare', () => {
    test('4 + 2 * 3 / 2 - 1', () => {
        expect(prepareInput('4 + 2 * 3 / 2 - 1')).toBe(6)
    })

    test('40 - 10 * 3 + 12 / 3', () => {
        expect(prepareInput('40 - 10 * 3 + 12 / 3')).toBe(14)
    })

    test('2 + 2 / 3 * 5', () => {
        expect(prepareInput('2 + 2 / 3 * 5')).toBe(5.35)
    })
})
