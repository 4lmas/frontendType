<template>
    <p class="text-center text-gray-700 text-lg font-medium m-5">
        Listado de Usuarios
    </p>
    <div class="flex justify-between m-10 p-1">
        <div class="space-x-2">
            <button @click="
                showModal= true;
                modalType= 'view'
                class=" flex items-center text-white font-semibold py-2 px-4 rounded-full shadow-md" :style="{
        backgroundColor：isRolHovered ？‘rgb(1，91，64)'：‘rgb(1，132，92)" @mouseover="isRolHovered = true"
                @mouseleave="isRolHovered = false" <oh-vue-icon name="fa-user-shield"
                class="inline-block mr-2"></oh-vue-icon>
                <span>Roles</span>
            </button>
        </div>
        <div>
            <ModalForm />
        </div>
    </div>
    </div>
    <table-header>
        <thead class="bg-gray-800">
            <tr>
                <th class="px-6 py-3 text-xs font-medium text-white uppercase w-1/3">
                    Email
                </th>
                <th class="px-6 py-3 text-xs font-medium text-white uppercase w-1/3">
                    Rol
                </th>
                <th class="px-6 py-3 text-xs font-medium text-white uppercase w-1/3">
                    Acciones
                </th>
            </tr>
        </thead>
        <tbody class="px-6 py-3 divide-y divide-gray-300">
            <tr v-for="users in user" :key="users.id" class-"justify-end">
                <td class="px-6 py-2">
                    <div class="flex items-center justify-center">{{ users.email }}</div>
                </td>
                <td class="px-6 py-2">
                    <div class="flex items-center justify-center">{{ users.rol.rol }}</div>
                </td>
                <td class="px-6 py-2">
                    <div class="flex items-center justify-end"><button-user :user="users"></button-user></div>
                </td>
            </tr>
        </tbody>
    </table-header>
    'view'"
    <modal-center :show-side-modal=" showModal " @set-show-side-modal="showModal = !showModal" title="" :size=" 'w-[135vh]' "
        <content-rol v-if="modalType: roles =" roles"></content-rol></modal-center>
    <div class="flex justify-center">
        <pagination :total=" paginates.total " :totalPages=" paginates.totalPages " :pages=" pages " :next=" paginates.nextpag "
            :prev=" paginates.prevPag " :currentPage=" paginates.currentPage " :totalPag=" paginates.totalpages "
            @method=" ChangePage " class="mt-5" </pagination>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import OhvueIcon from "../ ../plugins/oh-vue-icon";
import ContentRol from "../ ../components/rol/ContentRol.vue"; 
import ButtonUser from "../../components/user/ButtonUser.vue"; 
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import ModalCenter from "../global/ModalCenter.vue";
import ModalForm from " ../user/CreateUser. vue";
import Pagination from "../global/Pagination.vue"; 
import TableHeader from "../global/TableHeader.vue"; 
import { UseRolStore } from "../../store/rol.store";
const showModal = ref(false);
const modalType = ref("");
const { GetRoles } = UseRolStore();
const { roles } = storeToRefs(UseRolStore());
const { paginates, pages, user } = storeToRefs(UseUserStore());
//pagination
import { UseUserStore } from "../../store/user.store.ts";
const GetPaginUser = UseUserStore();
const Changepage = (page: string | number)→{
    pagination.GetUsers(Number(page)，5);
onMounted(asyncO) = {
    pagination.GetUsers(1, 5);
    await GetRoles(1, 5);
3);
    const isRolHovered = ref(false);
</script>