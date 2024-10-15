import { onMounted, onUnmounted } from "vue";

export function useEvenListener(target, eventType, callBack) {
    onMounted(() => {
        target.addEventListener(eventType, callBack);
    });

    onUnmounted(() => {
        target.removeEventListener(eventType, callBack);
    });
}