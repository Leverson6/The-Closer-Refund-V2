const RIVR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
.rivr {
  --background: hsl(24 33% 97%);
  --foreground: hsl(30 8% 15%);
  --card: hsl(0 0% 100%);
  --card-foreground: hsl(30 8% 15%);
  --popover: hsl(0 0% 100%);
  --popover-foreground: hsl(30 8% 15%);
  --primary: hsl(0 56% 39%);
  --primary-foreground: hsl(0 0% 100%);
  --secondary: hsl(38 64% 89%);
  --secondary-foreground: hsl(30 8% 15%);
  --muted: hsl(22 21% 93%);
  --muted-foreground: hsl(30 7% 42%);
  --accent: hsl(43 91% 92%);
  --accent-foreground: hsl(30 8% 15%);
  --destructive: hsl(0 56% 39%);
  --destructive-foreground: hsl(0 0% 100%);
  --border: hsl(24 18% 87%);
  --input: hsl(24 18% 87%);
  --ring: hsl(0 56% 39%);
  font-family: "Plus Jakarta Sans", "Helvetica Neue", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif;
}
.rivr .font-display {
  font-family: "Plus Jakarta Sans", "Helvetica Neue", Helvetica, Arial, ui-sans-serif, system-ui, sans-serif;
  letter-spacing: -0.02em;
}
.rivr [data-slot="rivr-nav"] ul,
.rivr [data-slot="rivr-nav"] li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.rivr [data-slot="rivr-nav"] button {
  background-color: transparent;
  background-image: none;
  border: none;
  padding: 0;
  margin: 0;
}
.rivr [data-slot="rivr-nav"],
.rivr [data-slot="hero-title"],
.rivr [data-slot="hero"] p,
.rivr [data-slot="hero-docs"],
.rivr [data-slot="logo-cloud"],
.rivr button,
.rivr a {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  pointer-events: auto;
}
@keyframes rivr-title-shimmer {
  from {
    background-position: 200% center;
  }
  to {
    background-position: -200% center;
  }
}
`;

export function RivrStyles() {
  return <style dangerouslySetInnerHTML={{ __html: RIVR_CSS }} />;
}
