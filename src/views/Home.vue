<template>
  <div class="home p-grid">
    <Card class="p-col-6 p-offset-3">
      <template v-slot:header>
        <h2>Create Card</h2>
      </template>

      <template v-slot:content>
        <form @submit.prevent="submitNewCard" class="p-fluid">
          <div class="p-field">
            <label for="question">Question</label>
            <inputText v-model="question" class="p-field" id="question" />
          </div>

          <div class="p-field">
            <label for="answer">Answer</label>
            <inputText v-model="answer" class="p-field" id="answer" />
          </div>

          <Button type="submit" label="Add New Card"></Button>
        </form>
      </template>
    </Card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";

export default {
  name: "Home",
  components: {
    InputText,
    Button,
    Card
  },
  data() {
    return {
      question: "",
      answer: ""
    };
  },
  computed: {
    ...mapState(["card"])
  },
  methods: {
    ...mapActions(["createCard"]),
    submitNewCard() {
      const payload = {
        question: this.question,
        answer: this.answer
      };
      this.createCard(payload);
      this.question = "";
      this.answer = "";
    }
  }
};
</script>
