"use client";
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Burger from "@/components/Burger";
import MobilNav from "@/components/MobilNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const navIsOpen = (e: boolean) => {
    setIsOpen(e);
  };
  useEffect(() => {}, [isOpen]);

  return (
    <nav className="px-[75px] py-4">
      <div className="md:flex md:justify-between md:items-center">
        <Link href="/">
          <Image
            className="hidden md:block"
            src="/logo.svg"
            alt="yalova ünlü hafriyat"
            width={151}
            height={80}
          />
        </Link>
        <div>
          <div className="flex justify-between items-center md:justify-end md:gap-5">
            <a className="flex gap-1 items-center" href="tel:+905349355634">
              <Phone />
              <p className="text-xs md:text-lg">0534 935 5634</p>
            </a>

            <div className="ml-5 max-md:hidden rounded-full p-2 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-800 hover:text-white transition-all duration-300 ">
              <Facebook />
            </div>
            <div className="max-md:hidden rounded-full p-2 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300">
              <Link href="https://www.instagram.com/unlu_hafriyat_77/">
                <Instagram />
              </Link>
            </div>
            <div className="max-md:hidden rounded-full p-2 hover:bg-gradient-to-tr hover:from-sky-700 hover:to-blue-900 hover:text-white transition-all duration-300">
              <Linkedin />
            </div>
            <div className="mr-5 max-md:hidden group rounded-full p-2 hover:bg-gradient-to-tr hover:from-neutral-800 hover:to-black transition-all duration-300">
              <Image
                src="/x.svg"
                alt="x icon"
                width={24}
                height={24}
                className="transition-all duration-300 group-hover:invert group-hover:brightness-200"
              />
            </div>
            <div className="flex gap-1">
              <Image
                src="/turkeyicon.svg"
                alt="turk bayragi"
                width={25}
                height={18}
              />
              <DropdownMenu>
                <DropdownMenuTrigger>Türkçe</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/en">English</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                className="md:hidden"
                src="/logo.svg"
                alt="yalova ünlü hafriyat"
                width={85}
                height={46}
              />
            </Link>
            <Burger navIsOpen={navIsOpen} />
            <div className="hidden md:flex md:justify-end">
              <MobilNav />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <MobilNav />}
    </nav>
  );
};

export default Header;
