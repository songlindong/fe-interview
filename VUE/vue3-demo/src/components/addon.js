import {
    reactive
} from 'vue'

export default function addon() {
    const msg = 'i am addon';
    const obj = {}

    return {
        msg,
        obj
    }
}