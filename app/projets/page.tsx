import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Projets() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Mes Projets</h1>
      <p className="text-xl text-muted-foreground">
        Découvrez les projets sur lesquels j&apos;ai travaillé.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        <div className="bg-card p-6 rounded-lg shadow border-t-4 border-primary">
          <h2 className="text-2xl font-semibold">Animax</h2>
          <p className="my-4">
            Application Python sur Google Colab utilisant les serveurs Google pour télécharger des épisodes 
            d&apos;anime à très haute vitesse et les partager automatiquement sur une page Facebook via API.
          </p>
          <p className="text-sm text-muted-foreground mb-4">Technologies : Python, Google Colab, API Facebook, Automatisation</p>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link href="https://github.com/RadouaneElarfaoui/Animax" target="_blank">Voir le code</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="https://github.com/RadouaneElarfaoui/Animax/blob/main/Animax_fb_v1_0_3.ipynb" target="_blank">Notebook</Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow border-t-4 border-purple-500">
          <h2 className="text-2xl font-semibold">MistralOCR-Converter</h2>
          <p className="my-4">
            Application permettant de convertir des documents PDF en texte structuré à l&apos;aide de l&apos;API OCR 
            de Mistral AI. Prend en charge plusieurs formats de sortie (Markdown, HTML, ZIP) avec une interface 
            utilisateur conviviale propulsée par Gradio.
          </p>
          <p className="text-sm text-muted-foreground mb-4">Technologies : Python, API Mistral AI, OCR, Gradio, Markdown</p>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link href="https://github.com/RadouaneElarfaoui/mistral-ocr-converter" target="_blank">Voir le code</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="https://colab.research.google.com/github/RadouaneElarfaoui/mistral-ocr-converter/blob/master/mistral_ocr_solution.ipynb" target="_blank">Utilisation</Link>
            </Button>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow border-t-4 border-blue-400">
          <h2 className="text-2xl font-semibold">Free RDP Google</h2>
          <p className="my-4">
            Solution permettant d&apos;accéder à un bureau Linux avec une interface graphique directement 
            depuis Google Cloud Shell, offrant une connexion internet ultra-rapide (jusqu&apos;à 1.6 Gbps) 
            via Docker, sans avoir besoin de configurer une VM complète.
          </p>
          <p className="text-sm text-muted-foreground mb-4">Technologies : Docker, Google Cloud, Linux, VNC, XFCE/LXDE</p>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link href="https://github.com/RadouaneElarfaoui/free-RDP-google" target="_blank">Voir le code</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="https://github.com/RadouaneElarfaoui/free-RDP-google/blob/master/guide.md" target="_blank">Guide</Link>
            </Button>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow border-t-4 border-green-400">
          <h2 className="text-2xl font-semibold">🎩 AlfredBridge</h2>
          <p className="my-4">
            API déployée sur Vercel agissant comme un majordome digital qui gère élégamment les interactions 
            entre Facebook et des APIs tierces. Permet l'accès aux APIs même avec une connexion internet limitée (*6), 
            l'encodage/décodage sécurisé en base64, la validation des signatures webhook et offre une interface 
            de test interactive.
          </p>
          <p className="text-sm text-muted-foreground mb-4">Technologies : Python, Flask, Vercel, API Facebook, Base64, Webhooks</p>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link href="https://github.com/RadouaneElarfaoui/AlfredBridge" target="_blank">Voir le code</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="https://github.com/RadouaneElarfaoui/AlfredBridge#-documentation-api" target="_blank">Documentation</Link>
            </Button>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Conception d&apos;un système de transmission mécanique</h2>
          <p className="my-4">
            Projet de fin d&apos;études : conception et modélisation d&apos;un système de transmission mécanique optimisé 
            pour réduire les pertes d&apos;énergie et améliorer la durabilité.
          </p>
          <p className="text-sm text-muted-foreground mb-4">Technologies : SolidWorks, CATIA, Analyse par éléments finis</p>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link href="#" target="_blank">Voir le projet</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="#" target="_blank">Documentation</Link>
            </Button>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Optimisation d&apos;une ligne de production</h2>
          <p className="my-4">
            Analyse et amélioration d&apos;une chaîne de production industrielle avec implémentation
            des principes Lean Manufacturing pour réduire les délais et augmenter la productivité.
          </p>
          <p className="text-sm text-muted-foreground mb-4">Technologies : Microsoft Project, AutoCAD, Simulation de flux</p>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link href="#" target="_blank">Voir le projet</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="#" target="_blank">Résultats</Link>
            </Button>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Conception d&apos;un site portfolio</h2>
          <p className="my-4">
            Développement d&apos;un site web portfolio personnel en utilisant des technologies modernes
            pour présenter mes compétences et projets en génie mécanique et développement web.
          </p>
          <p className="text-sm text-muted-foreground mb-4">Technologies : Next.js, React, TailwindCSS</p>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link href="https://github.com" target="_blank">Voir le code</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="#" target="_blank">Démo</Link>
            </Button>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Prototype de système automatisé</h2>
          <p className="my-4">
            Conception et fabrication d&apos;un prototype de système automatisé pour le contrôle
            qualité en production, avec interface utilisateur et capteurs intégrés.
          </p>
          <p className="text-sm text-muted-foreground mb-4">Technologies : Arduino, Capteurs, Interface HMI</p>
          <div className="flex gap-4">
            <Button size="sm" asChild>
              <Link href="#" target="_blank">Voir le projet</Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="#" target="_blank">Schémas</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 