<template>
<div class="container">
  <div class="row g-3 needs-validation">
    <FirstNameComponent
      :value="userForm.firstName"
      :v="$v.userForm.firstName"
      @input="onInputFirstName"
    ></FirstNameComponent>
      <ContactListComponent
        v-for="(contact, index) in userForm.contacts" v-bind:key="index"
        :value="contact.mobileNumber"
        :index="index"
        :v="$v.userForm?.contacts[index]"
        @input="onInputContact"
      ></ContactListComponent>
    <div class="col-lg-6 position-relative">
      <button
      class="btn btn-primary"
      @click="$v.userForm.$touch()"
      >Verify</button>
    </div>
    <div class="col-lg-6 position-relative">
      <button
      class="btn btn-primary"
      @click="addContact()"
      >Add Contact</button>
    </div>
  </div>
</div>
</template>

<script>
import FirstNameComponent from '@/components/FirstNameComponent.vue'
import ContactListComponent from '@/components/ContactListComponent.vue'
import { required } from '@vuelidate/validators'

export default {
  components: {
    FirstNameComponent,
    ContactListComponent
  },
  data () {
    console.log('[FormComponent] data method')
    return {
      userForm: {
        firstName: '',
        contacts: []
      }
    }
  },
  validationMessage () {
    console.log('[FormComponent] validationMessage methods')
    return {
      firstName: {
        required: 'First Name is missing'
      }
    }
  },
  validationSchema () {
    console.log('[FormComponent] validationSchema methods')
    return {
      $contact: {
        mobileNumber: {
          required
        }
      },
      $firstName: {
        required
      }
    }
  },
  validations () {
    console.log('[FormComponent] validations methods')
    return {
      userForm: this.rules
    }
  },
  computed: {
    rules () {
      const contactsRules = []
      for (let i = 0; i < this.userForm.contacts.length; i++) {
        contactsRules.push(Object.assign({}, this.$options.validationSchema().$contact))
      }
      return {
        firstName: Object.assign({}, this.$options.validationSchema().$firstName),
        contacts: contactsRules
      }
    }
  },
  methods: {
    onInputFirstName (value) {
      console.log('[FormComponent] onInputFirstName with value: ' + value)
      this.userForm.firstName = value
    },
    onInputContact (value, index) {
      console.log('[FormComponent] onInputContact with value: ' + value + ' | ' + index)
      this.$v.userForm.contacts[index].mobileNumber.$touch()
      if (!this.$v.userForm.contacts[index].mobileNumber.error && index > -1) {
        this.userForm.contacts[index].mobileNumber = value
      }
    },
    addContact () {
      console.log('[FormComponent] addContact ')
      this.userForm.contacts.push({ mobileNumber: '' })
    }
  }
}
</script>
