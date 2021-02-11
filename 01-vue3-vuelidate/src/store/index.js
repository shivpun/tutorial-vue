import { createStore } from 'vuex'
import { required } from '@vuelidate/validators'

export default createStore({
  state: {
    apiErrorResponse: {
      firstName: {
        $isValid: true,
        $message: ''
      },
      contacts: []
    },
    apiSchema: {
      firstName: {
        required
      },
      contacts: []
    }
  },
  getters: {
    fetchApiErrorResponse (state) {
      return state.apiErrorResponse
    },
    fetchApiSchema (state) {
      return state.apiSchema
    },
    fetchContactRule (state) {
      return state.apiSchema.contacts
    }
  },
  mutations: {
    SAVE_CONTACT_API_RESPONSE (state, apiResponse) {
      state.apiErrorResponse.contacts = apiResponse
    },
    SAVE_CONTACT_API_SCHEMA (state, contactSchemas) {
      state.apiSchema.contacts = contactSchemas || []
    },
    UPDATE_CONTACT_API_SCHEMA (state, contacts) {
      state.apiSchema.contacts[contacts.index] = contacts.contact
    }
  },
  actions: {
    generateApiSchema (context, contacts) {
      console.log(contacts)
      const contactSchema = []
      for (let i = 0; i < contacts.length; i++) {
        contactSchema.push({
          mobileNumber: {
            $isValid: true,
            $message: ''
          }
        })
      }
      context.commit('SAVE_CONTACT_API_RESPONSE', contactSchema)
    },
    generateContactSchema (context, contactRules) {
      console.log(contactRules)
      context.commit('SAVE_CONTACT_API_SCHEMA', contactRules)
    },
    updateContactSchema (context, contacts) {
      console.log(contacts)
      context.commit('UPDATE_CONTACT_API_SCHEMA', contacts)
    }
  },
  modules: {
  }
})
