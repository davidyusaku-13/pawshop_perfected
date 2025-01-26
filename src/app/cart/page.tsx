"use client";

import { useCart } from "@/app/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-primary">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-muted-foreground">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-border pb-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={`/placeholder.svg?height=80&width=80&text=${encodeURIComponent(
                      item.name
                    )}`}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-primary">
                      {item.name}
                    </h2>
                    <div className="flex items-center space-x-2 mt-2">
                      <label
                        htmlFor={`quantity-${item.id}`}
                        className="text-sm text-muted-foreground"
                      >
                        Quantity:
                      </label>
                      <Input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value) || 0
                          )
                        }
                        className="w-16 text-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-bold text-secondary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <Button
                    variant="destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <p className="text-2xl font-bold text-primary">
              Total: ${total.toFixed(2)}
            </p>
            <div className="space-x-4">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
