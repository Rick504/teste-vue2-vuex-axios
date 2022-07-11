import { http } from './config/http.config'

export default {
  userDetailGet: () => {
    return http.get('posts/2')
  },
  userDetailPost: () => {
    return http.post('posts')
  }
}
