const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      headerLinks: ["HOME", "ABOUT", "SERVICES", "WORK", "ARTICLES"],
    };
  },
});

app.mount("#app");
