<template>
  <section class="chat-window">
    <Header @isShowChatbox="isShowChatbox = $event"/>
    <Content :socket="socket" v-show="isShowChatbox" />
    <Input :socket="socket" />
  </section>
</template>
<script>

import Header from './Header'
import Content from './Content'
import Input from './Input'

export default {
  name: 'ChatWindow',
  data () {
    return {
      isShowChatbox: true
    }
  },
  props: ['socket'],
  components: {
    Header,
    Content,
    Input
  }
}
</script>

<style scope>
  .chat-window {
    height: 100%;
  }
</style>
