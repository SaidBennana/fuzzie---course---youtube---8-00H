import InfoBar from "@/components/infobar";
import Sidebar from "@/components/sidebar";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex overflow-hidden h-screen">
    <Sidebar />
    <div className="w-full">
      <InfoBar />
      {children}
    </div>
  </div>
  );
}
