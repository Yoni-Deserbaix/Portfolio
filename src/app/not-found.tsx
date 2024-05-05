import Title from "@/components/ui/Title";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function notFound() {
  return (
    <div className="max-w-6xl mx-auto max-xl:px-8">
      <Header />
      <div>
        <Title
          text="Page non trouvée 🚧
        "
          className="flex flex-col mt-12 items-center justify-center text-3xl -rotate-6"
        />
        <div className="mt-12 justify-center flex">
          <Link
            href="/"
            className="bg-green-500 hover:bg-indigo-500 transition-all text-white font-bold py-2 px-4 rounded"
          >
            👈 Retourner à la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
