import type { ApiCategories } from "../api/category.dto";


export const categoriesMapper = (apiCategories: ApiCategories) => {
      return {
            category: apiCategories.slug,
            title: apiCategories.name,
            urlApi: apiCategories.url
      }
}