export default defineNuxtRouteMiddleware((to) => {
  const userAuth = useCookie('token')
  if (to.path === '/login' && userAuth.value)
    return navigateTo('/')

  if (to.path !== '/login' && !userAuth.value)
    return navigateTo('/login')
})
