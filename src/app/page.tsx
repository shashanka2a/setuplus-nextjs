'use client'

import { useRouter } from "next/navigation";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ProductOverview } from "../components/ProductOverview";
import { AIFeatures } from "../components/AIFeatures";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";

export default function HomePage() {
  const router = useRouter();

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  const handleNavigation = (page: string) => {
    if (page === "home") {
      router.push("/");
    } else {
      router.push(`/products/${page}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigation={handleNavigation} />
      <main>
        <Hero />
        <ProductOverview onProductClick={handleProductClick} />
        <AIFeatures />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}