"use client";

import { useOrders } from "../contexts/OrderContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Orders() {
  const { orders } = useOrders();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-primary">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-muted-foreground">
          You haven't placed any orders yet.
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <CardTitle>Order #{order.id}</CardTitle>
                <CardDescription>
                  Placed on {new Date(order.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold">Shipping Details</h3>
                    <p>{order.shippingDetails.fullName}</p>
                    <p>{order.shippingDetails.address}</p>
                    <p>
                      {order.shippingDetails.city},{" "}
                      {order.shippingDetails.postalCode}
                    </p>
                    <p>{order.shippingDetails.country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
