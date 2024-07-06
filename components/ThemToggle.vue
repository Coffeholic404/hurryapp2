<script setup>
import { useDark, useToggle, useColorMode } from '@vueuse/core';
import { Icon } from '@iconify/vue';

const isDark = useDark(); // true or false
const colorMode = useColorMode({
  modes: {
    light: 'light',
    dark: 'dark',
  },
  attribute: 'theme',
}); // 'light' or 'dark'
const toggleDark = useToggle(isDark);

const toggleTheme = () => toggleDark();
</script>


<template>
    <label @click="toggleTheme"
      class="cursor-pointer duration-300 ease-in-out transform  transition"
      >
    <template v-if="isDark">
      <!-- <Icon icon="solar:moon-broken" class="text-[#6E6D6D] w-6 h-6 "/> -->
      <Icon icon="line-md:moon-simple" class="text-[#6E6D6D] w-6 h-6 " />
    </template>
    <template v-else>
        <Icon icon="line-md:sunny-outline" class="text-[#6E6D6D] w-6 h-6 "/>
        
    </template>
  </label>
</template>



<style lang="scss" scoped>

</style>