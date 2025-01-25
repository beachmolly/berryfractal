<template>
    <div>
        <h1>Welcome to BerryFractal</h1>
        <FractalCanvas />
        <ControlsPanel />
    </div>
</template>

<script>
import FractalCanvas from '../components/FractalCanvas.vue';
import ControlsPanel from '../components/ControlsPanel.vue';

export default {
    name: 'HomePage',
    components: {
        FractalCanvas,
        ControlsPanel
    }
}
</script>

<style scoped>
/* Add page-specific styles here */
</style> 