import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <h1 className="text-5xl font-bold">Ingénieur en Génie Mécanique</h1>
        <h2 className="text-3xl font-medium text-primary">Radouane Elarfaoui</h2>
        <p className="text-xl text-muted-foreground">
          Spécialisé en conception mécanique et productique, avec des compétences en développement web.
        </p>
        <div className="flex gap-4 pt-4">
          <Button asChild>
            <Link href="/projets">Mes Projets</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Me Contacter</Link>
          </Button>
        </div>
      </section>

      <section className="pt-10">
        <h2 className="text-3xl font-semibold mb-4">À propos de moi</h2>
        <p className="text-lg">
          Étudiant en 1ère année du cycle d&apos;ingénieur en Génie Mécanique à l&apos;École Nationale des Sciences 
          Appliquées de Fès, titulaire d&apos;une Licence Professionnelle en Génie Industriel et Logistique et d&apos;un 
          DUT en Génie Mécanique et Productique. Je me spécialise dans la conception mécanique, 
          l&apos;optimisation des processus industriels et la gestion de la chaîne logistique. 
          Passionné également par le développement web, je crée des applications 
          modernes pour partager mes projets et compétences en ingénierie.
        </p>
      </section>
      
      <section className="pt-8">
        <h2 className="text-3xl font-semibold mb-4">Formation</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">1ère Année Cycle d&apos;Ingénieur en Génie Mécanique</h3>
            <p className="text-muted-foreground">École Nationale des Sciences Appliquées de Fès | 2025</p>
          </div>
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Licence Professionnelle en Génie Industriel et Logistique</h3>
            <p className="text-muted-foreground">École Supérieure de Technologie de Casablanca | 2024</p>
          </div>
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Diplôme Universitaire de Technologie en Génie Mécanique et Productique</h3>
            <p className="text-muted-foreground">École Supérieure de Technologie de Casablanca | 2023</p>
          </div>
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="text-xl font-medium">Baccalauréat en Sciences et Technologies Mécaniques</h3>
            <p className="text-muted-foreground">Lycée Imam El Ghazali, Sidi Bennour | 2021</p>
          </div>
        </div>
      </section>

      <section className="pt-6">
        <h2 className="text-3xl font-semibold mb-4">Compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg shadow">Python</div>
          <div className="bg-card p-4 rounded-lg shadow">Flask</div>
          <div className="bg-card p-4 rounded-lg shadow">Docker</div>
          <div className="bg-card p-4 rounded-lg shadow">Cloud Computing</div>
          <div className="bg-card p-4 rounded-lg shadow">React</div>
          <div className="bg-card p-4 rounded-lg shadow">Next.js</div>
          <div className="bg-card p-4 rounded-lg shadow">TypeScript</div>
          <div className="bg-card p-4 rounded-lg shadow">TailwindCSS</div>
          <div className="bg-card p-4 rounded-lg shadow">API Integration</div>
          <div className="bg-card p-4 rounded-lg shadow">Webhooks</div>
          <div className="bg-card p-4 rounded-lg shadow">Node.js</div>
          <div className="bg-card p-4 rounded-lg shadow">Git</div>
          <div className="bg-card p-4 rounded-lg shadow">UI/UX</div>
          <div className="bg-card p-4 rounded-lg shadow">Automatisation</div>
          <div className="bg-card p-4 rounded-lg shadow">Google Colab</div>
          <div className="bg-card p-4 rounded-lg shadow">Linux</div>
          <div className="bg-card p-4 rounded-lg shadow">REST API</div>
          <div className="bg-card p-4 rounded-lg shadow">Vercel</div>
        </div>
      </section>
    </div>
  )
}

