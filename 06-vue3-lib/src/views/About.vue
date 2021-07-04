<template>
  <div class="container-fluid">
    <chart-0></chart-0>
    <sample></sample>
  </div>
</template>

<script>
import Chart0 from "@/components/chart/Chart.vue";
import Sample from "@/views/sample/Sample.vue";

export default {
  name: "About",
  components: {
    Chart0,
    Sample,
  },
};
</script>
