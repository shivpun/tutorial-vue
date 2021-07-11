import { ref } from "vue";
import { fetchName } from "@/utils/filter";
import { isArray } from "@/utils/filter";

export default {
  name: "dropdown",
  props: {
    label: {
      type: String,
      default: "Search",
    },
    debounce: {
      type: Number,
      default: 1000,
    },
    max: {
      type: Number,
      default: 10,
    },
    searchText: {
      type: [String, Object],
      default: "",
    },
    errorMessages: {
      type: Array,
      default: () => [],
    },
    results: {
      type: Array,
      default: () => [],
    },
    displayItem: {
      type: Function,
      default: (item) => fetchName(item),
    },
    displayErrorMessage: {
      type: Function,
      default: (err) => fetchName(err),
    },
  },
  emits: ["onInput", "onSelect", "onSearch", "onInputApiCall"],
  setup(props, context) {
    console.log("Vue 3 setup !!" + props + " | context" + context);
    const showResults = ref(true);
    return {
      showResults,
    };
  },
  data() {
    console.log("Vue 3 data !!");
    return {
      middleNotch: 0,
      leadingNotch: 9,
      dropdownItemWidth: 250,
      isFocus: false,
      timeout: undefined,
    };
  },
  mounted() {
    /*
      https://stackoverflow.com/questions/54355375/vue-js-refs-are-undefined-even-though-this-refs-shows-theyre-there
      A. Make sure your component is not imported dynamically
      Use:
      import CustomComponent from './CustomComponent ';
      export default {
        components: {
          CustomComponent,
        },
      }
      Instead of:
      export default {
        components: {
          CustomComponent: () => import('./CustomComponent'),
        },
      }

      B. Use this.$refs.mapRef in mounted() instead of created().

      C. Use v-show instead of v-if on field where we have ref="labelRefId".
    */
    this.middleNotch = this.$refs.labelRefId.clientWidth * 0.8 + 8;
    this.dropdownItemWidth =
      this.$refs.dropdownInputGroupRefId.clientWidth +
      this.$refs.dropdownButtonRefId.clientWidth;
  },
  computed: {
    searchTextLength() {
      console.log("data | searchTextLength");
      if (this.searchText === undefined || this.searchText === "") {
        return false;
      }
      return this.searchText.length > 0;
    },
    filteredResults() {
      const responseFlag = isArray(this.$props.results);
      if (responseFlag) {
        return this.$props.results.slice(0, this.$props.max);
      }
      return ["No Data Found"];
    },
    shouldShowResults() {
      return this.showResults && isArray(this.$props.results);
    },
    isValid() {
      return !isArray(this.errorMessages);
    },
  },
  methods: {
    onFocus: function () {
      this.isFocus = true;
      this.showResults = true;
    },
    onBlur: function () {
      this.isFocus = false;
      this.showResults = false;
    },
    onInput: function (event) {
      this.$emit("onInput", event.target.value);
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }
      this.timeout = setTimeout(() => {
        this.$emit("onInputApiCall");
      }, this.$props.debounce);
    },
    clickItem: function (item) {
      this.showResults = false;
      if (item) {
        this.$emit("onSelect", item);
      }
    },
  },
};
