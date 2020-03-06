<template id="photo-template">
  <div class="input-file">
    <img v-if="preview" :src="loaded" alt="">
    <div v-if="file">
      <button type="button" class="btn btn-success btn-100" @click="clear">
        <span class="middle">{{file.name}}</span>
        <span class="close">x</span>
      </button>
    </div>
    <div v-else>
      <button
        @click="$event.target.nextElementSibling.click()"
        class="btn btn-info"
        style="display: inline-block;"
      >Selecione uma imagem</button>
      <input type="file" @change="onChange" />
    </div>
  </div>
</template>
<script src="./Photo.js"></script>
<style src="./Photo.css"></style>