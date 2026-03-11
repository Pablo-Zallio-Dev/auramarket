import { describe, it, expect, vi } from 'vitest';
import { getCategories } from '../ApiProductRepository';
import api from '../../api/api.instance';

vi.mock('../../api/api.instance');

describe('getCategories', () => {
      it('debería obtener y mapear las categorías correctamente', async () => {
            const apiCategories = [
                  { slug: 'beauty', name: 'Beauty', url: 'https://dummyjson.com/products/category/beauty' },
                  { slug: 'fragrances', name: 'Fragrances', url: 'https://dummyjson.com/products/category/fragrances' },
            ];

            vi.mocked(api.get).mockResolvedValue({ data: apiCategories });

            const result = await getCategories();

            expect(api.get).toHaveBeenCalledWith('products/categories');
            expect(result).toEqual([
                  { category: 'beauty', title: 'Beauty', urlApi: 'https://dummyjson.com/products/category/beauty' },
                  { category: 'fragrances', title: 'Fragrances', urlApi: 'https://dummyjson.com/products/category/fragrances' },
            ]);
      });
});
