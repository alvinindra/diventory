<template>
  <div class="2xl:container h-screen m-auto">
    <div hidden class="fixed inset-0 w-6/12 lg:block bg-diventory-primary-100">
      <div class="d-flex h-100">
        <img class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/image/logo-diventory-secondary.svg" alt="Logo Diventory">
      </div>
    </div>
    <div class="relative h-full ml-auto lg:w-6/12">
      <div class="m-auto py-12 px-6 sm:p-20 sm:py-44 xl:w-10/12">
        <div class="text-center mb-[38px]">
          <h1 class="text-[28px] font-bold mb-3">
            Selamat Datang!
          </h1>
          <p class="text-xl text-gray-600">
            Login untuk masuk ke aplikasi diventory
          </p>
        </div>

        <form action="" class="space-y-6 pb-6">
          <div>
            <input type="email" placeholder="Alamat Email"
              class="w-full py-3 px-4 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none">
          </div>

          <div class="flex flex-col items-end">
            <input type="password" placeholder="Password"
              class="w-full py-3 px-4 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none">
          </div>

          <div class="text-center">
            <button
              class="w-full px-6 py-3 rounded-lg mb-5 bg-diventory-primary-500 transition hover:bg-diventory-primary-600 focus:bg-diventory-primary-600 active:bg-diventory-primary-800">
              <span class="font-semibold text-white text-base">Login</span>
            </button>
            <span class="text-sm tracking-wide font-medium">Belum punya akun?<a
                class="font-bold text-diventory-primary-500" href="mailto:alvin.indra@widyatama.ac.id">&nbsp;Hubungi
                IT Support</a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
