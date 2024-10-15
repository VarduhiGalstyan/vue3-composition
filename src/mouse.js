import {onMounted, onUnmounted, ref} from 'vue';
import { useEvenListener } from './event';

export function useMouse() {
    const x = ref(null);
    const y = ref(null);

    function updatePosition(event) {
        x.value = event.pageX;
        y.value = event.pageY;
    }
    useEvenListener(window, 'mousemove', updatePosition);
    return{x, y};
}