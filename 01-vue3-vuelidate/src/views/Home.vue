<template>
  <div class="container">
    <div class="row g-3 needs-validation">
      <div class="col-lg-12">
        <h2>Input field validation based on button click</h2>
      </div>
      <div class="col-lg-6 position-relative">
        <input
          type="text"
          class="form-control"
          :class="[$v.userForm.firstName.$error ? 'is-invalid': '']"
          v-model="userForm.firstName"
        />
        <div class="invalid-tooltip" v-for="(error, index) in $v.userForm.firstName.$errors" :key="index">
          {{error.$message}}
        </div>
      </div>
      <div class="col-lg-12 position-relative">
        <button class="btn btn-primary" @click="$v.userForm.firstName.$touch()">Submit for Validate</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { required, minLength } from '@vuelidate/validators'

export default {
  name: 'Home',
  data () {
    console.log('[Home.vue] Data function or object')
    return {
      userForm: {
        firstName: ''
      }
    }
  },
  validations () {
    console.log('[Home.vue] validations function or object')
    return {
      userForm: {
        firstName: {
          required,
          minLength: minLength(6)
        }
      }
    }
  }
}
</script>
