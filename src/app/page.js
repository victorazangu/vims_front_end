import { SideBar, NavBar } from "@/components";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr] gap-8 sm:gap-16 min-h-screen  font-[family-name:var(--font-geist-sans)]">
        <div className="col-start-1 row-start-1 row-span-2 sm:col-span-1">
          <SideBar />
        </div>
        <div className="col-start-2 row-start-1">
          <div>
            <NavBar />
          </div>
          <div>Body Content</div>
        </div>
      </div>
      \
    </>
  );
}
