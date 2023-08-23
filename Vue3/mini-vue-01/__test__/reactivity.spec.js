import { reactive } from '../src/reactivity/reactive'
import { effect } from '../src/reactivity/effect'

describe('reactivity', () => {
  test('reactive()', () => {
    const original = {foo: 'foo'}
    const observed = reactive(original)
    observed.foo = 'foo~~~'
    expect(original.foo).toBe('foo~~~')
    observed.bar = 'bar'
    expect(original.bar).toBe('bar')
    delete observed.bar
    expect(original.bar).toBe(undefined)
  });
  it("effect", () => {
    let dummy;
    const counter = reactive({ num: 0 });
    const fnSpy = jest.fn(() => {
      // 赋值
      dummy = counter.num;
    });
    // 依赖收集过程， 立即执行依次spy函数
    // 读取一次spy函数内部的响应式数据
    effect(fnSpy);
    expect(fnspy).toHaveBeenCalledTimes(1);
    expect(dummy).toBe(0);

    counter.num = 1; 
    expect(fnSpy).toHaveBeenCalledTimes(2);
    expect(dummy).toBe(1);

  })
});