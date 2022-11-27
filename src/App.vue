<template>
  <weather-forecast></weather-forecast>
</template>

<script>
import WeatherForecast from "@/views/WeatherForecast";

export default {
  name: 'App',
  components: {
    WeatherForecast
  }
}
</script>

<style>
@import url("assets/css/style.css");
</style>
