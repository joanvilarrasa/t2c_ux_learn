import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const accordionItems = [
  {
    title: "Your First Component",
    href: "https://react.dev/learn/your-first-component",
    description: "Learn how to create your first React component.",
  },
  {
    title: "Importing and Exporting Components",
    href: "https://react.dev/learn/importing-and-exporting-components",
    description: "Learn how to import and export components.",
  },
  {
    title: "Writing Markup with JSX",
    href: "https://react.dev/learn/writing-markup-with-jsx",
    description: "Learn how to write markup with JSX.",
  },
  {
    title: "JavaScript in JSX with Curly Braces",
    href: "https://react.dev/learn/javascript-in-jsx-with-curly-braces",
    description: "Learn how to use JavaScript in JSX with curly braces.",
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
    <div className="flex flex-col p-4 flex-grow">
      <div className="flex flex-col gap-2 h-40">
        <p className="text-xl">
          Durant el dia 1 aprendrem què és un componend de React, què és JSX i algunes de les seves particularitats.
        </p>
        <ul className="flex flex-col gap-2 list-disc list-inside">
          <li>Per què hem de tancar les etiquetes HTML si l'estàndard de HTML no ho requereix?</li>
          <li>Per què els components de React comencen per majúscula?</li>
          <li>Per què els atributs de les etiquetes HTML s'escriuen en camelCase i no en kebab-case (com a l'HTML estàndard)?</li>
        </ul>
      </div>
      <Separator />
          
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
  );
}
