import React, { useState } from 'react';
import { CONTACT_INFO } from '../data';
import emailjs from "@emailjs/browser";

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
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setFormData((prev) => ({ ...prev, [field]: e.target.value }));

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        (e.target.style.borderColor = 'var(--accent)');

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        (e.target.style.borderColor = 'var(--border)');

    const [modal, setModal] = useState<{
        open: boolean;
        type: 'success' | 'error';
        message: string;
    }>({
        open: false,
        type: 'success',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill all fields');
            return;
        }

        if (!formData.email.includes('@')) {
            alert('Enter a valid email');
            return;
        }

        emailjs.send(
            'service_7gpxeqj',
            'template_t9jswhh',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            'GZNONBfopGkvfxYns'
        )
            .then(() => {
                setModal({
                    open: true,
                    type: 'success',
                    message: 'Message sent successfully!',
                });

                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error(error);

                setModal({
                    open: true,
                    type: 'error',
                    message: 'Failed to send message. Try again.',
                });
            });
    };

    return (
        <section id="contact" style={{ padding: '8rem 0', position: 'relative' }}>
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
                <div className="reveal text-center mb-16">
                    <div className="tag mb-4" style={{ display: 'inline-block' }}>Contact</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800 }}>
                        Let's <span className="gradient-text">Work Together</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* CONTACT INFO */}
                    <div className="lg:w-5/12 reveal">
                        {CONTACT_INFO.map((item) => {
                            const isLocation = item.label.toLowerCase() === 'location';

                            return (
                                <div key={item.label} className="flex items-center gap-4 mb-5">
                                    <span>{item.icon}</span>

                                    <div>
                                        <div>{item.label}</div>

                                        <div>
                                            {isLocation ? (
                                                item.val
                                            ) : item.label.toLowerCase() === 'whatsapp' ? (
                                                <a
                                                    href={`https://wa.me/${item.val.replace(/\D/g, '')}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.val}
                                                </a>
                                            ) : item.label.toLowerCase() === 'email' ? (
                                                <a href={`mailto:${item.val}`}>
                                                    {item.val}
                                                </a>
                                            ) : item.label.toLowerCase() === 'linkedin' ? (
                                                <a
                                                    href={`https://${item.val}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.val}
                                                </a>
                                            ) : item.label.toLowerCase() === 'github' ? (
                                                <a
                                                    href={`https://${item.val}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {item.val}
                                                </a>
                                            ) : (
                                                item.val
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* FORM */}
                    <div className="lg:w-7/12 reveal">
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <input
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange('name')}
                                    style={inputStyle}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <input
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange('email')}
                                    style={inputStyle}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <textarea
                                    placeholder="Message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange('message')}
                                    style={{ ...inputStyle }}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>

                            <button type="submit" className="btn-primary">
                                Send Message →
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            {modal.open && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                    }}
                    onClick={() => setModal({ ...modal, open: false })}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'rgba(13,17,23,.95)',
                            border: '1px solid var(--border)',
                            padding: '2rem',
                            borderRadius: '8px',
                            width: '320px',
                            textAlign: 'center',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                            }}
                        >
                            {modal.type === 'success' ? '✅' : '❌'}
                        </div>

                        <p style={{ color: 'var(--text)', marginBottom: '1.5rem' }}>
                            {modal.message}
                        </p>

                        <button
                            onClick={() => setModal({ ...modal, open: false })}
                            style={{
                                padding: '0.6rem 1.2rem',
                                background:
                                    modal.type === 'success'
                                        ? 'var(--accent)'
                                        : '#ef4444',
                                border: 'none',
                                color: '#fff',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;