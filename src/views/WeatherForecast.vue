<template>
  <main>
    <section class="weather-app">
      <h1 class="visually-hidden">Weather forecast</h1>
      <div class="weather-app__content weather-content">
       <section class="sort-form weather-content__sort">
          <h2 class="visually-hidden">Sort form</h2>
          <sort-form @on-city-entered="getWeather"></sort-form>
       </section>
        <section class="weather-content__result">
          <h2 class="visually-hidden">Search result</h2>
          <div class="weather-content__small-cards">
            <small-card></small-card>
          </div>
        </section>
      </div>
      <div class="weather-app__map weather-map">
        <span class="pin pin--temporarily"></span>
      </div>

    </section>
  </main>
</template>

<script>
import SmallCard from "@/components/SmallCard";
import SortForm from "@/components/SortForm";
import WeatherService from "@/services/weatherService";

export default {
  name: 'WeatherForecast',
  components: {
    SortForm,
    SmallCard
  },

  methods: {
    getWeather(city) {
      WeatherService.getWeather(city)
        .then(result => {
          console.log("City Found => ", result)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.weather-app {
  display: flex;
  width: 100%;
  min-width: 1080px;
  height: 100vh;
  min-height: 880px;
  overflow: hidden;
}

.weather-app__content {
  position: relative;
  z-index: 1;

  flex-shrink: 0;
  width: 712px;
  height: 100vh;
  min-height: 880px;
  overflow: hidden;

  background: var(--color-blue-lightest);
  box-shadow: 0 0 40px rgba(11, 23, 78, 0.5);
}

.weather-app__map {
  flex-grow: 1;
  width: auto;
  height: 100%;
}



.weather-content__result {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2px 4px 0 4px;
}

.weather-content__small-cards,
.weather-content__big-cards {
  width: calc(50% - 2px);
  height: 100%;
  padding-bottom: 100px;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
}

.weather-content__small-cards::-webkit-scrollbar,
.weather-content__big-cards::-webkit-scrollbar {
  display: none;
}

.weather-content__small-cards > div,
.weather-content__big-cards > div {
  margin-bottom: 2px;
}

.weather-content__small-cards > div:last-child,
.weather-content__big-cards > div:last-child {
  margin-bottom: 80px;
}

.weather-content__big-cards {
  position: relative;
  z-index: 1;
}

.weather-content__help {
  position: absolute;
  top: 56px;
  left: 0;
  z-index: -1;

  width: 100%;
  padding-right: 65px;
  padding-left: 65px;

  line-height: 32px;
  text-align: center;
  color: var(--color-text-help);
}

.weather-content__sort .sort-form__group:nth-child(1) {
  width: 82px;
}

.weather-content__sort .sort-form__group:nth-child(1) div:nth-child(2n) {
  margin-right: 0;
}

.weather-content__sort .sort-form__group:nth-child(3) {
  width: 292px;
}

.weather-content__sort .sort-form__group:nth-child(3) div:nth-child(7n) {
  margin-right: 0;
}

</style>
