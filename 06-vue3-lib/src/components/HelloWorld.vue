<template>
  <div class="container-fluid">
    <badge palette="transparent" :variant="'circle'"
      ><img src="@/assets/avatar-6.png" width="42" height="42"
    /></badge>
    <br />
    <avatar :icon="avartar_6" :status="'online'"></avatar>
    <br />
    <div class="row">
      <div class="col-xl-9 mx-auto" style="margin: 30px">
        <card :headerClasses="'tableTitle'">
          <template v-slot:header>
            <h4 class="card-title">Simple Table</h4>
          </template>
          <Table :columns="tableHeader" :data="tableData"></Table>
        </card>
      </div>
      <div class="col-xl-9 mx-auto">
        <card shadow>
          <div class="p-4 border rounded">
            <form class="was-validated">
              <div class="mb-3">
                <label for="validationTextarea" class="form-label"
                  >Textarea</label
                >
                <textarea
                  class="form-control is-invalid"
                  id="validationTextarea"
                  placeholder="Required example textarea"
                  required=""
                ></textarea>
                <div class="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
              <div class="form-check mb-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="validationFormCheck1"
                  required=""
                />
                <label class="form-check-label" for="validationFormCheck1"
                  >Check this checkbox</label
                >
                <div class="invalid-feedback">
                  Example invalid feedback text
                </div>
              </div>
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="validationFormCheck2"
                  name="radio-stacked"
                  required=""
                />
                <label class="form-check-label" for="validationFormCheck2"
                  >Toggle this radio</label
                >
              </div>
              <div class="form-check mb-3">
                <input
                  type="radio"
                  class="form-check-input"
                  id="validationFormCheck3"
                  name="radio-stacked"
                  required=""
                />
                <label class="form-check-label" for="validationFormCheck3"
                  >Or toggle this other radio</label
                >
                <div class="invalid-feedback">
                  More example invalid feedback text
                </div>
              </div>
              <div class="mb-3">
                <select
                  class="form-select"
                  required=""
                  aria-label="select example"
                >
                  <option value="">Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div class="invalid-feedback">
                  Example invalid select feedback
                </div>
              </div>
              <div class="mb-3">
                <input
                  type="file"
                  class="form-control"
                  aria-label="file example"
                  required=""
                  ref="fileInput"
                  @change.prevent="onChangeFile"
                />
                <card v-if="url">
                  <button class="btn">X</button>
                  <img :src="url" width="250" height="250" />
                </card>
                <div class="invalid-feedback">
                  Example invalid form file feedback
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary" type="submit" disabled="">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import { Badge } from "@/components/badge";
import { Avatar } from "@/components/avatar";
import { Card } from "@/components/card";
import { Table } from "@/components/table";

export default {
  name: "HelloWorld",
  components: {
    Badge,
    Avatar,
    Card,
    Table,
  },
  props: {
    operation: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      avartar_6: "/img/avatar-6.3b150d85.png",
      url: "",
      selectedFile: "",
      tableHeader: ["Name", "Description"],
      tableData: [
        {
          name: "OCR",
          description: "Ocr Agreement",
        },
        {
          name: "ATG",
          description: "Ocr Agreement",
        },
      ],
      post: "",
    };
  },
  methods: {
    onChangeFile() {
      const input = this.$refs.fileInput;
      this.selectedFile = input.files[0];
      this.url = URL.createObjectURL(this.selectedFile);
    },
    getPost(a, b) {
      console.log("getPost!!" + a + "|b" + b + "|operation" + this.operation);
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter | to:");
    const getPost = (vm) =>
      vm.getPost(to.params.id, (err, post) => {
        console.log(post);
        //next((vm) => vm.setData(err, post));
      });
    next(getPost);
    //next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before,
.close:after {
  position: absolute;
  left: 15px;
  content: " ";
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

.card [class*="card-header-"] {
  margin: 0 15px;
  padding: 0;
  position: relative;
}
.card
  [class*="card-header-"]:not(.card-header-icon):not(.card-header-text):not(.card-header-image) {
  border-radius: 3px;
  margin-top: -20px;
  padding: 15px;
}
.card .card-header {
  border-radius: 3px;
  margin-top: -20px;
  padding: 15px;
}
</style>
