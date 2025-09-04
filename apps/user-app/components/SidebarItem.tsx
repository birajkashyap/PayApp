"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  return (
    <div
      onClick={() => router.push(href)}
      className={`
        flex items-center space-x-3 px-6 py-3 rounded-lg cursor-pointer
        transition-all duration-200 ease-in-out
        ${selected ? "bg-violet-100 text-violet-700 font-semibold" : "hover:bg-gray-100 text-slate-600"}
      `}
    >
      <div className="text-lg">{icon}</div>
      <div>{title}</div>
    </div>
  );
};
