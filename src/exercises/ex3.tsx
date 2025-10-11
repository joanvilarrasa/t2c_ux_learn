import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function Ex3() {
  return (
    <div className="flex flex-col flex-grow">
      {/* Hero / Title */}
      <section className="relative overflow-hidden">
        <div className="px-6 pt-8 pb-6 md:pt-12 md:pb-10">
          <div className="mx-auto max-w-5xl text-center">
            <Badge className="mb-2" variant="secondary">Controlar l'estat</Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Dia 3 — Estat i gestió</h1>
            <p className="text-muted-foreground mt-3 text-base md:text-lg">
              Introducció a l'estat, actualitzacions i patrons bàsics de gestió.
            </p>
          </div>
        </div>
      </section>
      <Separator />

      {/* Content container matching max width */}
      <section className="px-6 py-6 md:py-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-muted-foreground">TODO</p>
        </div>
      </section>
    </div>
  );
}
