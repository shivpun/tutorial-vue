<template>
<div class="container">
  <div class="row g-3 needs-validation">
    <FirstNameComponent
      :value="userForm.firstName"
      :v="$v.userForm.firstName"
      @input="onInputFirstName"
    ></FirstNameComponent>
    <template v-if="userForm.contacts.length > 0">
      <ContactListComponent
        v-for="(contact, index) in userForm.contacts" v-bind:key="index"
        :value="contact.mobileNumber"
        :index="index"
        :v="$v.userForm?.contacts[index]"
        @input="onInputContact"
      ></ContactListComponent>
    </template>
    <div class="col-lg-6 position-relative">
      <button
      class="btn btn-primary"
      @click="handleClick"
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
import { mapActions, mapGetters, mapMutations } from 'vuex'

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
        contacts: this.fetchContactRule
      }
    },
    ...mapGetters([
      'fetchApiErrorResponse',
      'fetchApiSchema',
      'fetchContactRule'
    ])
  },
  methods: {
    ...mapActions([
      'generateApiSchema',
      'generateContactSchema',
      'updateContactSchema'
    ]),
    ...mapMutations({
      saveContactSchema: 'SAVE_CONTACT_API_SCHEMA' // map `this.add()` to `this.$store.commit('increment')`
    }),
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
      this.generateApiSchema(this.userForm.contacts)
      const contactRules = this.createContactSchema()
      this.generateContactSchema(contactRules)
    },
    createContactSchema () {
      const contactResponse = this.fetchApiErrorResponse.contacts
      const contactRules = []
      for (let i = 0; i < contactResponse.length; i++) {
        const contactSchema = Object.assign({}, this.$options.validationSchema().$contact)
        for (const [key, obj] of Object.entries(contactSchema)) {
          if (obj && (!obj.$validator || !obj.$message)) {
            const validatorFn = this.$options.apiValidators(contactResponse[i])
            const validatorMsgFn = this.$options.apiResponseMsg(contactResponse[i])
            const CreateValidator = function (key, response, validatorFn, ValidatorMsgFn) {
              return {
                $validator: (value) => validatorFn(value)[key],
                $message: () => validatorMsgFn()[key]
              }
            }
            contactSchema[key].apiValidator = new CreateValidator(key, contactResponse[i], validatorFn, validatorMsgFn)
          }
        }
        contactRules.push(contactSchema)
      }
      return contactRules
    },
    handleClick () {
      console.log('Handle Click')
      const contacts = this.fetchApiErrorResponse.contacts[0]
      contacts.mobileNumber.$isValid = false
      contacts.mobileNumber.$message = 'API Error Response'
      // this.updateContactSchema({ contact: contacts, index: 0 })
      this.$v.userForm.$touch()
    }
  },
  apiValidators: (response) => (values) => {
    return new Proxy(response, {
      set: function (obj, prop, value) {
        obj[prop] = value || values
        return true
      },
      get: function (obj, prop) {
        console.log('[FormComponent] apiValidator | obj:' + JSON.stringify(obj) + ' | prop:' + prop)
        return obj[prop].$isValid
      }
    })
  },
  apiResponseMsg: (response) => () => {
    return new Proxy(response, {
      set: function (obj, prop, value) {
        obj[prop] = value
        return true
      },
      get: function (obj, prop) {
        console.log('[FormComponent] apiResponseMsg | obj:' + JSON.stringify(obj) + ' | prop:' + prop)
        return obj[prop].$message
      }
    })
  },
  setApiErrorResponse () {
    const errors = [{
      errorCode: 'company.accountNumber.MISSING',
      fieldName: 'accountNumber',
      errorMsg: 'Account Number missing'
    }]
    const apiMapping = {
      saveContact: {
        'company.accountNumber': 'contacts.idx.mobileNumber'
      }
    }
    for (let i = 0; i < errors.length; i++) {
      const error = errors[i]
      const codes = error.errorCode.split('.').slice(-1, 1)
      if (codes[codes.length - 1] === error.fieldName && codes.length > 1 && /^[0-9\s]*$/.test(codes[codes.length - 2])) {
        const fieldName = apiMapping.saveContact[codes[codes.length - 3]] || error.fieldName
        console.log(fieldName)
      }
    }
  }
}
</script>
