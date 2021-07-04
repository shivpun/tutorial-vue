import AutoComplete from "@/components/auto-complete/AutoComplete.vue";
import { ref } from "vue";
import { filterText } from "../../utils/filter";

export default {
  name: "Sample",
  components: {
    AutoComplete,
  },
  data() {
    const searchText = ref("");
    const results = ref([]);
    const filterResults = ref([]);
    return {
      filterResults,
      searchText,
      results,
    };
  },
  methods: {
    onSelect: function (value) {
      console.log("onSelect | method");
      this.searchText = value;
    },
    onSelectq: function (value) {
      console.log("onSelectq | method");
      this.searchText = value;
    },
    onSearch: function (value) {
      console.log("onSearch | method");
      this.searchText = value;
    },
    handleInput: function (value) {
      Object.assign(this.filterResults, filterText(value, this.results));
      this.searchText = value;
    },
  },
};
