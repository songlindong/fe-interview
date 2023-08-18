import { activeEffect } from "./effect"
export function reactive(params) {
  const proxyObj = new Proxy(params, {
    get(target, property, receiver) {
      return Reflect.get(target, property, receiver)
    },
    set(target, property, receiver) {
      return Reflect.set(target, property, receiver)
      },
    deleteProperty(target, propertyKey) {
      return Reflect.deleteProperty(target, propertyKey)
    }
    })
    return proxyObj
  }