const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      headerLinks: ["HOME", "ABOUT", "SERVICES", "WORK", "ARTICLES"],
      contactCol: [
        {
          icon: "fa-solid fa-globe",
          text: "Corporate Location 1600 Amphitheatre Park London WC11BA",
        },

        {
          icon: "fa-solid fa-house-chimney",
          text: "Residential Location 9521 Broadsberry Road Paddington WC11BA",
        },

        {
          icon: "fa-solid fa-phone-flip",
          text: "3994.3894/28.298.32490",
        },

        {
          icon: "fa-regular fa-envelope",
          text: "info@your-domain.com",
        },

        {
          icon: "fa-regular fa-clock",
          text: "Monday - Friday: 9:00 AM - 6:00 PM",
        },

        {
          icon: "fa-regular fa-clock",
          text: "Saturday - Sunday: 9:00 AM - 12:00 AM",
        },
      ],
    };
  },
});

app.mount("#app");
