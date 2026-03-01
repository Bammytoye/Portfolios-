import React, { useState } from 'react';
import { CONTACT_INFO } from '../data';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,.03)',
    border: '1px solid var(--border)',
    borderRadius: '2px',
    color: 'var(--text)',
    padding: '0.85rem 1rem',
    fontFamily: "'Syne', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color .3s',
};

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

    const handleChange = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        (e.target.style.borderColor = 'var(--accent)');

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        (e.target.style.borderColor = 'var(--border)');

    const handleSubmit = () => alert('Message sent! (Demo)');

    return (
        <section id="contact" style={{ padding: '8rem 0', position: 'relative' }}>
            {/* Background orb */}
            <div
                style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(124,58,237,.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="reveal text-center mb-16">
                    <div className="tag mb-4" style={{ display: 'inline-block' }}>Contact</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
                        Let's <span className="gradient-text">Work Together</span>
                    </h2>
                    <p style={{ color: 'var(--muted)', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0' }}>
                        Have a project in mind? Let's build something extraordinary together.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact info */}
                    <div className="lg:w-5/12 reveal">
                        <div style={{ marginBottom: '2.5rem' }}>
                            {CONTACT_INFO.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center gap-4 mb-5"
                                    style={{
                                        padding: '1rem 1.25rem',
                                        border: '1px solid var(--border)',
                                        borderRadius: '4px',
                                        background: 'rgba(13,17,23,.6)',
                                        transition: 'border-color .3s',
                                    }}
                                    onMouseEnter={(e) =>
                                        ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(0,255,224,.3)')
                                    }
                                    onMouseLeave={(e) =>
                                        ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)')
                                    }
                                >
                                    <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                                    <div>
                                        <div
                                            style={{
                                                fontSize: '0.65rem', color: 'var(--muted)',
                                                fontFamily: "'Space Mono', monospace",
                                                letterSpacing: '0.08em', textTransform: 'uppercase',
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text)' }}>{item.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Availability badge */}
                        <div
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.75rem',
                                padding: '1rem 1.25rem',
                                border: '1px solid rgba(0,255,224,.3)',
                                borderRadius: '4px',
                                background: 'rgba(0,255,224,.04)',
                            }}
                        >
                            <div
                                style={{
                                    width: '8px', height: '8px', borderRadius: '50%',
                                    background: 'var(--accent)',
                                    animation: 'pulseGlow 2s infinite',
                                    boxShadow: '0 0 10px var(--accent)',
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "'Space Mono', monospace",
                                    fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.08em',
                                }}
                            >
                                Available for new projects
                            </span>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:w-7/12 reveal">
                        <div
                            style={{
                                background: 'rgba(13,17,23,.8)',
                                border: '1px solid var(--border)',
                                borderRadius: '4px',
                                padding: '2.5rem',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            {/* Name */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                                    Name
                                </label>
                                <input
                                    placeholder='Enter your name'
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange('name')}
                                    style={inputStyle}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>

                            {/* Email */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                                    Email
                                </label>
                                <input
                                    placeholder='Enter your email'
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange('email')}
                                    style={inputStyle}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                                    Message
                                </label>
                                <textarea
                                    placeholder='Type your message here'
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange('message')}
                                    style={{ ...inputStyle, resize: 'vertical' }}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>

                            <button
                                className="btn-primary"
                                style={{ width: '100%', textAlign: 'center' }}
                                onClick={handleSubmit}
                            >
                                Send Message →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;