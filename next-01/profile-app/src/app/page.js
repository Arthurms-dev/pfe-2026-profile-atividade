import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-black text-white pt-12">
      <Profile />

      <h1 className="text-sm tracking-widest mb-16 pb-2">
        Site criado para a disciplina Programação Front-End
      </h1>
    </div>
  );
}