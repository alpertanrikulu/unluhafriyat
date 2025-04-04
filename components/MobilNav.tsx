import Link from "next/link";
import React from "react";

const MobilNav = () => {
  return (
    <ul
      className="max-md:absolute max-md:top-[112px] max-md:left-[75px] max-md:z-10 max-md:p-10 max-md:bg-gray-100 max-md:rounded-2xl max-md:space-y-4 md:flex md:justify-end md:gap-2"
      style={{ width: "calc(100% - 150px)" }}
    >
      <li className="text-lg font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        <Link href="/tr">Ana Sayfa</Link>
      </li>
      <li className="text-lg font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        Hakkımızda
      </li>
      <li className="text-lg font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        Hizmetlerimiz
      </li>
      <li className="text-lg font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        Galeri
      </li>
      <li className="text-lg font-medium hover:bg-amber-300 max-md:border-black max-md:border-b md:px-2 md:py-1 max-md:rounded-t-lg max-md:pl-1 md:rounded-2xl whitespace-nowrap">
        İletişim
      </li>
    </ul>
  );
};

export default MobilNav;
