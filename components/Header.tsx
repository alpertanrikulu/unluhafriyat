"use client";
import { Phone } from "lucide-react";
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
        <Image
          className="hidden md:block"
          src="/logo.svg"
          alt="yalova ünlü hafriyat"
          width={151}
          height={80}
        />
        <div>
          <div className="flex justify-between items-center md:justify-end md:gap-5">
            <a className="flex gap-1 items-center" href="tel:+905349355634">
              <Phone />
              <p className="text-xs">0534 935 5634</p>
            </a>
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
            <Image
              className="md:hidden"
              src="/logo.svg"
              alt="yalova ünlü hafriyat"
              width={85}
              height={46}
            />
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
