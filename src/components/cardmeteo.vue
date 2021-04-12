<template>
  <div>
    <img :src="image" />

    <h2>{{ lieu }}</h2>
    <p>{{ situation }}</p>
    <p>Température : {{ temperature }}°C</p>
    <p>Ressenti : {{ tempressenti }}°C</p>
    <p>Température min : {{ tempmin }}°C</p>
    <p>Température max : {{ tempmax }}°C</p>
    <p>Humidité : {{ humidity }}%</p>
  </div>
</template>

<script>
export default {
  name: "cardmeteo",
  props: [
    "lieu",
    "image",
    "situation",
    "temperature",
    "tempressenti",
    "tempmin",
    "tempmax",
    "humidity",
  ],
};
</script>
<style scoped>
div {
  border: 1px solid black;
  box-shadow: 4px 5px 5px grey;
  width: 30vw;
  height: 60vh;
  margin: 10px;
  border-radius: 5px;
}
</style>
