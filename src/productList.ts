import { Product, ProductCategory } from "./types";

const list: Product[] = [
  {
    id: 1,
    name: "Milk",
    price: {
      amount: 1.07,
      currency: "EUR",
    },
    category: ProductCategory.FOOD,
    quantity: 10,
  },
  {
    id: 2,
    name: "Bread",
    price: {
      amount: 2.5,
      currency: "EUR",
    },
    category: ProductCategory.FOOD,
    quantity: 5,
  },
  {
    id: 3,
    name: "Apples",
    price: {
      amount: 0.5,
      currency: "EUR",
    },
    category: ProductCategory.FOOD,
    quantity: 8,
  },
  {
    id: 4,
    name: "Toothpaste",
    price: {
      amount: 3.99,
      currency: "EUR",
    },
    category: ProductCategory.BEAUTY,
    quantity: 3,
  },
  {
    id: 5,
    name: "Shampoo",
    price: {
      amount: 5.99,
      currency: "EUR",
    },
    category: ProductCategory.BEAUTY,
    quantity: 2,
  },
  {
    id: 6,
    name: "T-shirt",
    price: {
      amount: 9.99,
      currency: "EUR",
    },
    category: ProductCategory.CLOTHING,
    quantity: 7,
  },
  {
    id: 7,
    name: "Jeans",
    price: {
      amount: 39.99,
      currency: "EUR",
    },
    category: ProductCategory.CLOTHING,
    quantity: 4,
  },
  {
    id: 8,
    name: "Laptop",
    price: {
      amount: 999.99,
      currency: "EUR",
    },
    category: ProductCategory.ELECTRONICS,
    quantity: 1,
  },
  {
    id: 9,
    name: "Headphones",
    price: {
      amount: 49.99,
      currency: "EUR",
    },
    category: ProductCategory.ELECTRONICS,
    quantity: 6,
  },
  {
    id: 10,
    name: "Book",
    price: {
      amount: 14.99,
      currency: "EUR",
    },
    category: ProductCategory.OTHER,
    quantity: 12,
  },
];

export default list;
