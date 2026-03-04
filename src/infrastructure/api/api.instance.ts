
/**
 * Instancia de axios para las peticiones
 */

import axios from "axios";

const api = axios.create({
      baseURL: 'https://dummyjson.com/',
      timeout: 10000
})

export default api