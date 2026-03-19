import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/site-content";

type FaqListProps = {
  items: FaqItem[];
  openFirstItem?: boolean;
};

export function FaqList({ items, openFirstItem = false }: FaqListProps) {
  return (
    <Accordion defaultValue={openFirstItem ? ["item-0"] : []} className="gap-2">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`item-${index}`}
          className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] px-4 py-1 not-last:border-b"
        >
          <AccordionTrigger className="py-4 text-base font-medium text-white hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-sm leading-7 text-white/62">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
