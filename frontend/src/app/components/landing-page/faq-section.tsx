import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Section } from '@/components/atoms/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FAQs } from '@/lib/landing-constans'

export const FaqSection = () => {
  return (
    <Section
      component="section"
      className="mx-auto flex max-w-screen-md flex-col gap-[48px] py-16 md:gap-[80px] lg:py-24"
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-xl font-bold md:text-2xl lg:text-3xl">{`Preguntas frecuentes`}</h2>
        <p className="text-center">
          {`Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.`}
        </p>
      </div>
      <Accordion
        type="multiple"
        className="w-full"
        // This array represents the currently open items by default
        defaultValue={['item-1', 'item-2', 'item-3', 'item-4', 'item-5']}
      >
        {FAQs.map(faq => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className="border-black"
          >
            <AccordionTrigger className="font-bold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex flex-col items-center gap-6">
        <h3 className="text-center text-lg font-bold md:text-xl lg:text-2xl">
          {`Still have a questions?`}
        </h3>
        <p className="text-center">
          {`Support details to capture customers that might be on the fence.`}
        </p>
        <Button variant="outline" size="lg" asChild className="w-fit">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </Section>
  )
}
