const RIVR_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
.rivr {
  --background: #fafafa;
  --foreground: #111111;
  --card: #ffffff;
  --card-foreground: #111111;
  --popover: #ffffff;
  --popover-foreground: #111111;
  --primary: #df6035;
  --primary-foreground: #ffffff;
  --secondary: #f2f2f2;
  --secondary-foreground: #111111;
  --muted: #f2f2f2;
  --muted-foreground: #6b7280;
  --accent: #f2f2f2;
  --accent-foreground: #111111;
  --destructive: #c1392b;
  --destructive-foreground: #ffffff;
  --border: #e5e5e5;
  --input: #e5e5e5;
  --ring: #df6035;
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
