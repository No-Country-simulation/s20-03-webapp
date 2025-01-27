import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { FAQs } from '@/lib/landing-constans'

import { SectionLanding } from './section-landing'

export const FaqSection = () => {
  return (
    <SectionLanding
      component="section"
      className="mx-auto flex max-w-screen-md flex-col gap-[48px] py-16 md:gap-[80px] lg:py-24"
    >
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-xl font-bold md:text-2xl lg:text-3xl">{`Preguntas frecuentes`}</h2>
        <p className="text-center">
          {`Preguntas más frecuentes ordenadas por popularidad.`}
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
          {`¿Tiene alguna pregunta?`}
        </h3>
        <p className="text-center">
          {`Support details to capture customers that might be on the fence.`}
        </p>
        <Button variant="outline" size="lg" asChild className="w-fit">
          <Link href="/contact">¡Contáctanos!</Link>
        </Button>
      </div>
    </SectionLanding>
  )
}
