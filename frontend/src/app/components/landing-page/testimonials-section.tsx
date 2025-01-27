import Image from 'next/image'

import { TESTIMONIALS } from '@/lib/landing-constans'

import { SectionLanding } from './section-landing'

/**
 * Component that renders a section of the landing page showing the testimonials of ClassRun's users.
 *
 * This component renders a section with a title, a paragraph, and a list of
 * testimonials. Each testimonial is represented by a quote, a name, a position,
 * and an image.
 *
 * @returns A JSX element representing the testimonials section.
 */

export const TestimonialsSection = () => {
  return (
    <SectionLanding
      id="testimonials"
      component="section"
      className="flex flex-col gap-[48px] py-16 md:gap-[80px] lg:py-24"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 text-center">
        <h2 className="sr-only">Testimonios</h2>
        <h3 className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
          {`Lo que dicen nuestros usuarios`}
        </h3>
        <p className="text-md max-w-xl md:text-lg">
          Nuestra plataforma ya está transformando la forma en que se gestiona
          la educación en diversas instituciones. Esto es lo que algunos de
          nuestros usuarios tienen que decir.
        </p>
      </div>
      <div className="flex w-full flex-col gap-12 md:flex-row">
        {TESTIMONIALS.map(testimony => (
          <div
            key={testimony.id}
            className="flex flex-col items-center justify-center gap-2 text-center"
          >
            <p className="mb-4 font-semibold italic">{testimony.review}</p>
            <Image
              src={testimony.image}
              alt={`Image of ${testimony.name}`}
              className="h-20 w-20 rounded-full"
              width={80}
              height={80}
            />
            <h4 className="text-md font-bold">{testimony.name}</h4>
            <p>{testimony.position}</p>
          </div>
        ))}
      </div>
    </SectionLanding>
  )
}
