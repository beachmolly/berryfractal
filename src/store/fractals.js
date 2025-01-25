import { reactive } from 'vue';

export const state = reactive({
    fractalSettings: {
        type: 'Mandelbrot',
        iterations: 100,
        zoom: 1,
        colors: ['#000000', '#FFFFFF']
    }
});