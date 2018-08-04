import DeepProxy from '../src/DeepProxy'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DeepProxy()).toBeInstanceOf(DeepProxy)
  })
})
