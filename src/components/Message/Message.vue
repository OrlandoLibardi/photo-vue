<template id="message-template">
  <div v-if="messageTitle" class="message-alert">
    <section>
      <header>
        <h1>{{ messageTitle }}</h1>
      </header>
      <main v-if="messageText">
        <p>{{ messageText }}</p>
      </main>
      <footer>
        <button :class="this.$props.btnCss" @click="hidden">{{ messageConfirmText }}</button>
      </footer>      
    </section>
  </div>
</template>
<script src="./Message.js"></script>
<style src="./Message.css"></style>