const app = Vue.createApp({
  data() {
    return {
      age: 21,
      name: 'Rahman Nurhidayat',
      srcImage: 'https://imgs.search.brave.com/2n1NWv01rFoO-lcvwfLYyvTXE_ORoUW5TSO7UaP4BgE/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS93/cmo1MDJYdUstdy9t/YXhyZXNkZWZhdWx0/LmpwZw'
    }
  },
  methods: {
    inFiveYearsHandler() {
      return this.age + 5
    },
    randomFavoriteNumber() {
      return Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    }
  }
});

app.mount("#assignment");
