<template>
  <v-main>
    <v-sheet color="white" width="400">
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, in
        libero vitae excepturi officiis maiores expedita. Aliquam reprehenderit
        eos nihil velit numquam quis, recusandae, sint natus, placeat molestias
        dolores sapiente.
        <span style="background-color: rgb(212, 212, 242)">
          {{ message }}
        </span>
      </div>
    </v-sheet>
    <v-sheet color="light-blue" width="600">
      <input v-model="email" v-bind="emailProps" type="email" />

      <pre>values : {{ values }}</pre>
      <pre>errors : {{ emailProps }}</pre>
      <pre>errors : {{ error }}</pre>
    </v-sheet>
  </v-main>
</template>

<script setup>
import * as yup from "yup";
import { computed } from "vue";
import { ref } from "vue";
import { useForm } from "vee-validate";
const schema = yup.object({
  email: yup.string().required().email(),
});

const { values, defineField, errors } = useForm({
  validationSchema: schema,
});

const [email, emailProps] = defineField("email", {
  props: (state) => ({
    error: state.errors[0],
  }),
});

const color = ref("red");
const message = computed(() => {
  return "this is a message";
});
</script>

<style></style>
