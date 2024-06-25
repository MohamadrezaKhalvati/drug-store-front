import JwtService from '@/core/services/JwtService'
import axios from 'axios'
import type { App } from 'vue'
import VueAxios from 'vue-axios'

class ApiService {
  public static vueInstance: App

  public static init(app: App) {
    ApiService.vueInstance = app
    ApiService.vueInstance.use(VueAxios, axios)
    ApiService.vueInstance.axios.defaults.baseURL =
      import.meta.env.VITE_APP_API_URL
  }

  public static setHeader(): void {
    ApiService.vueInstance.axios.defaults.headers.common[
      'Authorization'
    ] = `${JwtService.getToken()}`
    ApiService.vueInstance.axios.defaults.headers.common['Accept'] =
      'application/json'
  }

  public static query(resource: string, params: any) {
    return ApiService.vueInstance.axios.get(resource, params)
  }

  public static get(resource: string, slug = '' as string) {
    return ApiService.vueInstance.axios.get(`${resource}/${slug}`)
  }

  public static post(resource: string, params: any) {
    return ApiService.vueInstance.axios.post(`${resource}`, params)
  }

  public static update(resource: string, slug: string, params: any) {
    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, params)
  }

  public static put(resource: string, params: any) {
    return ApiService.vueInstance.axios.put(`${resource}`, params)
  }

  public static delete(resource: string) {
    return ApiService.vueInstance.axios.delete(resource)
  }
}

export default ApiService
