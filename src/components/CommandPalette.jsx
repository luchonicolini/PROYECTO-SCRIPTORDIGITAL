import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, Folder, Home, User, Mail, Moon, Sun } from 'lucide-react';
import tutorialsData from '../data/tutorials';
import projectsData from '../data/projects';

const CommandPalette = ({ theme, toggleTheme }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const runCommand = (command) => {
        setOpen(false);
        command();
    };

    const tutorials = Object.values(tutorialsData);
    const projects = Object.values(projectsData);

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="command-dialog"
        >
            <div className="command-wrapper">
                <div className="command-search-wrapper">
                    <Search className="command-search-icon" size={20} />
                    <Command.Input
                        placeholder="Buscar páginas, tutoriales o cambiar tema..."
                        className="command-input"
                    />
                </div>

                <Command.List className="command-list">
                    <Command.Empty className="command-empty">No se encontraron resultados.</Command.Empty>

                    <Command.Group heading="Páginas">
                        <Command.Item onSelect={() => runCommand(() => navigate('/'))}>
                            <Home size={16} />
                            <span>Inicio</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/tutorials'))}>
                            <FileText size={16} />
                            <span>Tutoriales</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/projects'))}>
                            <Folder size={16} />
                            <span>Proyectos</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/about'))}>
                            <User size={16} />
                            <span>Sobre Mí</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => navigate('/contact'))}>
                            <Mail size={16} />
                            <span>Contacto</span>
                        </Command.Item>
                    </Command.Group>

                    <Command.Group heading="Tutoriales Recientes">
                        {tutorials.slice(0, 3).map(tutorial => (
                            <Command.Item key={tutorial.id} onSelect={() => runCommand(() => navigate(`/tutorials/${tutorial.id}`))}>
                                <FileText size={16} />
                                <span>{tutorial.title}</span>
                            </Command.Item>
                        ))}
                    </Command.Group>

                    <Command.Group heading="Proyectos Destacados">
                        {projects.slice(0, 3).map(project => (
                            <Command.Item key={project.id} onSelect={() => runCommand(() => navigate(`/projects/${project.id}`))}>
                                <Folder size={16} />
                                <span>{project.title}</span>
                            </Command.Item>
                        ))}
                    </Command.Group>

                    <Command.Group heading="Tema">
                        <Command.Item onSelect={() => runCommand(() => toggleTheme())}>
                            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                            <span>Cambiar a modo {theme === 'light' ? 'oscuro' : 'claro'}</span>
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    );
};

export default CommandPalette;
