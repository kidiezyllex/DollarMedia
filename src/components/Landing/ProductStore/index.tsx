"use client";

import { mdiCart, mdiFlash, mdiKey, mdiMessageReplyText, mdiShieldCheck } from "@mdi/js";

export const ProductStore = () => {
  const getIcon = (slug: string) => {
    const s = slug.toLowerCase();
    if (s.includes("chatgpt")) return mdiMessageReplyText;
    if (s.includes("gemini")) return mdiFlash;
    if (s.includes("vpn")) return mdiShieldCheck;
    if (s.includes("office") || s.includes("window") || s.includes("key")) return mdiKey;
    return mdiCart;
  };

  const formatCurrency = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const getPriceRange = (product: any) => {
    const variants = product.variants?.list;
    if (!variants || variants.length === 0) return formatCurrency(0);

    const prices = variants.map((v: any) => v.originalPrice);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    if (minPrice === maxPrice) {
      return formatCurrency(minPrice);
    }

    return `${formatCurrency(minPrice)} - ${formatCurrency(maxPrice)}`;
  };

  return (
    <section id="store" className="py-16 relative border-t border-primary/20">
      <div className="max-w-8xl mx-auto px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-4 text-white">Sản phẩm <span className="text-secondary">Nổi bật</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Danh sách những sản phẩm theo xu hướng mà có thể bạn sẽ thích.</p>
        </div>
      </div>
    </section>
  );
};
