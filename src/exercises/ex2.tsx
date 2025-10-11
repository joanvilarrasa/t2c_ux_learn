import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ExHeader } from "@/components/ex-header";

const accordionItems = [
  {
    title: "Passing Props to a Component",
    href: "https://react.dev/learn/passing-props-to-a-component",
    description: "Learn how to pass props to a component.",
  },
  {
    title: "Conditional Rendering",
    href: "https://react.dev/learn/conditional-rendering",
    description: "Learn how to conditionally render components.",
  },
  {
    title: "Rendering Lists",
    href: "https://react.dev/learn/rendering-lists",
    description: "Learn how to render lists.",
  },
  {
    title: "Keeping Components Pure",
    href: "https://react.dev/learn/keeping-components-pure",
    description: "Learn how to keep components pure.",
  },
  {
    title: "Understanding Your UI as a Tree",
    href: "https://react.dev/learn/understanding-your-ui-as-a-tree",
    description: "Learn how to optimize performance.",
  },
];

export function Ex2() {
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [openAccordion, setOpenAccordion] = useState<string>("");

  const toggleSection = (sectionId: string) => {
    setCompletedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
        // Close the accordion if it's being marked as completed
        if (openAccordion === sectionId) {
          setOpenAccordion("");
        }
      }
      return newSet;
    });
  };

  const handleAccordionChange = (value: string) => {
    // Don't allow opening completed sections
    if (completedSections.has(value)) {
      return;
    }
    setOpenAccordion(value);
  };
  return (
    <div className="flex flex-col flex-grow">
      <ExHeader 
        title="Dia 2 - Comunicar entre components i condicions" 
        descriptions={["Com passar dades entre components, com tractar condicionals i llistes. Finalment, veurem l'arbre de React."]} 
        badge="Fonaments de React" 
      />
      <Separator />

      {/* Content container matching max width */}
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
