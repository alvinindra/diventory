<script setup>
const items = [
  [{
    label: 'leo@dicoding.com',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
]
</script>

<template>
  <header class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
    <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
      <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
        <!-- Hamburger Toggle BTN
        <button
          class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          @click.stop="sidebarToggle = !sidebarToggle">
          <span class="relative block h-5.5 w-5.5 cursor-pointer">
            <span class="du-block absolute right-0 h-full w-full">
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-300': !sidebarToggle }" />
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-400': !sidebarToggle }" />
              <span
                class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white"
                :class="{ '!w-full delay-500': !sidebarToggle }" />
            </span>
            <span class="du-block absolute right-0 h-full w-full rotate-45">
              <span
                class="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 delay-[0]': !sidebarToggle }" />
              <span
                class="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white"
                :class="{ '!h-0 dealy-200': !sidebarToggle }" />
            </span>
          </span>
        </button> -->
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7 ms-auto">
        <!-- User Area -->
        <div class="relative">
          <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
            :popper="{ placement: 'bottom-start' }">
            <div class="flex">
              <UAvatar class="my-auto" src="https://avatars.githubusercontent.com/u/739984?v=4" />
              <div class="my-auto w-[100px] mx-2">
                <strong class="mb-0.5 line-clamp-1">Katie Pena</strong>
                <div class="text-xs text-diventory-black-secondary">
                  Admin
                </div>
              </div>
              <svg class="my-auto" width="20" height="20" viewBox="0 0 20 20" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.6323 7.29254C15.7655 7.42178 15.8377 7.59456 15.833 7.77291C15.8282 7.95126 15.7469 8.12057 15.607 8.24363L10.5032 12.7308C10.3676 12.8501 10.1874 12.9166 10.0001 12.9166C9.81272 12.9166 9.63257 12.8501 9.49697 12.7308L4.39313 8.24452C4.253 8.12149 4.17156 7.95213 4.16673 7.77368C4.1619 7.59523 4.23407 7.42232 4.36737 7.29299C4.50067 7.16365 4.68418 7.08849 4.87752 7.08403C5.07087 7.07957 5.25821 7.14618 5.39835 7.26921L10.0005 11.3149L14.6027 7.26831C14.7429 7.14545 14.9302 7.07899 15.1234 7.08353C15.3167 7.08807 15.5 7.16325 15.6332 7.29254H15.6323Z"
                  fill="#3A3A3C" fill-opacity="0.4" />
              </svg>
            </div>
            <template #account="{ item }">
              <div class="text-left">
                <p>
                  Signed in as
                </p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                  {{ item.label }}
                </p>
              </div>
            </template>

            <template #item="{ item }">
              <span class="truncate">{{ item.label }}</span>

              <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
            </template>
          </UDropdown>
        </div>
        <!-- Dropdown End -->
      </div>
      <!-- User Area -->
    </div>
  </header>
</template>