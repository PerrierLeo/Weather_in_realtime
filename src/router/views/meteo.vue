<template>
  <div class="content">
    <cardmeteo
      :situation="tabmeteeo.weather[0].description"
      :image="
        'http://openweathermap.org/img/wn/' +
          tabmeteeo.weather[0].icon +
          '@2x.png'
      "
      :temperature="tabmeteeo.main.temp"
      :tempressenti="tabmeteeo.main.feels_like"
      :tempmax="tabmeteeo.main.temp_max"
      :tempmin="tabmeteeo.main.temp_min"
      :humidity="tabmeteeo.main.humidity"
      :lieu="tabmeteeo.name"
    />
  </div>
</template>

<script>
import cardmeteo from "../../components/cardmeteo.vue";

export default {
  name: "meteo",
  components: { cardmeteo },
  data: () => ({
    tabmeteeo: [{}],
  }),

  mounted: async function() {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Nice,fr&lang=fr&units=metric&appid=800e66f591cecddfd9f7ef4d371b75e1",
      { method: "GET" }
    );

    const data = await response.json();

    this.tabmeteeo = data;
  },
};
</script>
<style scoped>
.content {
  height: 100vh;
}
</style>
