import { deepProxy } from '../src/deepProxy'

describe('deepProxy', () => {
  it('recursively wraps', () => {
    const a = { b: { c: 1 } }
    const p = deepProxy(a, {
      get(o, k) {
        return o[k] ? o[k] : 2
      },
    })
    expect(p).toEqual(a)
    expect(p.b).toEqual(a.b)
    expect(p.b.c).toBe(1)
    expect((p.b as any).d).toBe(2)
  })

  it('caches proxies', () => {
    const o = {}
    const h = {}
    expect(deepProxy(o, h)).toBe(deepProxy(o, h))
  })
})
