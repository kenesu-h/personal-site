<script setup lang="ts">
import NeofetchPrompt from "./NeofetchPrompt.vue";
</script>

<template>
  <div class="terminal-window">
    <div class="title-bar">
      <div class="tab">
        <font-awesome-icon icon="fa-solid fa-terminal" />
        &nbsp; Terminal
      </div>
      <div class="controls">
        <!-- TODO: These are just for decoration, for now at least -->
        <div class="minimize">
          <font-awesome-icon icon="fa-solid fa-window-minimize" />
        </div>
        <div class="maximize">
          <font-awesome-icon icon="fa-solid fa-window-maximize" />
        </div>
        <div class="close">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </div>
      </div>
    </div>
    <div class="client-area">
      <NeofetchPrompt />
      <!-- TODO: Maybe extend the prompt to take in actual commands -->
      <!--
        <div>&nbsp;</div>
        <div class="prompt">
          <span class="prompt-green">❯</span>
          <input type="text" />
        </div>
      -->
    </div>
  </div>
</template>

<style scoped>
.terminal-window {
  display: flex;
  flex-direction: column;
  background-color: #333333;
  font-size: 14px;
  text-align: left;

  box-sizing: border-box;
  max-width: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  border-color: #3f4148;
}

.title-bar {
  display: flex;
  flex-direction: row;
  height: 32px;
}

.tab {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: #24273a;

  width: 33%;
  margin-left: 8px;
  padding: 16px;
  border-top-left-radius: 10px 10px;
  border-top-right-radius: 10px 10px;
}

.controls {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}

.controls div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 32px;
}

.controls div:last-child {
  border-top-right-radius: 10px 10px;
}

.client-area {
  display: flex;
  flex-direction: column;
  background-color: #24273a;

  height: 100%;
  padding: 8px;
  border-bottom-left-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
}

.prompt {
  display: flex;
  flex-direction: row;
  gap: 1ch;
}

.prompt input {
  display: inline-block;
  background-color: transparent;

  width: 100%;
  border: none;
}

.prompt input:focus {
  outline: none;
}
</style>
