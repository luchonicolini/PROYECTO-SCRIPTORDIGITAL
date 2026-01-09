"use client"

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactModal({ children }: { children: React.ReactNode }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] p-0 bg-[#0a0f1c] border-white/10 text-white overflow-hidden gap-0">
                <div className="grid md:grid-cols-2">

                    {/* Left Column: Contact Info */}
                    <div className="bg-[#030712] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">

                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />

                        <div className="space-y-6 relative z-10">
                            <div>
                                <h2 className="font-heading text-3xl font-medium text-white mb-2">Comencemos el diálogo.</h2>
                                <p className="text-white/60 text-lg">Cuéntanos sobre tu proyecto. La excelencia espera.</p>
                            </div>

                            <div className="space-y-4 mt-8">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                                        <Mail className="w-5 h-5 text-violet-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white/40 tracking-wider">EMAIL</div>
                                        <div className="text-white/90">hola@scriptordigital.com</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                                        <Phone className="w-5 h-5 text-fuchsia-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white/40 tracking-wider">TELÉFONO / WHATSAPP</div>
                                        <div className="text-white/90">+54 9 11 1234 5678</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                                        <MapPin className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white/40 tracking-wider">BASE</div>
                                        <div className="text-white/90">Buenos Aires & Madrid</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                            <p className="text-white/40 text-sm italic font-serif">
                                &quot;El primer paso hacia la excelencia es la comunicación.&quot;
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="p-8 md:p-10 bg-[#0a0f1c]">
                        <div className="grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/60">Nombre Completo</label>
                                    <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-cyan-400/50" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/60">Email Corporativo</label>
                                    <Input className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-cyan-400/50" placeholder="john@empresa.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-white/60">Interés Principal</label>
                                <Select>
                                    <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-cyan-400/50">
                                        <SelectValue placeholder="Selecciona una opción" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#0a0f1c] border-white/10 text-white">
                                        <SelectItem value="tesis">Dirección de Tesis</SelectItem>
                                        <SelectItem value="web">Desarrollo Web</SelectItem>
                                        <SelectItem value="app">Aplicación Móvil</SelectItem>
                                        <SelectItem value="coneau">Consultoría CONEAU</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-white/60">Detalles del Proyecto</label>
                                <Textarea className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-cyan-400/50 resize-none" placeholder="Cuéntanos brevemente qué necesitas..." />
                            </div>

                            <Button className="w-full h-12 bg-violet-500 hover:bg-violet-600 text-white font-bold tracking-wide mt-2">
                                Enviar Solicitud <Send className="w-4 h-4 ml-2" />
                            </Button>

                            <p className="text-center text-xs text-white/20">
                                Tus datos están protegidos bajo nuestros términos de confidencialidad.
                            </p>
                        </div>
                    </div>

                </div>
            </DialogContent>
        </Dialog>
    )
}
