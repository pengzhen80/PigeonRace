const { createApp } = Vue

const app = createApp({
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
            console.log(this.count);
        }
    },
    mounted() {
        // methods can be called in lifecycle hooks, or other methods!
        this.increment()
    }
});

app.mount('#app');


