<template>
  <span>Child1: {{ propsMethod() }}</span
  ><br />
</template>

<script>
export default {
  name: "Child1",
  inject: ["propsMethod"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
