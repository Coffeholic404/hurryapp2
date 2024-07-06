<template>
     <div class="wrapper w-full min-h-[100dvh]">
        <main class="main w-full">
            <TheNavbar @toggle-sidebar="toggleSidebar"/>
            <div class="h-full ">
                <UIAnalyticsCards />
                <UIBigCards />
                <UITheCharts />
                <UITheTable />
                <ScrollTop />
            </div>

            <div>
                <TheFooter />
            </div>
        </main>
    </div>
</template>

<script setup>
const isSidebarVisible = ref(false);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<style scoped>

</style>