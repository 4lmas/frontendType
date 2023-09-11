<template>
    <div>
        <!-- <UserModal/> -->
        <user-content v-if="!showUser" :user="user"></user-content>
        <ComponentsDashboard/>
    </div>
</template>

<script lang="ts" setup>
    import UserContent from '../components/user/UserContent.vue';
    // import UserModal from '../components/user/User.modal.vue';
    import ComponentsDashboard from '../components/dashboard/Components.dashboard.vue';
import { UseUserStore } from '../store/user.store';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

    const { GetUsersPaginated } = UseUserStore(); 
    const { user } = storeToRefs(UseUserStore());
    const showUser = ref(false);
    onMounted(async() => {
        await GetUsersPaginated(1, 5);
    });

</script>

<style lang="scss" scoped>


</style>