<template>
  <div class="home p-grid">
    <Card class="p-col-6 p-offset-3">
      <template v-slot:header>
        <h2>Study Card</h2>
      </template>

      <template v-slot:content>
        Card info
        {{ cards[currentCardIndex].question }}
      </template>
    </Card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "primevue/card";

export default {
  components: {
    Card
  },
  data() {
    return {
      currentCardIndex: 0
    };
  },
  computed: {
    ...mapState(["cards"])
  }
};
</script>