import { tuple } from 'tuplerone'

const cache = new WeakMap()

const isObject = (x: any): x is object =>
  (typeof x === 'object' && x !== null) || typeof x === 'function'

/**
 * Wrap an object and its values (that are also objects) with `Proxy`.
 */
export const deepProxy = <A extends object>(target: A, handler: ProxyHandler<A>): A => {
  const key = tuple(target, handler)
  let proxy = cache.get(key)
  if (!proxy) {
    proxy = new Proxy(new Proxy(target, handler), {
      get(obj, prop) {
        const value = (obj as any)[prop]
        if (isObject(value)) {
          return deepProxy(value, handler)
        }
        return value
      },
    })
    cache.set(key, proxy)
  }
  return proxy
}
