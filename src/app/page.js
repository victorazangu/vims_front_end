import { SideBar, NavBar, Footer } from "@/components";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr] gap-8 sm:gap-16 h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="col-start-1 row-start-1 row-span-2 sm:col-span-1 overflow-y-auto h-screen">
        <SideBar />
      </div>
      <div className="col-start-2 row-start-1 flex flex-col min-h-screen">
        <div className="flex-shrink-0">
          <NavBar />
        </div>
        <div className="flex-grow overflow-auto">
          <div>Body Content</div>
        </div>
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
