import { SERVICES } from '@/lib/landing-constans'

import { SectionLanding } from './section-landing'

/**
 * Component that renders a section of the landing page showing the services that the application offers.
 *
 * This component renders a section with a title and a list of services. Each service is represented by an icon, a title and a description.
 *
 * @returns A JSX element representing the services section.
 */

export const ServicesSection = () => {
  return (
    <SectionLanding
      component="section"
      className="flex flex-col gap-[48px] py-16 md:gap-[80px] lg:py-24"
    >
      <h2 className="sr-only">Nuestros servicios</h2>
      <h3 className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
        {`¿Por qué elegir nuestra plataforma?`}
      </h3>
      <div className="flex w-full flex-col gap-12 md:flex-row">
        {SERVICES.map(service => (
          <div
            key={service.id}
            className="flex flex-col items-center justify-center gap-4 text-center md:gap-6"
          >
            <service.icon className="h-12 w-12" />
            <h4 className="text-lg font-bold">{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </SectionLanding>
  )
}
