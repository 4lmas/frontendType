<template>

    <div class=" ">
        <button @click="showModal = true" class="flex items-center text-white font-semibold py-2 px-4 rounded-full shadow-md"
        :style="{
            backgroundColor: isAddHover ? 'rgb(21, 131, 89)' : 'rgb(28, 161, 110)'
        }" @mouseover="isAddHover = true" @mouseleave="isAddHovered = false">
        <oh-vue-icon name="io-add-circle" class="m-1"></oh-vue-icon>
        <span>Actualizar</span>
        </button>
        <div v-show="showModal" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div class="bg-white rounded-lg shadow-lg p-6">
                <h3 class="text-lg font-bold mb-4 shadow-lg p-6">Actualizar</h3>
                <form @submit="onSubmit">

                    <div class="mb-4">
                        <label for="user" class="block text-gray-700 text-sm font-medium mb-1">Usuario</label>
                        <Field v-model="form.user" name="name" as="input" type="text" class="w-full h-10 p-4 border rounded-xl"
                        placeholder="Ingrese el nombre" @input="formModified = true" />
                        <ErrorMessage name="name" v-slot="{ message }">
                            <p class="font-semibold text-red-600 text-sm">{{ message }}</p>
                        </ErrorMessage>
                    </div>

                    <div class="mb-4">
                        <label for="user" class="block text-gray-700 text-sm font-medium mb-1">Usuario</label>
                        <Field v-model="form.user" name="lastName" as="input" type="text" class="w-full h-10 p-4 border rounded-xl"
                        placeholder="Ingrese el apellido" @input="formModified = true" />
                        <ErrorMessage name="lastName" v-slot="{ message }">
                            <p class="font-semibold text-red-600 text-sm">{{ message }}</p>
                        </ErrorMessage>
                    </div>

                    <div class="mb-4">
                        <label for="user" class="block text-gray-700 text-sm font-medium mb-1">Usuario</label>
                        <Field v-model="form.user" name="age" as="input" type="text" class="w-full h-10 p-4 border rounded-xl"
                        placeholder="Ingrese el apellido" @input="formModified = true" />
                        <ErrorMessage name="age" v-slot="{ message }">
                            <p class="font-semibold text-red-600 text-sm">{{ message }}</p>
                        </ErrorMessage>
                    </div>

                    <div class="mb-4">
                        <label for="user" class="block text-gray-700 text-sm font-medium mb-1">Usuario</label>
                        <Field v-model="form.user" name="gender" as="input" type="text" class="w-full h-10 p-4 border rounded-xl"
                        placeholder="Ingrese el apellido" @input="formModified = true" />
                        <ErrorMessage name="gender" v-slot="{ message }">
                            <p class="font-semibold text-red-600 text-sm">{{ message }}</p>
                        </ErrorMessage>
                    </div>
                    




                    <!--Button-->
                    <div class="flex justify-end">
                        <button type="submit" class="px-4 py-2 text-sm font-medium rounded-md"
                        >
                            
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>