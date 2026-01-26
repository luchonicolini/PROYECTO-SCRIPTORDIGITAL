import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ language, code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ position: 'relative', margin: '20px 0', borderRadius: '12px', overflow: 'hidden' }}>
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#e0e0e0',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.8rem',
                    backdropFilter: 'blur(4px)'
                }}
            >
                {copied ? (
                    <>
                        <Check size={16} color="#4ade80" />
                        <span style={{ color: '#4ade80' }}>Copiado!</span>
                    </>
                ) : (
                    <>
                        <Copy size={16} />
                        <span>Copiar</span>
                    </>
                )}
            </button>

            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    padding: '24px',
                    fontSize: '0.9rem',
                    borderRadius: '12px',
                    backgroundColor: '#1e1e1e', // Ensure consistent background
                }}
                wrapLongLines={true}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
