<template>
  <v-main>
    <v-container class="d-flex h-100 w-100 justify-center align-center">
      <v-sheet rounded min-width="400" max-height="500">
        <v-form class="d-flex flex-column ma-6" @submit.prevent="onSubmit">
          <v-text-field
            placeholder="name@gmail.com"
            label="Email Address"
            type="email"
            v-model="email"
            v-bind="emailProps"
            :error-messages="errors.email"
            class="my-3"
          />

          <v-text-field
            type="input"
            label="Password"
            v-model="password"
            v-bind="passwordProps"
            :error-messages="errors.password"
            class="my-3"
          />
          <v-btn color="light-blue" type="submit" class="mt-8">submit</v-btn>
        </v-form>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script setup>
import * as yup from "yup";
import { useForm } from "vee-validate";
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { watch } from "vue";
const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().min(8).max(16),
});

const { values, defineField, errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const [email, emailProps] = defineField("email");
const [password, passwordProps] = defineField("password");

const store = useAuthStore();
let { user } = storeToRefs(store);

const route = useRoute();
const router = useRouter();

const onSubmit = handleSubmit((values) => {
  user.value = { ...values };
  localStorage.setItem("user", JSON.stringify(values));
});

watch(
  user,
  () => {
    router.push(route.query.redirect);
  },

  {
    deep: true,
  }
);
</script>

<style></style>
