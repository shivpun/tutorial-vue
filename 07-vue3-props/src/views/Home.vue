<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
    <input type="text" v-model="names" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  provide() {
    return {
      propsMethod: () => this.names,
      propsProperty: this.name
    };
  },
  data() {
    return {
      names: "",
    };
  },
};
</script>
