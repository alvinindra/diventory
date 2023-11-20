<template>
  <div class="flex h-screen overflow-hidden">
    <LayoutAppSidebar />
    <!-- Container -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-diventory-white-tertiary">
      <LayoutAppHeader />
      <main class=" px-6 py-8">
        <slot />
      </main>
    </div>
  </div>
</template>