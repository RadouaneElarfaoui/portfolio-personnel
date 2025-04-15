export default function Formation() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Mon Parcours Éducatif</h1>
      <p className="text-xl text-muted-foreground">
        Découvrez mon parcours académique et mes formations.
      </p>

      <div className="mt-8 space-y-8">
        <div className="bg-card p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Cycle d&apos;Ingénieur</h2>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">2025</span>
          </div>
          <h3 className="text-xl text-muted-foreground mb-2">Génie Mécanique - 1ère Année</h3>
          <p className="mb-2"><span className="font-medium">Institution:</span> École Nationale des Sciences Appliquées de Fès</p>
          <p className="mb-4"><span className="font-medium">Localisation:</span> Fès, Maroc</p>
          
          <div className="mt-6">
            <h4 className="font-medium mb-2">Domaines d&apos;études:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Conception avancée et analyse mécanique</li>
              <li>Modélisation numérique et simulation</li>
              <li>Mécanique des fluides et thermodynamique</li>
              <li>Matériaux avancés pour l&apos;ingénierie</li>
              <li>Automatisation et systèmes de contrôle</li>
            </ul>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Licence Professionnelle</h2>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">2024</span>
          </div>
          <h3 className="text-xl text-muted-foreground mb-2">Génie Industriel et Logistique</h3>
          <p className="mb-2"><span className="font-medium">Institution:</span> École Supérieure de Technologie de Casablanca</p>
          <p className="mb-4"><span className="font-medium">Localisation:</span> Casablanca, Maroc</p>
          
          <div className="mt-6">
            <h4 className="font-medium mb-2">Compétences acquises:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestion de la chaîne logistique (Supply Chain Management)</li>
              <li>Optimisation des processus industriels</li>
              <li>Planification et ordonnancement de production</li>
              <li>Gestion des stocks et approvisionnements</li>
              <li>Systèmes d&apos;information logistique</li>
            </ul>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Diplôme Universitaire de Technologie</h2>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">2023</span>
          </div>
          <h3 className="text-xl text-muted-foreground mb-2">Génie Mécanique et Productique</h3>
          <p className="mb-2"><span className="font-medium">Institution:</span> École Supérieure de Technologie de Casablanca</p>
          <p className="mb-4"><span className="font-medium">Localisation:</span> Casablanca, Maroc</p>
          
          <div className="mt-6">
            <h4 className="font-medium mb-2">Compétences acquises:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Conception mécanique et modélisation 3D</li>
              <li>Analyse et simulation des systèmes mécaniques</li>
              <li>Techniques de production et fabrication</li>
              <li>Gestion de projets industriels</li>
              <li>Automatismes et contrôle de systèmes</li>
            </ul>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Baccalauréat</h2>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">2021</span>
          </div>
          <h3 className="text-xl text-muted-foreground mb-2">Sciences et Technologies Mécaniques</h3>
          <p className="mb-2"><span className="font-medium">Institution:</span> Lycée Imam El Ghazali</p>
          <p className="mb-4"><span className="font-medium">Localisation:</span> Sidi Bennour, Maroc</p>
          
          <div className="mt-6">
            <h4 className="font-medium mb-2">Matières principales:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mécanique et conception</li>
              <li>Mathématiques appliquées</li>
              <li>Physique et sciences de l'ingénieur</li>
              <li>Dessin technique</li>
              <li>Technologie industrielle</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Compétences techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-5 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-3">Conception et Modélisation</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>AutoCAD</li>
              <li>SolidWorks</li>
              <li>CATIA</li>
              <li>Analyse par éléments finis</li>
            </ul>
          </div>
          
          <div className="bg-card p-5 rounded-lg shadow">
            <h3 className="text-xl font-medium mb-3">Fabrication et Production</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Procédés d'usinage</li>
              <li>Contrôle qualité</li>
              <li>Gestion de production</li>
              <li>Maintenance industrielle</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 