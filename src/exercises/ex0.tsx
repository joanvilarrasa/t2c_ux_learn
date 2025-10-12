import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ExHeader } from "@/components/ex-header";
import { Button } from "@/components/ui/button";


export function Ex0() {
  return (
    <div className="flex flex-col flex-grow">
      {/* Hero */}
      <ExHeader
        title="Dia 0 - De la WWII a Next"
        descriptions={[
          "Un viatge cronològic a través de la història del web, des la conceptualització de hypertext fins als frameworks moderns",
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
              {/* 1945 - As We May Think */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    1945
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">'As We May Think' - Vannevar Bush</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Visionaris imaginant el futur
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        'Truly significant attainments become lost in the mass of the inconsequential.'
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        'We can enormously extend the record; yet even in its present bulk we can hardly consult it. This is a much larger matter than merely the extraction of data for the purposes of scientific research; it involves the entire process by which man profits by his inheritance of acquired knowledge.'
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        'Selection by association, rather than indexing, may yet be mechanized. One cannot hope thus to equal the speed and flexibility with which the mind follows an associative trail, but it should be possible to beat the mind decisively in regard to the permanence and clarity of the items resurrected from storage.'
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        'Consider a future device for individual use, which is a sort of mechanized private file and library. It needs a name, and, to coin one at random, "memex" will do. A memex is a device in which an individual stores all his books, records, and communications, and which is mechanized so that it may be consulted with exceeding speed and flexibility. It is an enlarged intimate supplement to his memory.'
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        'The applications of science have built man a well-supplied house, and are teaching him to live healthily therein. They have enabled him to throw masses of people against one another with cruel weapons. They may yet allow him truly to encompass the great record and to grow in the wisdom of race experience. He may perish in conflict before he learns to wield that record for his true good. Yet, in the application of science to the needs and desires of man, it would seem to be a singularly unfortunate stage at which to terminate the process, or to lose hope as to the outcome.'
                      </p>
                      <div className="flex justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/The_Memex_%283002477109%29.jpg/960px-The_Memex_%283002477109%29.jpg" alt="'As We May Think' - Vannevar Bush" className="w-full h-auto" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a className="text-primary" href="https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881" target="_blank" rel="noopener noreferrer">
                        As We May Think - Vannevar Bush
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* 1968 - La Demo */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    1968
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">'The Mother of All Demos'</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Douglas Engelbart fa una demostració de què és un ordinador personal
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Introdueix conceptes com el ratolí, finestres, i la navegació per hiperenllaços que esdevindran estàndard.
                      </p>
                      <div className="flex justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/SRI_Douglas_Engelbart_1968.jpg" alt="La Demo" className="w-full h-auto" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a className="text-primary" href="https://www.youtube.com/watch?v=UhpTiWyVa6k" target="_blank" rel="noopener noreferrer">
                        The Mother of All Demos
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* 1989-1990 - Naixement de la World Wide Web */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    1989-1990
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">Naixement de la World Wide Web</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Tim Berners-Lee crea HTML i HTTP
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Tim Berners-Lee, treballant al CERN, desenvolupa HTML, HTTP i el primer navegador web (WorldWideWeb).
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        HTML et dóna la posibilitat donar sentit semàntic a parts de un text i enllaçar-lo amb un altre text.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        HTTP defineix com un client pot demanar una pàgina, crear-la, actualitzar-la...
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Una versió restaurada de la primera pàgina web es pot trobar a info.cern.ch.
                      </p>
                      <div className="flex justify-center">
                        <img src="https://browser.engineering/im/worldwideweb.png" alt="Naixement de la World Wide Web" className="w-full h-auto" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a className="text-primary" href="https://line-mode.cern.ch/www/hypertext/WWW/TheProject.html" target="_blank" rel="noopener noreferrer">
                        La primera pàgina web restaurada
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* 1993 - Mosaic */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    1993
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">Les guerres dels navegadors</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        La democratització del web
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (1990) Tim Berners-Lee crea el primer navegador web, WorldWideWeb, renombrat després a Nexus.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (1992) MacWWW/Samba, Line Mode Browser, ViolaWWW, Erwise, and MidasWWW.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (1993) Cello, Lynx, tkWWW, and Mosaic.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (1994) IBM Web Explorer, Navipress, SlipKnot, MacWeb, Browse. També es crea el W3C (World Wide Web Consortium) que més endavant passarà a ser WHATWG (Web Hypertext Application Technology Working Group) i el W3C crea el primer estàndard de CSS (contribucions de Håkon Wium Lie i Bert Bos).
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (1995) OmniWeb, Eolas WebRouser, UdiWWW, Internet Explorer 1.0.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Fins al 1995 Mosaic dominara el mercat de navegadors. Netscape Navigator (que originalment era Mosaic) gràcies en part a ser gratuït per usos no comercials, afaga el relleu i domina el mercat.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Microsoft i Internet Explorer s'acabarà imposant (ja que va inclòs de manera gratuïta en Windows). Més endavant, Netscape Navigator es tornarà Open Source i serà vengut a la Mozilla Foundation.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        A mitjans del 90 les diferents especificacions es van repartir de la seguent manera:
                        HTML governat per <a className="text-primary" href="https://whatwg.org/">WHATWG</a>,
                        CSS governat per <a className="text-primary" href="https://www.w3.org/">W3C (World Wide Web Consortium)</a>,
                        JavaScript governat per <a className="text-primary" href="https://tc39.es/">TC39 (Technical Committee 39)</a> de
                        <a className="text-primary" href="https://ecma-international.org/">ECMA (European Computer Manufacturers Association)</a>,
                        HTTP governat per <a className="text-primary" href="https://www.ietf.org/">IETF (Internet Engineering Task Force)</a>.
                      </p>
                      <div className="flex justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ea/NCSA_Mosaic_Browser_Screenshot.png" alt="Mosaic: El primer navegador popular" className="w-full h-auto" />
                      </div>
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Browser_Wars_%28en%29.svg/1920px-Browser_Wars_%28en%29.svg.png" alt="Netscape Navigator 2.0" className="w-full h-auto" />
                      </div>
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Browser_war-11.svg/1920px-Browser_war-11.svg.png" alt="Internet Explorer 7" className="w-full h-auto" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a className="text-primary" href="https://en.wikipedia.org/wiki/Browser_wars#First_Browser_War_(1995%E2%80%932001)" target="_blank" rel="noopener noreferrer">
                        Browser Wars
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* 1995 - JavaScript */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    1995
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">JavaScript arriba al web</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Interactivitat al client
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Brendan Eich crea JavaScript en només 10 dies per a Netscape Navigator.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Inicialment anomenat Mocha, després LiveScript, finalment JavaScript per aprofitar la popularitat de Java.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        La intenció era crear un llenguatge de scripting semblant a Java, però que fos més fàcil d'aprendre i utilitzar per gent no tant tècnica.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (1998) ECMA publica el primer estàndard ECMA-262.
                        <a className="text-primary" href="https://ecma-international.org/wp-content/uploads/ECMA-262_2nd_edition_august_1998.pdf" target="_blank" rel="noopener noreferrer">
                          ECMA-262
                        </a>
                      </p>
                      <div className="flex justify-center">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1280px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg" alt="JavaScript arriba al web" className="w-full h-auto" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>


              {/* 2005 - 2006 - AJAX i jQuery */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    2005-2006
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">AJAX i jQuery</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Millora la interacció i s'obre la porta a la SPA.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (2005) Jesse James Garrett crea el terme AJAX (Asynchronous JavaScript and XML), que permet actualitzar parts d'una pàgina sense recarregar-la completament.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (2006) jQuery és una biblioteca JavaScript que facilita la manipulació del DOM i l'execució d'AJAX.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        JQuery es converteix en la llibreria JavaScript més popular, normalitza les diferències entre navegadors i facilita treballar amb el DOM i amb AJAX.
                      </p>
                      <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ajax-vergleich-en.svg/781px-Ajax-vergleich-en.svg.png" alt="AJAX" className="w-full h-auto" />
                      </div>
                      <div>
                        <img src="https://us1.discourse-cdn.com/webflow1/original/3X/7/2/72248067eb9517705423b0c568b5b533d2dcdd7c.png" alt="jQuery" className="w-full h-auto" />
                      </div>
                      <div>
                        <img src="https://www.webdesignmuseum.org/uploaded/fullscreen/2008/gmail-2008.png" alt="Gmail" className="w-full h-auto" />
                      </div>

                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2010 - Backbone.js */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    2010
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">Backbone.js i AngularJS</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Model Vista Controlador (MVC) arriba a la web amb les primeres SPAs.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (Backbone.js) Jeremy Ashkenas crea Backbone.js, el primer framework JavaScript per a aplicacions d'una sola pàgina. Utilitza el MVC per crear objectes js que estan lligats a elements del DOM.
                        Els canvis en els models o en la vista es propaguen gràcies a <a className="text-primary" href="https://stackoverflow.com/questions/12604834/two-way-data-binding-in-backbone-js">"2-way data binding"</a>.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (AngularJS) Miško Hevery crea AngularJS, semblant a backbone.js però utilitza
                        <a className="text-primary" href="http://hueypetersen.com/posts/2013/06/17/angular_is_slow/#dirty-checking">"dirty checking"</a>
                        per mantenir el DOM sincronitzat amb el model.
                        Dirty checking + lligar attributs de l'html amb propietats de l'objecte li permet a angular actualitzar només part de les vistes de manera més precisa que no pas Backbone, que ha d'actualitzar tot el component html pertanyent a un model de cop (normalment substituint l'innerHTML).
                      </p>
                      <div className="flex justify-center items-center">
                        <div className="w-2/3">
                          <img src="https://www.tutorialspoint.com/backbonejs/images/backbonearch.jpg" alt="MVC" className="w-full h-auto" />
                        </div>
                        <div className="w-1/3">
                          <img src="https://vabadus.es/images/cache/imagen_nodo/images/articulos/5c9df03f9d512676337947.jpg" alt="Backbone.js" className="w-full h-auto" />
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="w-2/3">
                          <img src="https://ayehiaa.wordpress.com/wp-content/uploads/2017/02/capture1.png" alt="Dirty checking" className="w-full h-auto" />
                        </div>
                        <div className="w-1/3">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Angularjsoldicon.png" alt="AngularJS" className="w-full h-auto" />
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Durant aquesta etapa també es comença a desenvolupar l'ecosistema per gestionar dependències, modularitzar el codi i minificar-lo (cada cop s'envia més codi al client).
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (Node.js) Ryan Dahl crea Node.js, un runtime de JavaScript per a executar codi JavaScript fora del navegador (en el servidor). Frameworks com Express.js no tardaràn en tornar-se populars.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (Webpack) un empaquetador de mòduls JavaScript que permet modularitzar el codi i minificar-lo.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        (npm) Isaac Z. Schlueter crea npm, el gestor de paquets JavaScript.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Amb totes aquestes eines es normalitza el MEAN (MongoDB, Express, Angular, Node.js) stack per poder crear prototips de aplicacions web complexes de manera ràpida.
                      </p>
                      <div>
                        <img src="https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2023/01/Mean-Tech-stack.png" alt="Mean Stack" className="w-full h-auto" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2013 - React */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    2013
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">React: Components i Virtual DOM</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        La revolució dels components
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Facebook llança React, introduint el concepte de components reutilitzables i el Virtual DOM (arbre de components de React).
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        En comptes de tenir 2 way data binding, quan hi ha qualsevol canvi React torna a renderitzar tot. Bé, no tot. Renderitza (calcula) a partir del node que ha canviat. Modifica al DOM només el nodes que fan falta.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        React inspira un nou paradigma de desenvolupament frontend centrat en components en comptes de en MVC.
                      </p>
                      <div className="flex justify-center items-center">
                        <div className="w-2/3">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVwkqqr5mIfqAylEp1WCCbmngvyIvg-4S4mA8ZHxvpbtCarf0aeBmJYv7r0Lfiuwwai_c&usqp=CAU" alt="React" className="w-full h-auto" />
                        </div>
                        <div className="w-1/3">
                          <img src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" alt="React" className="w-full h-auto" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2017-Present - Meta-frameworks */}
              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    2017-Present
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">Meta-frameworks</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        Next.js, Nuxt, Svelte
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Degut a les eines i democratització de crear pàgines web comencen a sortir meta-frameworks. Utilitzant React, Angular o Vue pots crear una aplicació complexa i que funciona sense tenir una gran capacitat tècnica. Però arriba un punt en què aquesta aplicació no escala.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        Per solventar aquest problema han aparegut nous frameworks i meta-frameworks (framework per sobre de React) que intenten solucionar el problema de differents maneres.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://nextjs.org/">Next.js</a> introdueix Server-Side Rendering (SSR) i hydration intentant portar part de la computació al servidor (com es feia abans) i intentant el camí fàcil de seguir sigui també el que escala.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://svelte.dev/">Svelte</a> per altra banda ofereix una alternativa sense virtual DOM, compila el codi per poder fer el 2-way data binding eficientment.
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        El propi React també està desenvolupant un <a className="text-primary" href="https://react.dev/learn/react-compiler">compilador</a> per poder "compilar" react a react que no es rerenderitzi tant (en comptes de intentar crear una via fàcil volen arreglar la merda per darrere).
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://solidjs.com/">Solid</a> també intenta portar una via fàcil sense necessitat del virtual DOM. En aquest cas utilitzant signals (Angular també les està adoptant).
                      </p>
                      <div className="flex justify-center items-center">
                        <div className="w-1/3">
                          <img src="https://images.ctfassets.net/crb83veve8xb/2YfNwMlyl1U0DLVXRgL8TB/9e8474e083f2ba01a296343d84f2282d/vercel_thumbnail.webp" alt="Vercel" className="w-full h-auto" />
                        </div>
                        <div className="w-1/3">
                          <img src="https://blog.nashtechglobal.com/wp-content/uploads/2023/05/svelte-1024x576.jpg" alt="Svelte" className="w-full h-auto" />
                        </div>
                        <div className="w-1/3">
                          <img src="https://i.ytimg.com/vi/8Ou6domKfU4/sddefault.jpg" alt="Solid" className="w-full h-auto" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>


              <div className="relative flex items-center gap-6">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <Badge variant="outline" className="font-mono bg-accent text-lg font-bold">
                    -
                  </Badge>
                </div>
                <div className="flex-1 min-w-0">
                  <Card className="ml-4">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-xl">Llegeix més</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/">As We May Think - Vannevar Bush</a>
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://en.wikipedia.org/wiki/Browser_wars#First_Browser_War_(1995%E2%80%932001)">Browser Wars - Wikipedia</a>
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://browser.engineering/history.html">Web Browser Engineering - Pavel Panchekha, Chris Harrelson</a>
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://hypermedia.systems/hypermedia-a-reintroduction/#_a_brief_history_of_hypermedia">Hypermedia Systems - Carson Gross, Adam Stepinski, Deniz Akşimşek</a>
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://deno.com/blog/history-of-javascript">A Brief History of JavaScript - Deno, Ryan Dahl</a>
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://www.youtube.com/watch?v=8pDqJVdNa44">How A Small Team of Developers Created React at Facebook - CultRepo</a>
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-justify">
                        <a className="text-primary" href="https://www.youtube.com/watch?v=LB8KwiiUGy0">Node.js: An origin story - CultRepo</a>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
