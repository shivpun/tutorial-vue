<template>
  <div class="container-fluid mx-3 my-3">
    <input
      v-if="!url"
      type="file"
      ref="fileInput"
      @change.prevent="fileSelected"
    />
    <div class="row">
      <div class="col-6 col-md-4">
        <div class="card shadow-sm" v-if="url">
          <div class="card-title card-img-overlay">
            <button class="btn" @click="abc">X</button>
          </div>
          <div class="text-center">
            <img :src="url" class="card-img-top" width="250" height="250" />
          </div>
        </div>
      </div>
    </div>
    <button @click.prevent="upload">Upload</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      selectedFile: "",
      displayFile: "",
      url: "",
    };
  },
  methods: {
    fileSelected() {
      this.selectedFile = this.$refs.fileInput.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
      console.log("file has been selected:");
    },
    abc() {
      this.url = "";
      this.selectedFile = "";
    },
    upload() {
      let formData = new FormData();
      formData.append("file", this.selectedFile);
      axios
        .post("http://localhost:8080/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
