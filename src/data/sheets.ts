export interface Chapter {
  title: string;
  content: string;
}

export interface Sheet {
  slug: string;
  title: string;
  category: string;
  description: string;
  chapters: Chapter[];
}

export const sheets: Sheet[] = [
  {
    slug: "incendie-generalites",
    title: "Incendie : Généralités",
    category: "Incendie",
    description: "Les fondamentaux de la lutte contre l'incendie, le triangle du feu, et les modes de propagation.",
    chapters: [
      {
        title: "Le triangle du feu",
        content: `
          <p class="mb-4">Pour qu'un feu se déclare, trois éléments sont indispensables et doivent être réunis simultanément :</p>
          <ul class="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Le combustible :</strong> Ce qui brûle (bois, papier, essence, gaz...).</li>
            <li><strong>Le comburant :</strong> Ce qui permet de brûler (généralement l'oxygène de l'air).</li>
            <li><strong>L'énergie d'activation :</strong> La source de chaleur (étincelle, flamme, chaleur...).</li>
          </ul>
          <p>Si l'un de ces éléments est supprimé, le feu s'éteint.</p>
        `
      },
      {
        title: "Les modes de propagation",
        content: `
          <p class="mb-4">Le feu peut se propager de différentes manières :</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Conduction :</strong> Transmission de la chaleur au sein d'un même matériau ou entre deux matériaux en contact.</li>
            <li><strong>Convection :</strong> Déplacement de gaz chauds et de fumées qui s'accumulent en hauteur.</li>
            <li><strong>Rayonnement :</strong> Transmission de la chaleur par ondes électromagnétiques (sans contact).</li>
            <li><strong>Projection :</strong> Déplacement d'objets enflammés (escarbilles).</li>
          </ul>
        `
      },
      {
        title: "Les classes de feu",
        content: `
          <p class="mb-4">Les feux sont classés selon la nature du combustible :</p>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Classe A :</strong> Feux de solides (bois, papier, tissus...).</li>
            <li><strong>Classe B :</strong> Feux de liquides ou solides liquéfiables (essence, alcool, plastiques...).</li>
            <li><strong>Classe C :</strong> Feux de gaz (butane, propane, gaz naturel...).</li>
            <li><strong>Classe D :</strong> Feux de métaux (sodium, magnésium...).</li>
            <li><strong>Classe F :</strong> Feux d'auxiliaires de cuisson (huiles et graisses végétales ou animales).</li>
          </ul>
        `
      }
    ]
  },
  {
    slug: "secourisme-bilan",
    title: "Secourisme : Le Bilan",
    category: "Secourisme",
    description: "Méthodologie du bilan secouriste : XABCDE, constantes, et transmission.",
    chapters: [
      {
        title: "L'approche",
        content: "Sécurité, Scène, Situation. Avant tout, assurer la sécurité des intervenants et de la victime."
      },
      {
        title: "Bilan vital (XABCDE)",
        content: "X: Hémorragie massive, A: Voies aériennes, B: Respiration, C: Circulation, D: Neurologique, E: Exposition/Environnement."
      }
    ]
  },
  {
    slug: "culture-administrative",
    title: "Culture Administrative",
    category: "Culture Pro",
    description: "Organisation de la sécurité civile, grades, et hiérarchie.",
    chapters: [
      {
        title: "Les grades",
        content: "Sapeur, Caporal, Sergent, Adjudant, Lieutenant, Capitaine, Commandant, Lieutenant-Colonel, Colonel."
      }
    ]
  }
];
