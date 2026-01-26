import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Privacidad | Scriptor Digital",
    description: "Política de privacidad y protección de datos de Scriptor Digital.",
}

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Política de Privacidad</h1>

            <div className="prose prose-invert max-w-none text-muted-foreground space-y-8">
                <p className="text-lg">
                    Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </p>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introducción</h2>
                    <p>
                        En Scriptor Digital, nos comprometemos a proteger su privacidad y a garantizar la seguridad de su información personal.
                        Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando visita nuestro sitio web.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Información que Recopilamos</h2>
                    <p>
                        Podemos recopilar información personal que usted nos proporciona voluntariamente, incluyendo pero no limitado a:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Nombre y apellido</li>
                        <li>Dirección de correo electrónico</li>
                        <li>Número de teléfono</li>
                        <li>Información sobre su institución o empresa</li>
                        <li>Cualquier otra información que decida compartir a través de nuestros formularios de contacto</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Uso de la Información</h2>
                    <p>
                        Utilizamos la información recopilada para los siguientes propósitos:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Proveer y mantener nuestros servicios</li>
                        <li>Notificarle sobre cambios en nuestros servicios</li>
                        <li>Proporcionar soporte al cliente</li>
                        <li>Recopilar análisis o información valiosa para mejorar nuestro servicio</li>
                        <li>Detectar, prevenir y abordar problemas técnicos</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Protección de Datos</h2>
                    <p>
                        La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
                        Nos esforzamos por utilizar medios comercialmente aceptables para proteger su información personal.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies y Tecnologías Similares</h2>
                    <p>
                        Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro servicio y mantener cierta información.
                        Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Enlaces a Otros Sitios</h2>
                    <p>
                        Nuestro servicio puede contener enlaces a otros sitios que no son operados por nosotros. Si hace clic en un enlace de un tercero, será dirigido al sitio de ese tercero.
                        Le recomendamos encarecidamente que revise la Política de Privacidad de cada sitio que visite.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a través de nuestro formulario web o enviando un correo a scriptordigitaloficial@gmail.com.
                    </p>
                </section>
            </div>
        </div>
    )
}
