import InfoBar from "@/components/infobar";
import Sidebar from "@/components/sidebar";
import ModalProvider from "@/provider/model_provider";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <div className="flex overflow-hidden h-screen">
        <Sidebar />
        <div className="w-full">
          <InfoBar />
          {children}
        </div>
      </div>
    </ModalProvider>
  );
}
