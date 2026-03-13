import Profile from "./components/profile";
import Contador from "./components/contador";
import GeradorAleatorio from "./components/geradorAleatorio";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-black text-white pt-12">
      <Profile />
      <GeradorAleatorio />
      <Contador />
      <footer className="mt-12 text-gray-500 text-sm italic">
        Site criado para a disciplina Programação Front-End
      </footer>
    </div>
  );
}