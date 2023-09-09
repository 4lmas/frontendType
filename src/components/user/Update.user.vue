<template>
    <div class=" ">
        <button @click="showModal = true"
            class="flex items-center text-white font-semibold py-2 px-4 rounded-full shadow-md" :style="{
                backgroundColor: isAddHovered ? 'rgb(21, 131, 89)' : 'rgb(28, 161, 110)'
            }" @mouseover="isAddHovered = true" @mouseleave="isAddHovered = false">
            <oh-vue-icon name="io-add-circle" class="m-1"></oh-vue-icon>
            <span>Actualizar</span>
        </button>
        <div v-show="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4 shadow-lg p-6 text-black">Actualizar usuario</h3>

                <form @submit="onSubmit">

                    <div class="flex flex-col w-full mt-1">
                        <label class="block text-gray-700 text-sm font-medium mb-1">Rol</label>
                        <Field v-model="form.rolId" name="rolId" as="select"
                            class="w-full h-10 border rounded-xl mb-4 text-gray-700">
                            <option disabled value="">Seleccione un Rol</option>
                            <option v-for="roles in rol" :value="roles.id" :key="roles.id">
                                {{ roles.rol }}
                            </option>
                        </Field>
                    </div>

                    <div class="flex flex-col w-full mt-1">
                        <field v-model="form.name" as="input" @input="formModified = true" type="text" name="name"
                            placeholder="Nombre"
                            class="mt-1 p-2 block w-full rounded-md bg-white text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 focus:ring-opacity-50" />

                        <field v-model="form.lastName" as="input" @input="formModified = true" type="text" name="lastName"
                            placeholder="Apellido"
                            class="mt-1 p-2 block w-full rounded-md bg-white text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 focus:ring-opacity-50" />

                        <field v-model="form.age" as="input" @input="formModified = true" type="text" name="age"
                            placeholder="Edad"
                            class="mt-1 p-2 block w-full rounded-md bg-white text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 focus:ring-opacity-50" />

                        <field v-model="form.gender" as="input" @input="formModified = true" type="text" name="gender"
                            placeholder="Genero"
                            class="mt-1 p-2 block w-full rounded-md bg-white text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 focus:ring-opacity-50" />

                        <field v-model="form.email" as="input" @input="formModified = true" type="text" name="email"
                            placeholder="Email"
                            class="mt-1 p-2 block w-full rounded-md bg-white text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-indigo-200 focus:ring-opacity-50" />


                    </div>


                    <!--Button-->
                    <div class="flex justify-end">
                        <button type="submit" class="px-4 py-2 text-white text-sm font-medium rounded-md" :style="{
                            backgroundColor: isSaveHovered ? 'rgb(21, 131, 89)' : 'rgb(28, 161, 110)'
                        }" @mouseover="isCancelHovered = true" @mouseleave="isCancelHovered = false">
                            Guardar
                        </button>

                        <button type="button" @click="cancelModal"
                            class="px-4 py-2 bg-red-700 text-white text-sm font-medium rounded-md ml-2" :style="{
                                backgroundColor: isCancelHovered ? 'rgb(256, 50, 20)' : 'red'
                            }" @mouseover="isCancelHovered = true" @mouseleave="isCancelHovered = false">
                            Cancelar
                        </button>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { UseUserStore } from '../../store/user.store';
import { GetUser, UpdateUser } from '../../types/user.type';
import { Field, useForm } from 'vee-validate';
import { storeToRefs } from 'pinia';
import { UseRolStore } from '../../store/rol.store';
import { update_user } from '../../services/user.service';

const { user } = defineProps<{ user: GetUser }>();
const { rol } = storeToRefs(UseRolStore());
const { GetAllRol } = UseRolStore();

const { handleSubmit, resetForm } = useForm<UpdateUser>({
    //validationSchema
});

const showModal = ref(false)
const { UpdateUser } = UseUserStore();

const form = ref({
    name: user.name,
    rolId: user.rolId,
    lastName: user.lastName,
    age: user.age,
    gender: user.gender,
    email: user.email,
    password: user.password
});

const cancelModal = () => {
    resetForm();
    formModified.value = false;
    showModal.value = false;
};

const onSubmit = handleSubmit(async (values) => {
    await update_user(user.id, values);
    showModal.value = false;
});

onMounted(async () => {
    await GetAllRol()
});

const isAddHovered = ref(false);
const isSaveHovered = ref(false);
const isCancelHovered = ref(false);
const formModified = ref(false);

</script>