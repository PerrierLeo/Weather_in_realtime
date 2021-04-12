<template>
  <div>
    <p>temperature : {{ temperature }}</p>
    <p>temperature ressenti : {{ tempressenti }}</p>
    <p>temperature min : {{ tempmin }}</p>
    <p>temperature max : {{ tempmax }}</p>
    <p>humidité : {{ humidity }}</p>
  </div>
</template>

<script>
export default {
  name: "cardmeteomain",
  props: ["temperature", "tempressenti", "tempmin", "tempmax", "humidity"],
};
</script>
<style></style>
