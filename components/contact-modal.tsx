"use client"

import { useState, useEffect } from "react"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, MapPin, CheckCircle2, ArrowRight, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
// New imports for Form
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// Server action
import { sendEmail } from "@/app/actions"
import { toast } from "sonner"
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema"
import { track } from "@vercel/analytics"

const projectStages = [
    { id: "idea", label: "Idea inicial" },
    { id: "in-progress", label: "En desarrollo" },
    { id: "stuck", label: "Necesito destrabarlo" },
    { id: "final-stage", label: "Etapa final" },
]

const projectTimeframes = [
    { id: "urgent", label: "Lo antes posible" },
    { id: "one-three-months", label: "1 a 3 meses" },
    { id: "three-plus-months", label: "Más de 3 meses" },
    { id: "exploring", label: "Estoy evaluando" },
]

// Schema definition
// Custom Floating Label Input for React Hook Form
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FloatingFormInput = ({ field, label, ...props }: any) => (
    <div className="relative group">
        <Input
            {...field}
            {...props}
            className="peer h-14 pt-4 px-4 bg-muted/30 border-input text-foreground placeholder-transparent focus:border-primary/70 focus:ring-0 transition-all rounded-xl"
            placeholder=" "
        />
        <label className="absolute left-4 top-4 text-xs text-muted-foreground/75 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground/75 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary pointer-events-none">
            {label}
        </label>
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/0 peer-focus:ring-primary/70 transition-all pointer-events-none" />
    </div>
)

