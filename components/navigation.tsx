import Link from "next/link"
import { Button } from "@/components/ui/button"

const Navigation = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Radouane Elarfaoui
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">Accueil</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/formation">Formation</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/projets">Projets</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/competences">Compétences</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

