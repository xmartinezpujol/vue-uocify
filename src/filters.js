import Vue from "vue";

Vue.filter("songDuration", seconds => {
    const format = val => `0${Math.floor(val)}`.slice(-2);
    const minutes = (seconds % 3600) / 60;
    return [minutes, seconds % 60].map(format).join(':');
});

Vue.filter("numberDots", number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});
