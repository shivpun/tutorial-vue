<template>
  <div>
    <transition name="v">
      <div v-if="show">
        <span v-for="item in items" :key="item" class="list-item">
          {{ item }}
        </span>
      </div>
    </transition>
    <br />
    <br />
    Hello World
    <button @click="show = !show">Toggle</button>

    <component
      :is="tag"
      class="badge"
      :class="[
        `badge-${type}`,
        rounded ? `badge-pill` : '',
        circle && 'badge-circle',
      ]"
    ></component>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    tag: {
      type: String,
      default: "span",
      description: "Html tag to use for the badge.",
    },
    rounded: {
      type: Boolean,
      default: false,
      description: "Whether badge is of pill type",
    },
    circle: {
      type: Boolean,
      default: false,
      description: "Whether badge is circle",
    },
    icon: {
      type: String,
      default: "",
      description: "Icon name. Will be overwritten by slot if slot is used",
    },
    type: {
      type: String,
      default: "default",
      description: "Badge type (primary|info|danger|default|warning|success)",
    },
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      show: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
</style>
