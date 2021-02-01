<template>
<div class="col-lg-6 position-relative">
    <label class="form-label">First Name</label>
    <input
        type="text"
        class="form-control"
        :value="value"
        :class="[v.$error ? 'is-invalid': '']"
        @input="handleInput"
        @blur="v.$touch()"
    />
    <div class="invalid-tooltip"
        v-for="(error, index) in v.$errors" :key="index">
        {{error.$message}}
    </div>
</div>
{{v}}
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    v: {
      type: Object,
      required: true
    }
  },
  emits: [
    'input'
  ],
  methods: {
    handleInput: function (event) {
      console.log('[FirstNameComponent] handleInput: ' + this.value)
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style>

</style>
