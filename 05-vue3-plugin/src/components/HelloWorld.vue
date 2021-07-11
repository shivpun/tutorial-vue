<template>
  <div class="container-fluid">
    <h1>Hello World</h1>
    <div class="row">
      <div class="col-lg-4">
        <dropdown
          :results="fetchApiResponse"
          :searchText="searchText"
          :displayItem="displayItem"
          :displayErrorMessage="displayItem"
          :errorMessages="fetchApiResponse"
          @onInputApiCall="onInputApiCall"
          @onInput="onInput"
        ></dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/dropdown/Dropdown.vue";
import useAxios from "@/composable/useAxios";
import { reactive, ref } from "vue";

export default {
  name: "HelloWorld",
  components: {
    Dropdown,
  },
  setup() {
    const response = reactive({
      response: {
        data: "",
        status: "",
        headers: {},
      },
      error: null,
      fetching: false,
    });
    const onInputApiCall = function () {
      console.log("onInputApiCall: ");
      const apiResponse = useAxios("/todos");
      response.response = apiResponse.response;
      response.error = apiResponse.error;
    };
    return {
      onInputApiCall,
      response,
    };
  },
  data() {
    return {
      searchText: "",
      results: ref([]),
    };
  },
  computed: {
    fetchApiResponse() {
      if (
        this.response &&
        this.response.response &&
        this.response.response.data
      ) {
        return this.response.response.data;
      }
      return [];
    },
  },
  methods: {
    displayItem: function (item) {
      console.log("displayITem: " + item);
      return typeof item === "string" ? item : item.title;
    },
    onInput: function (text) {
      this.searchText = text;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
