import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { ExHeader } from "@/components/ex-header";

const accordionItems = [
  {
    title: "Your First Component",
    href: "https://react.dev/learn/your-first-component"
  },
  {
    title: "Importing and Exporting Components",
    href: "https://react.dev/learn/importing-and-exporting-components"
  },
  {
    title: "Writing Markup with JSX",
    href: "https://react.dev/learn/writing-markup-with-jsx"
  },
  {
    title: "JavaScript in JSX with Curly Braces",
    href: "https://react.dev/learn/javascript-in-jsx-with-curly-braces"
  },
];

export function Ex1() {
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
        title="Dia 1 - React Component" 
        descriptions={[
          "Introducció a la peça fonamental de React: el React Component. També veurem JSX, el superset de JavaScript que permet barrejar HTML i JavaScript.",
          "Aquesta és la peça fonamental de React."
        ]} 
        badge="Fonaments de React" 
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
