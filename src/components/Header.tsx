"use client";

import Link from "next/link";
import { PawPrintIcon as Paw, ShoppingCartIcon } from "lucide-react";
import { useCart } from "@/app/contexts/CartContext";

export default function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Paw size={32} className="text-accent" />
          <span className="text-3xl font-bold">Pawshop</span>
        </Link>
        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-accent transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="hover:text-accent transition-colors"
              >
                Contacts
              </Link>
            </li>
            <li>
              <Link
                href="/orders"
                className="hover:text-accent transition-colors"
              >
                My Orders
              </Link>
            </li>
          </ul>
          <Link href="/cart" className="relative">
            <ShoppingCartIcon size={24} className="text-accent" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
