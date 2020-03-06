<template>
  <div id="app">
    <message></message>
    <photo accept="image/gif" preview="true"></photo>    
  </div>
</template>
<script>
import Photo from './components/Photo/Photo.vue'
import Message from './components/Message/Message.vue'
export default {
  name: 'App',
  components: {
    Photo,
    Message
  }
}
</script>

