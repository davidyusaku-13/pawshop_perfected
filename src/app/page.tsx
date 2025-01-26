import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PawPrintIcon,
  ShieldCheckIcon,
  TruckIcon,
  HeartIcon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-primary">
          Welcome to Pawshop
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          Your one-stop shop for all your pet needs
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/products">Shop Now</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-secondary">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: PawPrintIcon,
              title: "Quality Products",
              description: "We offer only the best for your furry friends.",
            },
            {
              icon: ShieldCheckIcon,
              title: "Expert Advice",
              description: "Our team of pet lovers is here to help.",
            },
            {
              icon: TruckIcon,
              title: "Fast Delivery",
              description: "Get your pet supplies quickly and conveniently.",
            },
            {
              icon: HeartIcon,
              title: "Love & Care",
              description: "We treat every pet like our own.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md"
            >
              <item.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center text-secondary">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Organic Dog Food", image: "dog-food.jpg" },
            { name: "Interactive Cat Toy", image: "cat-toy.jpg" },
            { name: "Cozy Pet Bed", image: "pet-bed.jpg" },
          ].map((product) => (
            <div
              key={product.name}
              className="border border-border p-6 rounded-lg text-center bg-card shadow-md"
            >
              <Image
                src={"/img/" + product.image}
                // src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(
                //   product.name
                // )}`}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                Treat your pet to the best with our top-quality products.
              </p>
              <Button
                variant="outline"
                className="hover:bg-accent hover:text-accent-foreground"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
