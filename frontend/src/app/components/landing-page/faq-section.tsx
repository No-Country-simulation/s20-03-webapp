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

/**
 * FaqSection component.
 *
 * This component renders a FAQ section with 5 questions and answers. The first 5 items are
 * open by default. This component also renders a call to action for the customer to contact
 * the support team.
 *
 * The section is divided in three parts:
 * 1. The title and a description of the section.
 * 2. The accordion with the questions and answers.
 * 3. A call to action for the customer to contact the support team.
 *
 * The title, description and call to action are centered in the section.
 *
 * The accordion is rendered as a multiple accordion, meaning that all the items are
 * open by default.
 *
 * Each item in the accordion is rendered as a AccordionItem component. The AccordionItem
 * component receives the key, value and className as props. The key is the id of the
 * FAQ, the value is the string "item-${id}" and the className is the string "border-black".
 *
 * The AccordionTrigger component is used to render the question and the AccordionContent
 * component is used to render the answer.
 *
 * The call to action is rendered as a button with the text "Contact us" and is linked to
 * the contact page.
 *
 * @returns The FaqSection component.
 */

export const FaqSection = () => {
  return (
    <SectionLanding
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
    </SectionLanding>
  )
}
