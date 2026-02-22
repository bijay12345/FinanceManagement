import type { ReactNode } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Topbar from "../components/layouts/Topbar";

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <div className="h-screen flex bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto px-10 py-8">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
