<template>
  <div>
    <!-- component -->
    <div class="min-h-screen bg-sky-400 flex justify-center items-center">
      <div class="absolute w-60 h-60 rounded-xl bg-sky-500 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class="absolute w-48 h-48 rounded-xl bg-blue-800 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div class="bg-white lg:w-5/12 md:w-6/12 w-10/12 rounded-2xl shadow-xl z-20 p-12 md:p-24">
        <div>
          <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">iniciar sesion</h1>
        </div>
        <form @submit="onSubmit" class="space-y-4">
          <div class="flex items-center text-lg mb-6 md:mb-8">
            
            
            <hr><Field name="email" type="text" id="email" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" placeholder="Email Address" />
            <ErroMessage name="email" class="text-red-500 text-sm"></ErroMessage>
          </div>
          <div class="flex items-center text-lg mb-6 md:mb-8">
            
            <Field name="password" type="password" id="password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" placeholder="Password" />
            <hr>
            <ErrorMessage name="password" class="text-red-500 text-sm"></ErrorMessage>
          </div>
          <div class="text-center mt-6">
            <button type="submit" class="py-3 w-64 text-xl text-white bg-sky-400 rounded-2xl">Iniciar Sesion</button>
          </div>
        </form>
      </div>
      <div class="w-40 h-40 absolute bg-sky-600 rounded-full top-0 right-12 hidden md:block"></div>
      <div class="w-20 h-40 absolute bg-blue-400 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>


<script lang="ts" setup>
import * as yup from "yup"
import { useForm, Field, ErrorMessage } from "vee-validate"
import { UseAuthStore } from "../store/auth.store";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email es requerido"),
  password: yup.string().required("Password es requerido")
});

const { handleSubmit } = useForm({
  initialValues: { email: "", password: "" },
  validationSchema
});

const { MakeLogin } = UseAuthStore();

const onSubmit = handleSubmit(async (values) => {
  MakeLogin(values);
})

</script>

<style lang="scss" scoped></style>