interface ContactModalProps {
    children?: React.ReactNode
    defaultService?: string
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

export function ContactModal({ children, defaultService, open, onOpenChange }: ContactModalProps) {
    const [isSuccess, setIsSuccess] = useState(false)

    // Services choices
    const services = [
        { id: "tesis", label: "Orientación Académica" },
        { id: "legal", label: "Gestión Legal" },
        { id: "web", label: "Desarrollo & Apps" },
        { id: "consultoria", label: "Consultoría" },
    ]

    // Form initialization
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            service: defaultService || "",
            stage: "",
            timeframe: "",
            message: "",
            company_role: "", // Honeypot default
            privacy: false,
        },
    })

    // Update the service if defaultService changes or modal is reopened
    useEffect(() => {
        if (defaultService) {
            form.setValue("service", defaultService)
        }
    }, [defaultService, form])

    // Optimizacion: Usar useWatch en lugar de form.watch directamente en el render para memoización
    const selectedService = useWatch({
        control: form.control,
        name: "service"
    })

    const messageValue = useWatch({
        control: form.control,
        name: "message"
    })
    const messageLength = messageValue ? messageValue.length : 0

    async function onSubmit(values: ContactFormValues) {
        // Create FormData from values to match server action signature
        const formData = new FormData()
        formData.append("name", values.name)
        formData.append("email", values.email)
        formData.append("phone", values.phone || "")
        formData.append("service", values.service || "")
        formData.append("stage", values.stage || "")
        formData.append("timeframe", values.timeframe || "")
        formData.append("message", values.message)
        // Honeypot
        formData.append("company_role", values.company_role || "")
        formData.append("privacy", String(values.privacy))

        track("Contact Form Submitted", {
            service: values.service || "not_selected",
            stage: values.stage || "not_selected",
            timeframe: values.timeframe || "not_selected",
        })

        try {
            const result = await sendEmail(formData)

            if (result?.success) {
                track("Contact Form Completed", { service: values.service || "not_selected" })
                toast.success("Mensaje enviado correctamente", {
                    description: "Recibimos tu consulta y te vamos a responder a la brevedad."
                })
                setIsSuccess(true)
                form.reset()
                return
            }

            console.error(result?.error)
            toast.error("No pudimos enviar el mensaje", {
                description: result?.error || "Revisá los datos e intentá nuevamente."
            })
        } catch (error) {
            console.error("Unexpected contact form error:", error)
            toast.error("No pudimos enviar el mensaje", {
                description: "Ocurrió un error inesperado. Intentá nuevamente en unos minutos."
            })
        }
    }

    return (
        <Dialog
            {...(open !== undefined ? { open } : {})}
            onOpenChange={(isOpen) => {
                if (isOpen) {
                    track("Contact Modal Opened", { service: defaultService || "not_selected" })
                }
                if (!isOpen) {
                    // Reset state when modal closes
                    setTimeout(() => {
                        setIsSuccess(false)
                        form.reset()
                    }, 300)
                }
                if (onOpenChange) {
                    onOpenChange(isOpen)
                }
            }}
        >
            {children && (
                <DialogTrigger asChild suppressHydrationWarning>
                    {children}
                </DialogTrigger>
            )}

            <DialogContent showCloseButton={false} className="block h-[100dvh] w-full overflow-y-auto rounded-none border-border bg-background p-0 text-foreground shadow-2xl sm:h-[90vh] sm:max-h-[90vh] sm:max-w-5xl sm:overflow-hidden sm:rounded-3xl z-[200]">

                {/* Custom Close Button */}
                <DialogClose
                    aria-label="Cerrar formulario de contacto"
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 rounded-full bg-muted/80 hover:bg-muted transition-colors text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                    <X className="size-6" />
                </DialogClose>

                <div className="flex min-h-full flex-col sm:h-full md:flex-row">

                    {/* Left Column: Branding (Obsidian Glass) */}
                    <div className="w-full md:w-[40%] bg-muted/20 p-8 pb-10 md:p-12 flex flex-col justify-between relative overflow-hidden backdrop-blur-md border-b md:border-b-0 md:border-r border-border/50 shrink-0">

                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-primary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10 pt-8 md:pt-0">
                            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-primary md:mb-4">
                                Primera conversación
                            </span>
                            <DialogTitle className="font-heading text-2xl md:text-5xl font-medium text-foreground mb-4 md:mb-6 leading-tight">
                                Hablemos de <br />
                                <span className="font-heading italic text-muted-foreground">
                                    tu proyecto.
                                </span>
                            </DialogTitle>
                            <DialogDescription className="hidden md:block text-muted-foreground text-lg leading-relaxed font-light">
                                Contanos cuál es tu desafío. Vamos a ayudarte a definir un próximo paso claro.
                            </DialogDescription>
                        </div>

                        {/* Contact details */}
                        <div className="relative z-10 space-y-6 mt-6 block">
                            {[
                                { icon: Mail, label: "EMAIL", value: "scriptordigitaloficial@gmail.com", color: "text-foreground group-hover:text-primary", href: "mailto:scriptordigitaloficial@gmail.com" },
                                { icon: MessageCircle, label: "WHATSAPP", value: "+54 9 11 3420 6516", color: "text-primary", href: "https://wa.me/5491134206516" },
                                { icon: MapPin, label: "OFICINAS", value: "Buenos Aires • Madrid", color: "text-foreground" }
                            ].map((item, idx) => (
                                item.href ? (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 group transition-all duration-300 cursor-pointer hover:translate-x-1"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-muted/40 border border-border/50 flex items-center justify-center group-hover:bg-muted group-hover:border-border transition-all duration-300">
                                            <item.icon className={cn("w-5 h-5 transition-colors", item.color)} />
                                        </div>
                                        <div>
                                            <div className="mb-1 text-xs font-bold tracking-wider text-muted-foreground/75">{item.label}</div>
                                            <div className="text-foreground/90 font-medium text-sm group-hover:text-primary transition-colors">{item.value}</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div key={idx} className="flex items-center gap-4 group cursor-default">
                                        <div className="w-12 h-12 rounded-xl bg-muted/40 border border-border/50 flex items-center justify-center group-hover:bg-muted group-hover:border-border transition-all duration-300">
                                            <item.icon className={cn("w-5 h-5 transition-colors", item.color)} />
                                        </div>
                                        <div>
                                            <div className="mb-1 text-xs font-bold tracking-wider text-muted-foreground/75">{item.label}</div>
                                            <div className="text-foreground/90 font-medium text-sm group-hover:text-primary transition-colors">{item.value}</div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Trust Indicator */}
                        <div className="relative z-10 mt-4 md:mt-0 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-medium text-muted-foreground">Respondemos dentro de 24 horas hábiles</span>
                        </div>
                    </div>

                    {/* Right Column: Form or Success State */}
                    <div className="relative min-h-[720px] flex-1 overflow-hidden bg-background md:min-h-0">
                        {isSuccess ? (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500">
                                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-heading font-medium text-foreground mb-2">
                                    ¡Mensaje recibido!
                                </h3>
                                <p className="text-muted-foreground max-w-sm mx-auto mb-8 font-light">
                                    Gracias por contactarnos. Recibimos tu solicitud y te vamos a responder a la brevedad.
                                </p>
                                <DialogClose asChild>
                                    <Button variant="outline" className="rounded-xl px-8 border-border hover:bg-muted">
                                        Cerrar
                                    </Button>
                                </DialogClose>
                            </div>
                        ) : (
                            <>
                            <div className="custom-scrollbar h-full overflow-y-auto p-6 pb-28 pt-10 md:p-12 md:pb-28 md:pt-24">
                            <Form {...form}>
                                <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-8">

                                    {/* Personal Info */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        {/* HONEYPOT - Invisible Field */}
                                        <FormField
                                            control={form.control}
                                            name="company_role"
                                            render={({ field }) => (
                                                <FormItem className="absolute opacity-0 -z-50 w-[1px] h-[1px] overflow-hidden p-0 m-0 pointer-events-none">
                                                    <FormControl>
                                                        <Input {...field} tabIndex={-1} autoComplete="off" />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <FloatingFormInput field={field} label="Nombre completo" autoComplete="name" />
                                                    </FormControl>
                                                    <FormMessage className="text-red-400 font-light text-xs ml-1" />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <FloatingFormInput field={field} label="Email profesional" type="email" autoComplete="email" />
                                                    </FormControl>
                                                    <FormMessage className="text-red-400 font-light text-xs ml-1" />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <FloatingFormInput field={field} label="WhatsApp o teléfono (opcional)" type="tel" autoComplete="tel" />
                                                </FormControl>
                                                <FormMessage className="text-red-400 font-light text-xs ml-1" />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Service Selection */}
                                    <div className="space-y-4">
                                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block ml-1">
                                            ¿Qué estás buscando?
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {services.map((service) => (
                                                <button
                                                    type="button"
                                                    key={service.id}
                                                    onClick={() => form.setValue("service", service.id)}
                                                    className={cn(
                                                    "rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 sm:px-5 sm:py-2.5",
                                                        selectedService === service.id
                                                            ? "bg-primary border-primary text-primary-foreground shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                                            : "bg-muted/10 border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                                                    )}
                                                    aria-pressed={selectedService === service.id}
                                                >
                                                    {service.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <FormField
                                            control={form.control}
                                            name="stage"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block ml-1">
                                                        ¿En qué etapa estás?
                                                    </label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {projectStages.map((stage) => (
                                                            <button
                                                                type="button"
                                                                key={stage.id}
                                                                onClick={() => field.onChange(stage.id)}
                                                                aria-pressed={field.value === stage.id}
                                                                className={cn(
                                                                "rounded-full border px-3 py-2 text-sm font-medium transition-colors",
                                                                    field.value === stage.id
                                                                        ? "border-primary bg-primary/10 text-primary"
                                                                        : "border-border bg-muted/10 text-muted-foreground hover:text-foreground"
                                                                )}
                                                            >
                                                                {stage.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="timeframe"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider block ml-1">
                                                        ¿Para cuándo lo necesitás?
                                                    </label>
                                                    <div className="flex flex-wrap gap-2">
                                                        {projectTimeframes.map((timeframe) => (
                                                            <button
                                                                type="button"
                                                                key={timeframe.id}
                                                                onClick={() => field.onChange(timeframe.id)}
                                                                aria-pressed={field.value === timeframe.id}
                                                                className={cn(
                                                                "rounded-full border px-3 py-2 text-sm font-medium transition-colors",
                                                                    field.value === timeframe.id
                                                                        ? "border-primary bg-primary/10 text-primary"
                                                                        : "border-border bg-muted/10 text-muted-foreground hover:text-foreground"
                                                                )}
                                                            >
                                                                {timeframe.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Project Details */}
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem className="relative group">
                                                <FormControl>
                                                    <Textarea
                                                        {...field}
                                                        className="min-h-[120px] sm:min-h-[160px] pt-4 px-4 bg-muted/30 border-input text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-primary/70 rounded-xl resize-none font-light"
                                                        placeholder="Contanos brevemente sobre tu proyecto o necesidad..."
                                                        maxLength={500}
                                                    />
                                                </FormControl>
                                                <div className="absolute bottom-3 right-3 text-xs text-muted-foreground font-mono">
                                                    {messageLength}/500
                                                </div>
                                                <FormMessage className="text-red-400 font-light text-xs ml-1" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="privacy"
                                        render={({ field }) => (
                                            <FormItem>
                                                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border/60 bg-muted/20 p-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={field.value}
                                                        onChange={(event) => field.onChange(event.target.checked)}
                                                        className="mt-0.5 h-4 w-4 rounded border-border accent-primary"
                                                    />
                                                    <span className="text-sm leading-relaxed text-muted-foreground">
                                                        Acepto que Scriptor Digital use estos datos únicamente para responder mi consulta, según la política de privacidad.
                                                    </span>
                                                </label>
                                                <FormMessage className="text-red-400 font-light text-xs ml-1" />
                                            </FormItem>
                                        )}
                                    />

                                </form>
                            </Form>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-4 backdrop-blur-xl md:px-12">
                                    <Button
                                        type="submit"
                                        form="contact-form"
                                        disabled={form.formState.isSubmitting}
                                        className="mx-auto flex h-14 w-full max-w-xl font-bold tracking-wide rounded-xl shadow-lg transition-all hover:scale-[1.01] active:scale-[0.99] bg-primary hover:bg-primary/90 text-primary-foreground"
                                    >
                                        {form.formState.isSubmitting ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                Enviar Solicitud
                                                <ArrowRight className="w-5 h-5" />
                                            </span>
                                        )}
                                    </Button>
                            </div>
                            </>
                        )}
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}

