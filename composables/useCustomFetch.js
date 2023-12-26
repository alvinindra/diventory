import { defu } from 'defu'

export function useCustomFetch (url, options) {
  const userAuth = useCookie('token')
  const config = useRuntimeConfig()

  const defaults = {
    baseURL: config.baseUrl ?? 'https://api.nuxt.com',
    key: url,

    headers: userAuth.value
      ? { Authorization: `Bearer ${userAuth.value}` }
      : {},
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
