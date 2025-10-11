import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ExHeader } from "@/components/ex-header";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    year: "1945",
    title: "'As We May Think' - Vannevar Bush",
    description: "Visionaris imaginant el futur",
    content: [
      "'Truly significant attainments become lost in the mass of the inconsequential.'",
      "'We can enormously extend the record; yet even in its present bulk we can hardly consult it. This is a much larger matter than merely the extraction of data for the purposes of scientific research; it involves the entire process by which man profits by his inheritance of acquired knowledge.'",
      "'Selection by association, rather than indexing, may yet be mechanized. One cannot hope thus to equal the speed and flexibility with which the mind follows an associative trail, but it should be possible to beat the mind decisively in regard to the permanence and clarity of the items resurrected from storage.'",
      "'Consider a future device for individual use, which is a sort of mechanized private file and library. It needs a name, and, to coin one at random, “memex” will do. A memex is a device in which an individual stores all his books, records, and communications, and which is mechanized so that it may be consulted with exceeding speed and flexibility. It is an enlarged intimate supplement to his memory.'",
      "'The applications of science have built man a well-supplied house, and are teaching him to live healthily therein. They have enabled him to throw masses of people against one another with cruel weapons. They may yet allow him truly to encompass the great record and to grow in the wisdom of race experience. He may perish in conflict before he learns to wield that record for his true good. Yet, in the application of science to the needs and desires of man, it would seem to be a singularly unfortunate stage at which to terminate the process, or to lose hope as to the outcome.'"

    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/The_Memex_%283002477109%29.jpg/960px-The_Memex_%283002477109%29.jpg",
    link: "https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881"
  },
  {
    year: "1968",
    title: "La Demo",
    description: "Douglas Engelbart revoluciona la computació",
    content: [
      "Engelbart presenta la primera demostració d'un ordinador personal tal com el coneixem avui dia (tot en un).",
      "Introdueix conceptes com el ratolí, finestres, i la navegació per hiperenllaços que esdevindran estàndard.",
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/SRI_Douglas_Engelbart_1968.jpg",
    link: "https://dougengelbart.org/content/view/209"
  },
  {
    year: "1989-1990",
    title: "Naixement de la World Wide Web",
    description: "Tim Berners-Lee crea HTML i HTTP",
    content: [
      "Tim Berners-Lee, treballant al CERN, desenvolupa HTML, HTTP i el primer navegador web.",
      "HTML permet marcar contingut amb etiquetes semàntiques i crear enllaços entre documents.",
      "HTTP defineix com els navegadors i servidors es comuniquen per transferir pàgines web.",
      "El primer lloc web, info.cern.ch, encara existeix avui."
    ],
    image: "https://browser.engineering/im/worldwideweb.png",

  },
  {
    year: "1993",
    title: "Mosaic: El primer navegador popular",
    description: "La democratització del web",
    content: [
      "Mosaic és el primer navegador que suporta imatges i text en la mateixa pàgina.",
      "El van seguir Netscape Navigator (el primer navegador comercial) i Internet Explorer (1995) després que Bill Gates enviés cartes a la part executiva de Microsoft defensant que el futur era internt.",
      "Inici de la primera guerra dels navegadors."
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/NCSA_Mosaic_Browser_Screenshot.png",
    link: "https://en.wikipedia.org/wiki/Browser_wars#First_Browser_War_(1995%E2%80%932001)"
  },
  {
    year: "1995",
    title: "JavaScript arriba al web",
    description: "Interactivitat al client",
    content: [
      "Brendan Eich crea JavaScript en només 10 dies per a Netscape Navigator.",
      "Inicialment anomenat Mocha, després LiveScript, finalment JavaScript per aprofitar la popularitat de Java.",
      "La intenció era crear un llenguatge de scripting semblant a Java, però que fos més fàcil d'aprendre i utilitzar per gent no tant tècnica."
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1280px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
  },
  {
    year: "1996-1998",
    title: "CSS",
    description: "Separem els estils del contingut",
    content: [
      "CSS (Cascading Style Sheets) permet separar el contingut (HTML) de la presentació (estils).",
      "CSS1 (1996) introdueix fonts, colors, marge i padding.",
      "CSS2 (1998) afegeix posicionament, z-index i suport per a mitjans diferents.",
    ],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/H%C3%A5kon_Wium_Lie.jpg/1024px-H%C3%A5kon_Wium_Lie.jpg",
  },
  {
    year: "2005",
    title: "AJAX",
    description: "Actualitzacions sense recarregar tota la pàgina",
    content: [
      "Jesse James Garrett crea el terme AJAX (Asynchronous JavaScript and XML).",
      "AJAX permet actualitzar parts d'una pàgina sense recarregar-la completament.",
      "S'obre la posibilitat de crear aplicacions web, no tant sols pàgines (per exemple Gmail)."
    ],
  },
  {
    year: "2006",
    title: "jQuery",
    description: "Simplifiquem la modificació del DOM des de Javascript",
    content: [
      "John Resig crea jQuery per simplificar la manipulació del DOM i AJAX.",
      "jQuery normalitza les diferències entre navegadors i proporciona una API consistent.",
      "Esdevé la biblioteca JavaScript més popular, utilitzada en milions de llocs web.",
      "jQuery demostra el poder de les biblioteques JavaScript i inspira l'ecosistema modern."
    ],
  },
  {
    year: "2010",
    title: "Backbone.js: El primer framework SPA",
    description: "L'arquitectura MVC arriba al web",
    content: [
      "Jeremy Ashkenas crea Backbone.js, el primer framework JavaScript per a aplicacions d'una sola pàgina.",
      "Introdueix conceptes com models, vistes, col·leccions i enllaços de dades.",
      "Backbone.js estableix els patrons arquitectònics que seguiran Angular, React i Vue.",
    ],
  },
  {
    year: "2013",
    title: "React: Components i Virtual DOM",
    description: "La revolució dels components",
    content: [
      "Facebook llança React, introduint el concepte de components reutilitzables i el Virtual DOM.",
      "El Virtual DOM optimitza les actualitzacions de la interfície per millorar el rendiment.",
      "React inspira un nou paradigma de desenvolupament frontend centrat en components."
    ],
  },
  {
    year: "2014-2016",
    title: "Angular 2 i Vue.js",
    description: "L'ecosistema SPA madura",
    content: [
      "Angular 2 (2016) reescriu completament AngularJS amb TypeScript i components.",
      "Vue.js (2014) ofereix una alternativa més lleugera i accessible que React i Angular.",
      "Aquests frameworks popularitzen conceptes com routing del client, gestió d'estat i bundling.",
      "L'ecosistema JavaScript madura amb eines, biblioteques i comunitats robustes."
    ],
  },
  {
    year: "2017-Present",
    title: "Meta-frameworks",
    description: "Next.js, Nuxt, SvelteKit",
    content: [
      "Next.js (2016) introdueix Server-Side Rendering (SSR) i Static Site Generation (SSG) per React.",
      "Nuxt.js (2017) porta les mateixes capacitats a Vue.js.",
      "SvelteKit (2020) ofereix una alternativa amb compilació en temps de construcció.",
    ],
  },
  {
    year: "Futur",
    title: "El futur del web",
    description: "Cap a on anem?",
    content: [
      "Estem tornant parcialment al servidor. Ho farem del tot o ens quedarem en un model hibrid?",
      "Quin és el camí a seguir? Signals? Compiladors? SSR?",
      "Només el temps ho dirà..."
    ],
  }
];

export function Ex0() {
  return (
    <div className="flex flex-col flex-grow">
      {/* Hero */}
      <ExHeader
        title="Dia 0 - De la WWII a Next"
        descriptions={[
          "Un viatge cronològic a través de la història del web, des dels primers conceptes d'hipertext fins als frameworks moderns",
        ]}
        badge="Història de la Web"
      />

      <Separator />

      {/* Timeline */}
      <section className="px-6 py-6 md:py-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-center gap-6">
                  {/* Timeline dot */}
                  <div className="relative flex h-16 w-16 items-center justify-center">
                    <Badge variant="outline" className="font-mono bg-accent text-lg font-bold ">
                      {event.year}
                    </Badge>
                  </div>



                  {/* Event content */}
                  <div className="flex-1 min-w-0">
                    <Card className="ml-4">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {event.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {event.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-sm text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                        {event.image && (
                          <div className="flex justify-center">
                            <img src={event.image} alt={event.title} className="w-full h-auto" />
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                          {event.link}
                        </a>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
