<style scoped>
.quill-editor-style{
  width: 100%;
  height: 100%;
}
</style>


<template>
  <div class="quill-editor-style">
    <quill-editor v-model="content" :options="editorOption"></quill-editor>
  </div>
</template>

<script>
export default {
  data(){
    return{
      content:'<h2>I am Example</h2>',
      editorOption:{

      }
    }
  }
}
</script>