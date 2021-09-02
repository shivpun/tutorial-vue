<template>
  <span>{{ propsMethod() }}</span
  ><br />
  <ChildA></ChildA>
</template>

<script>
import ChildA from "@/components/Child1.vue";

export default {
  name: "HelloWorld",
  components: {
    ChildA,
  },
  inject: ["propsMethod"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
