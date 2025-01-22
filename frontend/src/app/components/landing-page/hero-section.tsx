import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { SectionLanding } from './section-landing'

/**
 * A hero section component for the landing page.
 *
 * It displays a title, a subtitle, a call-to-action button and a background image.
 * The title and subtitle are centered and the image is displayed on the right side
 * of the section on larger screens.
 *
 * @returns A hero section component as a JSX element.
 */

export const HeroSection = () => {
  return (
    <SectionLanding
      className="flex flex-col items-center gap-8 py-8 lg:flex-row lg:gap-16"
      component={'section'}
    >
      <div className="flex w-full flex-col gap-6">
        <h1 className="text-wrap text-3xl font-bold !leading-[120%] sm:text-4xl md:text-5xl">
          {`La forma más sencilla de gestionar el desempeño académico de tus
          estudiantes`}
        </h1>
        <p className="text-md text-muted-foreground md:text-lg">
          {`Una plataforma diseñada para que docentes, familias y estudiantes puedan monitorear el progreso escolar de forma clara y accesible.`}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg">Get started</Button>
          <Button variant="outline" size="lg">
            Learn more
          </Button>
        </div>
      </div>

      <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src="https://placehold.co/800.jpg"
          alt="Hero section image"
          width={800}
          height={800}
          className="object-cover"
          priority
        />
      </div>
    </SectionLanding>
  )
}
