<script setup>
import { Icon } from "@iconify/vue";

// Function to handle scroll event
const handleScroll = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled'); // Add a class when scrolled
    } else {
      navbar.classList.remove('scrolled'); // Remove the class when not scrolled
    }
  }
};

// Function to handle clicks outside of the navbar
const handleClickOutside = (event) => {
  const navbar = document.querySelector('.navbar');
  if (navbar && !navbar.contains(event.target)) {
    isNavbarOpen.value = false;
  }
};

// Listen for scroll events and click events
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

// Clean up event listeners when component is unmounted
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="nav-outer px-[30px] sticky top-2 z-20">
    <div class="navbar w-full px-5 my-6 min-h-16 font-roboto h-fit flex items-center bg-white rounded-xl">
      <nav class="flex w-full items-center flex-1 justify-start">
        <div class="nav-bread size-[60px] rounded-xl">
          <!-- <p class="text-text">Pages / <span class="text-text-active">Dashboard</span></p>
          <p class="dash-text text-text-active font-bold text-sm">Dashboard</p> -->
          <img src="/assets/air-pollution.png" alt="air pollution logo">
        </div>
        <ul class=" flex justify-center items-center gap-5 mx-auto">
          <li>
            <a href="#status" class=" font-semibold text-lg text-teall hover:text-teall/80">Status</a>
          </li>
          <li>
            <a href="#statistics" class=" font-semibold text-lg text-teall hover:text-teall/80">Statistics</a>
          </li>
          <li>
            <a href="#charts" class=" font-semibold text-lg text-teall hover:text-teall/80">Charts</a>
          </li>
          <li>
            <a href="#table" class=" font-semibold text-lg text-teall hover:text-teall/80">Table</a>
          </li>
        </ul>
      </nav>
      <ThemToggle />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  box-shadow: rgba(0, 0, 0, 0.02) 0px 3.5px 5.5px;
  transition: background-color 0.3s ease; /* Smooth transition */
}

.scrolled {
  background-color: rgba(255, 255, 255, 0.737); /* Transparent background */
}
</style>
