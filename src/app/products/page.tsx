"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "../contexts/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  {
    id: 1,
    name: "Premium Dog Food",
    price: 29.99,
    category: "Dog",
    image: "dog-food.jpg",
  },
  {
    id: 2,
    name: "Interactive Cat Toy",
    price: 14.99,
    category: "Cat",
    image: "cat-toy.jpg",
  },
  {
    id: 3,
    name: "Cozy Pet Bed",
    price: 39.99,
    category: "All",
    image: "pet-bed.jpg",
  },
  {
    id: 4,
    name: "Bird Cage",
    price: 49.99,
    category: "Bird",
    image: "bird-cage.webp",
  },
  {
    id: 5,
    name: "Fish Tank Filter",
    price: 24.99,
    category: "Fish",
    image: "tank-filter.jpg",
  },
  {
    id: 6,
    name: "Small Animal Treats",
    price: 9.99,
    category: "Small Pets",
    image: "small-treats.jpg",
  },
];

export default function Products() {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    addToCart(product);
    setAddedToCart((prev) => ({ ...prev, [product.id]: true }));
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-primary">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-border p-4 rounded-lg bg-card shadow-md"
          >
            <Image
              src={"/img/" + product.image}
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-contain mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2 text-primary">
              {product.name}
            </h2>
            <p className="text-muted-foreground mb-2">
              Category: {product.category}
            </p>
            <p className="text-lg font-bold mb-4 text-secondary">
              ${product.price.toFixed(2)}
            </p>
            <Button
              onClick={() => handleAddToCart(product)}
              className={`w-full ${
                addedToCart[product.id]
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-accent hover:bg-accent/90"
              }`}
            >
              {addedToCart[product.id] ? "Added to Cart" : "Add to Cart"}
            </Button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}
