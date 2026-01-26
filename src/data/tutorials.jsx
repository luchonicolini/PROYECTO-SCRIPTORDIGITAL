import React from 'react';
import { Code, FileText, Video } from 'lucide-react';
import CodeBlock from '../components/UI/CodeBlock';

const tutorialsData = {
    1: {
        id: 1,
        title: "React Moderno: Fundamentos y Hooks",
        subtitle: "Domina la biblioteca más popular de JavaScript desde cero.",
        description: "Aprende los fundamentos de React con Hooks y componentes funcionales.",
        date: "12 Dic 2025",
        readTime: "15 min lectura",
        type: "Curso",
        category: "Curso",
        icon: <Code size={24} />,
        color: "#61DAFB",
        content: (
            <>
                <p>React ha evolucionado significativamente. En este curso intensivo, exploraremos los patrones modernos que definen el desarrollo actual.</p>
                <h3>¿Qué aprenderás?</h3>
                <ul>
                    <li>Hooks personalizados y su potencia.</li>
                    <li>Gestion de estado con Context API vs Zustand.</li>
                    <li>Server Components y el futuro de React.</li>
                </ul>
                <h3>Introducción a los Hooks</h3>
                <p>Los Hooks son una nueva incorporación en React 16.8. Te permiten usar estado y otras características de React sin escribir una clase.</p>
                <CodeBlock
                    language="javascript"
                    code={`import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Click {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
                />
            </>
        )
    },
    2: {
        id: 2,
        title: "Diseño UI Avanzado",
        subtitle: "Principios de diseño para desarrolladores.",
        description: "Domina los principios de diseño de interfaces modernas y estéticas.",
        date: "10 Dic 2025",
        readTime: "10 min lectura",
        type: "Guía",
        category: "Guía",
        icon: <FileText size={24} />,
        color: "#FF61F6",
        content: (
            <>
                <p>El diseño no es solo cómo se ve, es cómo funciona. Aprende a crear interfaces que deleiten a tus usuarios.</p>
                <h3>Jerarquía Visual</h3>
                <p>Entender cómo el ojo humano escanea una página es crucial para guiar la atención del usuario hacia lo importante.</p>
            </>
        )
    },
    3: {
        id: 3,
        title: "Animaciones Web",
        subtitle: "Da vida a tus interfaces estáticas.",
        description: "Crea experiencias inmersivas con Framer Motion y CSS.",
        date: "08 Dic 2025",
        readTime: "20 min lectura",
        type: "Tutorial",
        category: "Tutorial",
        icon: <Video size={24} />,
        color: "#FFD166",
        content: (
            <>
                <p>Las animaciones bien ejecutadsa mejoran la experiencia de usuario y proporcionan feedback visual importante.</p>
                <h3>Gesture Animations</h3>
                <p>Framer Motion hace que las animaciones basadas en gestos sean increíblemente sencillas.</p>
            </>
        )
    }
};

export default tutorialsData;
