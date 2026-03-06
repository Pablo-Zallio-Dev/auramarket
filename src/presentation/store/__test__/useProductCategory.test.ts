import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useProductCategory } from '../useProductCategory';

const mockCategories = [
      { category: 'beauty', title: 'Beauty', urlApi: 'https://dummyjson.com/products/category/beauty' },
];

vi.mock('../../../infrastructure/repositories/ApiProductRepository', () => ({
      getCategories: vi.fn().mockResolvedValue([
            { category: 'beauty', title: 'Beauty', urlApi: 'https://dummyjson.com/products/category/beauty' },
      ]),
}));

describe('useProductCategory', () => {
      beforeEach(() => {
            useProductCategory.setState({ categories: [] });
      });

      it('debería cargar las categorías al llamar loadCategories', async () => {
            const { loadCategories } = useProductCategory.getState();

            await loadCategories();

            const { categories } = useProductCategory.getState();
            expect(categories).toEqual(mockCategories);
      });
});
