import { reactive } from 'vue'

window.addEventListener('resize', () => {
    store.windowWidth = window.innerWidth;
    store.windowHeight = window.innerHeight;
});

export const store = reactive({
    api_key: 'efba5bccfed5d290949e4e924727ab0b',
    movieSearched: { results: [] },
    tvSeriesSearched: { results: [] },
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
})