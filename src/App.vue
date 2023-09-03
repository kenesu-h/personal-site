<script setup lang="ts">
import TerminalWindow from "./components/TerminalWindow.vue";
</script>

<template>
  <img
    class="background-image"
    onload="this.style.opacity=0.33"
    src="./assets/images/background.png"
  />
  <TerminalWindow />
</template>

<style>
/* Catppuccino Macchiato colors */
.black {
  color: #494d64;
}

.red {
  color: #ed8796;
}

.green {
  color: #a6da95;
}

.prompt-green {
  color: #55ba09;
}

.yellow {
  color: #eed49f;
}

.blue {
  color: #8aadf4;
}

.background-blue {
  background-color: #8aadf4;
}

.purple {
  color: #f5bde6;
}

.cyan {
  color: #8bd5ca;
}

.white {
  color: #b8c0e0;
}

.background-white {
  background-color: #b8c0e0;
}

.bright-black {
  color: #5b6078;
}

.bright-white {
  color: #a5adcb;
}
</style>
