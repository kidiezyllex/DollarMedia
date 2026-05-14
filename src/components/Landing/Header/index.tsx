"use client";

import CyberButton from "@/components/ui/CyberButton";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Dropdown, Trigger, TriggerWrapper } from "@/components/ui/dropdown";
import { mdiFormatListBulletedType, mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCategoryIcon = (slug: string, apiIcon?: string) => {
    if (apiIcon) {
      return <img src={apiIcon} alt={slug} className="w-full h-full object-contain" />;
    }

    const iconMap: Record<string, string> = {
      'chatgpt': '/images/logo/ChatGPT.png',
      'gemini': '/images/logo/Gemini.png',
      'grok': '/images/logo/Grok.png',
      'capcut': '/images/logo/Capcut.png',
      'vpn-proxy': '/images/logo/VPN.png',
      'premium-key': '/images/logo/Key.png',
    };

    if (iconMap[slug]) {
      return <img src={iconMap[slug]} alt={slug} className="w-full h-full object-contain" />;
    }

    return <Icon path={mdiFormatListBulletedType} size={1} className="text-neutral-500" />;
  };

  return (
    <>
      <header className={`fixed top-0 sm:top-9 w-full z-50 transition-all duration-300 bg-transparent`}>
        <div className="mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center py-2 sm:py-2 md:py-3 lg:py-3 xl:py-4">
            <nav className=" hidden lg:flex border border-primary/50 px-4 rounded-full backdrop-blur-sm ml-6 uppercase text-[10px] md:text-xs lg:text-sm xl:text-sm">
              <Dropdown>
                <TriggerWrapper>
                  <Trigger href="/">Trang chủ</Trigger>
                  <Trigger href="/shop">Cửa hàng</Trigger>
                  <Trigger href="/guide">Hướng dẫn mua hàng</Trigger>
                  <Trigger href="/commit">Cam kết</Trigger>
                </TriggerWrapper>
              </Dropdown>
            </nav>

            <div className="lg:hidden flex items-center gap-3">
              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <button className="text-neutral-300 group p-3 bg-white/5 rounded-full transition-colors">
                    <Icon path={mdiMenu} size={0.8} className="text-neutral-400 group-hover:text-secondary transition-colors" />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="bg-[#050505] border-primary/20">
                  <div className="px-4 py-8 space-y-8 flex flex-col h-full">
                    <div className="flex flex-col gap-4 font-medium">
                      <Link href="/" className="text-neutral-300 hover:text-secondary text-sm transition-colors">Trang Chủ</Link>
                      <Link href="/shop" className="text-neutral-300 hover:text-secondary text-sm transition-colors">Cửa Hàng</Link>

                      <div className="space-y-4">
                        <p className="text-neutral-300 hover:text-secondary text-sm transition-colors">Danh mục nổi bật</p>
                        <div className="grid grid-cols-2 gap-3">
                          <Link href="/shop" className="text-sm text-secondary font-semibold">Xem tất cả →</Link>
                        </div>
                      </div>

                      <Link href="/guide" className="text-neutral-300 hover:text-secondary text-sm transition-colors">Hướng Dẫn Mua Hàng</Link>
                      <Link href="/commit" className="text-neutral-300 hover:text-secondary text-sm transition-colors">Cam Kết</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                      <CyberButton
                        text="Đăng xuất"
                        size="medium"
                        variant="outline"
                        className="w-full hover:!bg-red-500/10 hover:!text-red-400 !text-red-400 !border-red-500/50"
                      />

                      <CyberButton
                        text="Đăng nhập"
                        size="medium"
                        variant="solid"
                        className="w-full"
                      />
                      <CyberButton
                        text="Đăng ký"
                        size="medium"
                        variant="outline"
                        className="w-full"
                      />
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
