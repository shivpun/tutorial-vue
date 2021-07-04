import { ref, computed } from "vue";
import { isEmptyText } from "../../utils/filter";
export default {
  name: "AutoComplete",
  props: {
    debounce: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 10,
    },
    searchText: {
      type: String,
      default: "",
    },
    results: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "Search Box",
    },
    displayItem: {
      type: Function,
      default: (item) => {
        return typeof item === "string" ? item : item.name;
      },
    },
  },
  emits: ["input", "onSelect", "onSearch"],
  setup(props, context) {
    const autocompleteRef = ref();
    const showResults = ref(true);
    let timeout;
    const filteredResults = computed(() => {
      return props.results.slice(0, props.max);
    });
    function searchTextObj(value) {
      if (!value || !props.searchText) {
        return "";
      }
      return props.searchText[value];
    }
    function clickItem(data) {
      context.emit("onSelect", data);
      this.showResults = false;
    }
    function displayResults() {
      this.showResults = true;
    }
    function handleInput(event) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        context.emit("input", event.target.value);
      }, props.debounce);
    }
    function onSearchText() {
      console.log("onSearchText");
      if (this.enableSearchButton) {
        console.log("onSearchText enableSearchButton");
        context.emit("onSearch", props.searchText);
      }
    }
    function hideResults() {
      this.showResults = !false;
    }
    const shouldShowResults = computed(() => {
      console.log(showResults.value + " | " + props.results.length);
      return showResults.value && props.results.length > 0;
    });
    const searchTextExist = computed(() => {
      return !isEmptyText(props.searchText);
    });
    const enableSearchButton = computed(() => {
      return (
        !isEmptyText(props.searchText) &&
        props.results &&
        props.results.filter(
          (target) => props.searchText.toLowerCase() == target.toLowerCase()
        ).length === 1
      );
    });
    return {
      autocompleteRef,
      clickItem,
      displayResults,
      filteredResults,
      handleInput,
      hideResults,
      searchTextObj,
      showResults,
      searchTextExist,
      shouldShowResults,
      onSearchText,
      enableSearchButton,
    };
  },
};
