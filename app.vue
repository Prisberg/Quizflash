<script>
import { mockedData } from "./util/mockdata.js";

export default {
  data() {
    return {
      dataAvailable: false, // Initially, data is not available
      data: null, // Placeholder for the data
    };
  },
  mounted() {
    // Assuming mockedData is loaded asynchronously
    // Simulate an asynchronous operation
    // setTimeout(() => {
    this.dataAvailable = true;
    this.data = mockedData[0];
    // }, 1000);
  },
};
</script>

<template>
  <div>
    <p v-if="dataAvailable">{{ data.question }}</p>
    <p v-else>Loading data...</p>
    <p>hej</p>
  </div>
</template>
