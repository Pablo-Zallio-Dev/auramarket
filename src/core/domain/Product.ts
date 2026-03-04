
/**
 * Tipado de dominio
 */
export interface Product {
      id: number,
      title: string,
      description: string,
      category: string,
      stock: number,
      price: number,
      discount: number,
      score: number,
      brand: string,
      status: string,
      allImages: string[],
      cardImage: string
}