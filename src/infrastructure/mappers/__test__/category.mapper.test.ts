import { describe, it, expect } from 'vitest';
import { categoriesMapper } from '../category.mapper';
import type { ApiCategories } from '../../api/category.dto';

describe('Category Mapper', () => {
      it('debería mapear correctamente ApiCategories a Categories', () => {
            const apiCategory: ApiCategories = {
                  slug: 'beauty',
                  name: 'Beauty',
                  url: 'https://dummyjson.com/products/category/beauty',
            };

            const result = categoriesMapper(apiCategory);

            expect(result.category).toBe(apiCategory.slug);
            expect(result.title).toBe(apiCategory.name);
            expect(result.urlApi).toBe(apiCategory.url);
      });
});
