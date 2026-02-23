import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { useState } from "react";

export function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Footer />
    </div>
  );
}
