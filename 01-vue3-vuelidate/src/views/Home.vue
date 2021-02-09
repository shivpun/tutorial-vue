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
        <ul class="invalid-tooltip" v-if="$v.userForm.firstName.$error">
          <li v-for="(error, index) in $v.userForm.firstName.$errors" :key="index">
            {{error.$message}}
          </li>
        </ul>
      </div>
      <div class="col-lg-12 position-relative">
        <button class="btn btn-primary" @click="handleClick">Submit for Validate</button>
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
      apiResponse: {
        firstName: {
          $isValid: false,
          $message: ''
        }
      },
      userForm: {
        firstName: ''
      }
    }
  },
  apiServiceValidator (response, vals = undefined) {
    return new Proxy(response, {
      set: function (obj, prop, value) {
        console.log('ApiService Proxy set | obj: ' + obj + ' | prop: ' + prop)
        obj[prop] = value
        return true
      },
      get: function (obj, prop) {
        console.log('ApiService Proxy get | obj: ' + obj + ' | prop: ' + prop)
        return obj[prop].$isValid
      }
    })
  },
  apiResponseMessage (response) {
    return new Proxy(response, {
      set: function (obj, prop, value) {
        console.log('ApiResponseMessage Proxy set | obj: ' + obj + ' | prop: ' + prop)
        obj[prop] = value
        return true
      },
      get: function (obj, prop) {
        console.log('ApiResponseMessage Proxy get | obj: ' + obj + ' | prop: ' + prop)
        return obj[prop].$message
      }
    })
  },
  validations () {
    console.log('[Home.vue] validations function or object')
    return {
      userForm: {
        firstName: {
          required,
          apiValidator: {
            $validator: (value) => this.$options.apiServiceValidator(this.apiResponse, value).firstName,
            $message: () => this.$options.apiResponseMessage(this.apiResponse).firstName
          },
          minLength: minLength(6)
        }
      }
    }
  },
  methods: {
    handleClick: function () {
      this.apiResponse.firstName.$isValid = true
      this.apiResponse.firstName.$message = 'Api Error found'
      this.$v.userForm.firstName.$touch()
    }
  }
}
</script>
