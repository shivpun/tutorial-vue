<template>
<div class="col-lg-12 position-relative">
  <label class="form-label">Mobile Number</label>
  <input
    type="text"
    class="form-control"
    :class="[v.mobileNumber.$error ? 'is-invalid': '']"
    :value="value"
    :index="index"
    @input="handleInput"
    @blur="v.mobileNumber.$touch()"
  />
  <ul class="invalid-tooltip" v-if="v.mobileNumber && v.mobileNumber.$error">
    <li
      v-for="(error, index) in v.mobileNumber.$errors" :key="index">
      {{error.$message}}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: -1
    },
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
      console.log(this.v.mobileNumber.$error)
      console.log(this.v.mobileNumber.$errors)
      this.v.mobileNumber.$touch()
      console.log('[ContactListComponent] handleInput: ' + this.value)
      if (!this.v.mobileNumber.error) {
        this.$emit('input', event.target.value, this.index)
      }
    }
  }
}
</script>

<style>

</style>
