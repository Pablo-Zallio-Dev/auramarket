import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Category from '../Category';

describe('Category Component', () => {
      it('debería renderizar el título correctamente', () => {
            render(<Category title="Beauty" category="beauty" urlApi="https://dummyjson.com/products/category/beauty" />);

            expect(screen.getByText('Beauty')).toBeDefined();
      });
});
