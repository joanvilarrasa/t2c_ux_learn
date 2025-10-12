import { Separator } from "@/components/ui/separator";
import { ExHeader } from "@/components/ex-header";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const accordionItems = [
  {
    title: "Responding to Events",
    href: "https://react.dev/learn/responding-to-events",
  },
  {
    title: "State: A Component's Memory",
    href: "https://react.dev/learn/state-a-components-memory",
  },
  {
    title: "Render and Commit",
    href: "https://react.dev/learn/render-and-commit",
  }
];

export function Ex3() {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [openAccordion, setOpenAccordion] = useState<string>("");

  const toggleSection = (sectionId: string) => {
    setCompletedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
        if (openAccordion === sectionId) {
          setOpenAccordion("");
        }
      }
      return newSet;
    });
  };

  const handleAccordionChange = (value: string) => {
    if (completedSections.has(value)) {
      return;
    }
    setOpenAccordion(value);
  };

  return (
    <div className="flex flex-col flex-grow">
      <ExHeader
        title="Dia 3 - Events i estat"
        descriptions={[
          "Com reaccionem al events de l'usuari?",
          "Com 'mantenim' dades dins d'un component?",
          "Cicle de vida de React, què significa que react es renderitza?"
        ]}
        badge="React Render"
      />
      <Separator />

      <section className="px-6 py-6 md:py-8">
        <div className="mx-auto max-w-5xl flex flex-col gap-4">
          <Accordion
            type="single"
            collapsible
            className="w-full flex-grow overflow-y-hidden"
            value={openAccordion}
            onValueChange={handleAccordionChange}
          >
            {accordionItems.map((item, index) => {
              const itemId = `item-${index + 1}`;
              return (
                <AccordionItem
                  key={itemId}
                  value={itemId}
                  className={completedSections.has(itemId) ? "opacity-50" : ""}
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      checked={completedSections.has(itemId)}
                      onCheckedChange={() => toggleSection(itemId)}
                      className="shrink-0"
                    />
                    <AccordionTrigger
                      className={`text-md font-semibold hover:no-underline ${completedSections.has(itemId) ? "pointer-events-none cursor-default line-through" : ""}`}
                    >
                      {item.title}
                    </AccordionTrigger>
                  </div>
                  <AccordionContent>
                    <div className="w-full border rounded-lg overflow-hidden" style={{ height: 'calc(100vh - 300px)', minHeight: '500px' }}>
                      <iframe
                        src={item.href}
                        className="w-full h-full"
                        title={`${item.title} - React Documentation`}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
