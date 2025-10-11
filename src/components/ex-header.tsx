import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface ExHeaderProps {
    title: string;
    descriptions: string[];
    badge?: string;
}

export function ExHeader({ title, descriptions, badge }: ExHeaderProps) {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
                <div className="absolute -top-24 -left-24 size-[32rem] rounded-full bg-primary blur-3xl" />
                <div className="absolute -bottom-24 -right-24 size-[28rem] rounded-full bg-secondary blur-3xl" />
            </div>
            <div className="px-6 pt-8 pb-6 md:pt-12 md:pb-10">
                <div className="mx-auto max-w-4xl text-center">
                    {badge && (
                        <Badge className="mb-3" variant="secondary">{badge}</Badge>
                    )}
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        {title}
                    </h1>
                    {descriptions.map((description, index) => (
                        <p key={index} className="text-muted-foreground mt-3 md:mt-4 text-base md:text-lg">
                            {description}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
