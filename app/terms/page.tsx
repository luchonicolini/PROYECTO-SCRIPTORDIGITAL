import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Términos y Condiciones | Scriptor Digital",
    description: "Términos y condiciones de uso de los servicios de Scriptor Digital.",
}

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-24 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Términos y Condiciones</h1>

            <div className="prose prose-invert max-w-none text-muted-foreground space-y-8">
                <p className="text-lg">
                    Última actualización: {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                </p>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceptación de los Términos</h2>
                    <p>
                        Al acceder y utilizar el sitio web de Scriptor Digital, usted acepta estar sujeto a estos términos de servicio, a todas las leyes y regulaciones aplicables,
                        y acepta que es responsable del cumplimiento de las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">2. Licencia de Uso</h2>
                    <p>
                        Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Scriptor Digital solo para visualización transitoria personal y no comercial.
                        Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Modificar o copiar los materiales;</li>
                        <li>Utilizar los materiales para cualquier propósito comercial, o para cualquier exhibición pública (comercial o no comercial);</li>
                        <li>Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web de Scriptor Digital;</li>
                        <li>Eliminar cualquier derecho de autor u otra notación de propiedad de los materiales; o</li>
                        <li>Transferir los materiales a otra persona o &quot;espejar&quot; los materiales en cualquier otro servidor.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">3. Descargo de Responsabilidad</h2>
                    <p>
                        Los materiales en el sitio web de Scriptor Digital se proporcionan &quot;tal cual&quot;. Scriptor Digital no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías,
                        incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitaciones</h2>
                    <p>
                        En ningún caso Scriptor Digital o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio)
                        que surja del uso o la imposibilidad de usar los materiales en el sitio web de Scriptor Digital, incluso si Scriptor Digital o un representante autorizado de Scriptor Digital ha sido notificado oralmente o por escrito de la posibilidad de tal daño.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">5. Precisión de los Materiales</h2>
                    <p>
                        Los materiales que aparecen en el sitio web de Scriptor Digital podrían incluir errores técnicos, tipográficos o fotográficos. Scriptor Digital no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual.
                        Scriptor Digital puede realizar cambios en los materiales contenidos en su sitio web en cualquier momento sin previo aviso. Sin embargo, Scriptor Digital no se compromete a actualizar los materiales.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">6. Enlaces</h2>
                    <p>
                        Scriptor Digital no ha revisado todos los sitios vinculados a su sitio web y no es responsable de los contenidos de dicho sitio vinculado. La inclusión de cualquier enlace no implica el respaldo por parte de Scriptor Digital del sitio.
                        El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modificaciones</h2>
                    <p>
                        Scriptor Digital puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar sujeto a la versión actual de estos términos de servicio.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-foreground mb-4">8. Ley Aplicable</h2>
                    <p>
                        Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes globales y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en el estado o ubicación correspondiente.
                    </p>
                </section>
            </div>
        </div>
    )
}
