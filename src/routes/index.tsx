import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, Truck, ShieldCheck, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/combo-real.jpeg.asset.json";
import airpodsAsset from "@/assets/airpods-real.jpeg.asset.json";
import fundasAsset from "@/assets/fundas-real.jpeg.asset.json";
import accesoriosAsset from "@/assets/accesorios-real.jpeg.asset.json";

const TITLE = "Importados Caballito | AirPods y fundas en CABA";
const DESC =
  "Importados Caballito: AirPods 2 Pro, fundas para todos los modelos y accesorios. Envíos a todo el país desde Caballito, CABA.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const IG = "https://www.instagram.com/importados_caballito_/";
const TT = "https://www.tiktok.com/@importados_caball";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className ?? "h-4 w-4"}>
      <path d="M16.5 2h-2.9v14.1a2.6 2.6 0 1 1-2.6-2.6c.2 0 .5 0 .7.1v-3a5.6 5.6 0 1 0 4.8 5.5V9.4c1 .7 2.2 1.1 3.5 1.2V7.7a4.2 4.2 0 0 1-3.5-4.1V2z" />
    </svg>
  );
}

const productos = [
  {
    nombre: "AirPods 2 Pro",
    desc: "Audio premium, cancelación de ruido y la mejor calidad del mercado.",
    img: airpodsAsset.url,
    tags: ["Audio premium", "ANC", "Garantía"],
  },
  {
    nombre: "Fundas",
    desc: "Todos los modelos, el color que más te guste. Calidad premium.",
    img: fundasAsset.url,
    tags: ["Todos los modelos", "+30 colores"],
  },
  {
    nombre: "Accesorios",
    desc: "Cables, cargadores y power banks para tu día a día.",
    img: accesoriosAsset.url,
    tags: ["Cables", "Cargadores", "Power banks"],
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card font-display text-sm tracking-widest">
        <span className="text-foreground">I</span>
        <span className="mx-0.5 text-primary">|</span>
        <span className="text-primary">C</span>
      </div>
      <div className="leading-tight">
        <p className="font-display text-xs tracking-[0.28em] text-foreground">IMPORTADOS</p>
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground">CABALLITO</p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#productos" className="transition-colors hover:text-foreground">Productos</a>
            <a href="#envios" className="transition-colors hover:text-foreground">Envíos</a>
            <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          </nav>
          <Button asChild size="sm">
            <a href={IG} target="_blank" rel="noopener noreferrer">
              <Instagram /> Consultar
            </a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs tracking-[0.2em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> CABALLITO, CABA
              </span>
              <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Tu próximo accesorio favorito está acá
              </h1>
              <p className="mt-5 max-w-md text-base text-muted-foreground">
                AirPods, fundas y accesorios importados con los mejores precios. Entregas en el día
                en CABA y envíos a todo el país.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="shadow-glow">
                  <a href={IG} target="_blank" rel="noopener noreferrer">
                    <Instagram /> Comprar por Instagram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={TT} target="_blank" rel="noopener noreferrer">
                    <TikTokIcon /> Ver TikTok
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroAsset.url}
                alt="Combo AirPods 2 Pro y funda celeste en Importados Caballito"
                width={1200}
                height={1600}
                className="aspect-[4/5] w-full rounded-3xl border border-border object-cover shadow-card"
              />
              <div className="absolute -bottom-5 left-5 rounded-2xl border border-primary/30 bg-card px-5 py-3 shadow-glow">
                <p className="font-display text-lg text-foreground">AirPods + Funda</p>
                <p className="text-sm text-primary">Promo combo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3">
            {[
              { icon: Truck, t: "Envíos a todo el país", d: "Despachamos en 24hs hábiles." },
              { icon: ShieldCheck, t: "Calidad premium", d: "Productos testeados uno por uno." },
              { icon: Headphones, t: "Atención personalizada", d: "Te asesoramos por MD de Instagram." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-display text-sm text-foreground">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Productos */}
        <section id="productos" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
            Productos en venta
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Consultá stock y precios actualizados por mensaje directo.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {productos.map((p) => (
              <article
                key={p.nombre}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={p.img}
                  alt={p.nombre}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="font-display text-xl text-card-foreground">{p.nombre}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button asChild variant="secondary" className="mt-6 w-full">
                    <a href={IG} target="_blank" rel="noopener noreferrer">
                      <Instagram /> Consultar precio por IG
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Envíos */}
        <section id="envios" className="border-y border-border bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
                Cómo comprar
              </h2>
              <ol className="mt-8 space-y-6">
                {[
                  ["Elegí tu producto", "Mirá el catálogo y decinos qué modelo y color querés."],
                  ["Escribinos", "Te pasamos precio, stock y formas de pago al instante."],
                  ["Recibilo", "Entrega en Caballito o envío a todo el país."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm text-primary-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-foreground">{t}</p>
                      <p className="text-sm text-muted-foreground">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div
              id="contacto"
              className="flex flex-col justify-center rounded-3xl border border-primary/25 bg-hero-gradient p-8 shadow-glow"
            >
              <h2 className="font-display text-2xl text-foreground">Consultas al MD</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Respondemos todos los días. Contanos qué estás buscando y te armamos el mejor precio.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <Button asChild size="lg">
                  <a href={IG} target="_blank" rel="noopener noreferrer">
                    <Instagram /> @importados_caballito_
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={TT} target="_blank" rel="noopener noreferrer">
                    <TikTokIcon /> TikTok
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
        <Logo />
        <p className="text-xs text-muted-foreground">
          Caballito, CABA · Entregas a todo el país · © {new Date().getFullYear()} Importados
          Caballito
        </p>
      </footer>
    </div>
  );
}
