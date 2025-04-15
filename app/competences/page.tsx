export default function Competences() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Mes Compétences</h1>
      <p className="text-xl text-muted-foreground">
        Une vue détaillée de mes compétences techniques et professionnelles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Génie Mécanique</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Conception (CAO/DAO)</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">SolidWorks</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">AutoCAD</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Gestion de Production</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Développement Web & Programmation</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Python</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">HTML/CSS</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">JavaScript</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">APIs & Intégration</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">React & Next.js</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">TailwindCSS</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-4">Compétences techniques spécifiques</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg shadow text-center">CATIA</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Analyses FEM</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Procédés d'usinage</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Analyse mécanique</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Contrôle qualité</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Métrologie</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Maintenance industrielle</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Prototypage</div>
        </div>
      </div>

      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-4">Cloud & Virtualisation</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg shadow text-center">Docker</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Google Cloud</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Linux</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">VNC</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Administration système</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Shell scripting</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Cloud shell</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Virtualisation</div>
        </div>
      </div>

      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-4">API & Backend</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg shadow text-center">Flask</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Python Backend</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Webhooks</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">REST API</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Base64 Encoding</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Vercel Deployment</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">API Security</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Serverless</div>
        </div>
      </div>

      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-4">Automatisation & Outils</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg shadow text-center">Google Colab</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">API Integration</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Web Scraping</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">Automatisation</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">HTTP/REST</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">JSON</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">OAuth</div>
          <div className="bg-card p-4 rounded-lg shadow text-center">CI/CD</div>
        </div>
      </div>

      <div className="pt-8">
        <h2 className="text-2xl font-semibold mb-4">Langues</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card p-4 rounded-lg shadow">
            <div className="text-center font-medium mb-2">Français</div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg shadow">
            <div className="text-center font-medium mb-2">Arabe</div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-lg shadow">
            <div className="text-center font-medium mb-2">Anglais</div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 