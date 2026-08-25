# components/animations/

Composants d'animation "premium" (type Magic UI / 21st.dev / Aceternity) :
text reveals, spotlight cards, marquees custom, curseurs personnalisés,
effets de parallax, etc.

## Règles

- **Un fichier par composant**, nom en kebab-case (`text-reveal.tsx`,
  `spotlight-card.tsx`). Pas de fichier fourre-tout.
- **`"use client"` en première ligne** — ces composants animent au
  render du navigateur, ils ne peuvent pas être des Server Components.
- **Auto-suffisants** : props avec valeurs par défaut sensées, aucune
  dépendance à un state global ou à un contexte du reste du site. On
  doit pouvoir copier un seul fichier dans un autre projet et qu'il
  marche.
- **Librairie d'animation : `motion` (le successeur de Framer Motion,
  import `from "motion/react"`)**, pas `framer-motion`. Le projet
  utilise déjà `motion` (voir `templates/rivr/`) ; on ne mélange pas
  deux librairies d'animation dans le même bundle. Si un snippet copié
  (Magic UI, 21st.dev...) importe `from "framer-motion"`, l'import est
  réécrit vers `from "motion/react"` avant intégration — l'API est
  quasi identique.
- **Ne touche jamais aux fichiers de `templates/`** pour brancher une
  animation : la page importe le composant animé et lui passe des
  props/children, jamais l'inverse.

## Différence avec `components/ui/`

`components/ui/` est réservé aux primitives shadcn/ui installées via
`npx shadcn add ...` (button, dialog, input...). Ce dossier-ci est pour
les blocs animés plus complexes et plus visuels, à usage ponctuel sur
une page.
