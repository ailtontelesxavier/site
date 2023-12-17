import NewletterForm from "@/components/newsletter/newsletter-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl md:text-6xl">
        E' um pecado o que eu ensino aqui.
      </h1>
      <h2
        className="text-4xl md:text-6xl font-extrabold text-transparent
    bg-gradient-to-r from-green-400 to-orange-600 bg-clip-text"
      >
        Newsletter
      </h2>
      <NewletterForm />
    </main>
  );
}
