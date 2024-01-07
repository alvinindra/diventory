<script setup>
definePageMeta({
  middleware: ['auth'],
})

const router = useRouter()
const toast = useToast()
const userAuth = useCookie('token')
const formLogin = ref({
  username: '',
  password: '',
})

async function login(event) {
  event.preventDefault()

  const { data, error, status } = await useCustomFetch('/api/login/', { method: 'POST', body: formLogin.value })

  if (status.value === 'success') {
    userAuth.value = data.value.access
    localStorage.setItem('userData', JSON.stringify(data.value.user_data))
    toast.add({ icon: 'i-heroicons-check-badge', color: 'primary', title: 'Login berhasil' })
    router.push('/')
  }

  if (error.value) {
    toast.add({ icon: 'i-heroicons-x-circle-solid', color: 'red', title: `Username atau password salah!` })
    console.error(error.value)
  }
}
</script>

<template>
  <div class="2xl:container h-screen m-auto">
    <div hidden class="fixed inset-0 w-6/12 lg:block bg-diventory-primary-100">
      <div class="d-flex h-100">
        <img
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/image/logo-diventory-secondary.svg" alt="Logo Diventory"
        >
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

        <form class="space-y-6 pb-6" @submit="login">
          <div>
            <input
              v-model="formLogin.username" type="text"
              placeholder="Alamat Email"
              class="w-full py-3 px-4 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400"
              required
            >
          </div>

          <div class="flex flex-col items-end">
            <input
              v-model="formLogin.password" type="password"
              placeholder="Password"
              class="w-full py-3 px-4 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400"
              require
            >
          </div>

          <div class="text-center">
            <button
              type="submit"
              class="w-full px-6 py-3 rounded-lg mb-5 bg-diventory-primary-500 transition hover:bg-diventory-primary-600 focus:bg-diventory-primary-600 active:bg-diventory-primary-800"
            >
              <span class="font-semibold text-white text-base">Login</span>
            </button>
            <span class="text-sm tracking-wide font-medium">Belum punya akun?<a
              class="font-bold text-diventory-primary-500" href="mailto:alvin.indra@widyatama.ac.id"
            >&nbsp;Hubungi
              IT Support</a></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
