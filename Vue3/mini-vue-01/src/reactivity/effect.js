export let activeEffect = null;
export function effect(fn) {
    fn();
    activeEffect = fn;
}