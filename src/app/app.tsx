import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Main } from "@/components/main";

export function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
