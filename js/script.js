// "https://picsum.photos/200/300";
const { createApp } = Vue;
const app = createApp({

  data() {

    return {
      greetingText: "ciao user",
      img: "https://picsum.photos/200/300",
    }

  },


});

app.mount("#app")