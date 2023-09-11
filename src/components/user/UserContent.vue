<template>
    <create></create>
  <div
    class="col-span-12 z-30 absolute w-[85.5%] h-[calc(100% - 20%)] top-[20%] left-[18.5%] flex justify-center"
  >
    <div class="overflow-auto lg:overflow-visible">
      <table
        class="table text-white border-separate space-y-6 text-sm "
      >
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="p-3">Nombre</th>
            <th class="p-3">Apellido</th>
            <th class="p-3">Edad</th>
            <th class="p-3">Género</th>
            <th class="p-3">Correo</th>
            <th class="p-3">Rol</th>
            <th class="p-3">Activo</th>
            <th class="p-3 position right-0">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="users in user" :key="users.id" class="bg-blue-400">
            <td class="p-3">{{ users.name }}</td>
            <td class="p-3">{{ users.lastName }}</td>
            <td class="p-3">{{ users.age }}</td>
            <td class="p-3">{{ users.gender }}</td>
            <td class="p-3">{{ users.email }}</td>
            <td class="p-3">{{ users.rol ? users.rol.rol : "" }}</td>
            <td class="p-3 text-white-500 right-10">Sí</td>
            <td class="p-3" style="display: flex; align-items: center">
              <!-- modal -->

              <updateuser :user="users"></updateuser>
              <button
                type="button"
                class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                @click="handleDelete(users.id)"
                data-swal-template="#my-template"
              >
                Eliminar
              </button>
            </td>
          </tr>
          <!--gregar mas filas-->
        </tbody>
      </table>
      <pagination
      :total="paginates.total"
      :totalPages="paginates.totalPages"
      :pages="pages"
      :next="paginates.nextPag"
      :prev="paginates.prevPag"
      :currentPage="paginates.currentPage"
      :totalPag="paginates.totalPages"
      @method="ChangePage"></pagination>
    </div>
  </div>
  <div>
  </div>
</template>

<script lang="ts" setup>
import create from '../user/UserModal.vue'
import updateuser from "../../components/user/Update.user.vue";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { UseUserStore } from "../../store/user.store";
import Swal from "sweetalert2";
import Pagination from "../global/PaginateUser.vue";

const { GetAllUser } = UseUserStore();
const { user, paginates, pages } = storeToRefs(UseUserStore());

const pagination = UseUserStore();

const ChangePage = (page: string | number) => {
  pagination.GetUsersPaginated(Number(page), 4);
};

onMounted(async () => {
  pagination.GetUsersPaginated(1, 4);
  await GetAllUser();
});

const { DeleteUser } = UseUserStore();

const handleDelete = (id: number) => {
  Swal.fire({
    title: "Estas segur@?",
    text: "Esta accion no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "3085d6",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      DeleteUser(id).then(() => {
        Swal.fire({
          title: "Hecho",
          text: "usuario eliminado exitosamente",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      });
    }
  });
};
</script>

<style lang="scss" scoped>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 8),
tr th:nth-child(n + 8) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>
