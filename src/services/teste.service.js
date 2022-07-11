import { http } from './config/http.config'

export default {
  userDetail: () => {
    return http.get('posts/2')
  }
}
