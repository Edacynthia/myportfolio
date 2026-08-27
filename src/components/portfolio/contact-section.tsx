import { useState } from 'react';
import {  Send } from 'lucide-react';
import Container from './container';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpgzyze';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.05h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.15 8.15 0 0 1-1.26-4.33c0-4.52 3.68-8.2 8.21-8.2a8.16 8.16 0 0 1 8.19 8.2c0 4.52-3.68 8.19-8.15 8.19Zm4.48-6.13c-.24-.12-1.44-.71-1.67-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
        </svg>
    );
}

function GithubIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.51-3.5-.7-3.72-1.34-.13-.34-.68-1.38-1.16-1.66-.4-.22-.97-.76-.01-.77.9-.01 1.55.85 1.76 1.2 1.03 1.76 2.68 1.27 3.34.96.1-.76.4-1.27.72-1.56-2.51-.29-5.14-1.29-5.14-5.71 0-1.26.44-2.29 1.16-3.1-.12-.29-.5-1.46.11-3.04 0 0 .95-.31 3.11 1.18a10.6 10.6 0 0 1 2.83-.39c.96 0 1.92.13 2.83.39 2.16-1.51 3.11-1.18 3.11-1.18.62 1.58.23 2.75.11 3.04.72.81 1.16 1.83 1.16 3.1 0 4.43-2.64 5.42-5.15 5.71.41.37.77 1.08.77 2.19 0 1.58-.01 2.85-.01 3.24 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
        </svg>
    );
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactSection() {
    const [data, setData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<Status>('idle');

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { Accept: 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                setData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24">
            <Container>
                <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:p-14 dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="text-center">
                        <p className="font-mono text-sm text-accent-500">04 — Contact</p>
                        <h2 className="font-display mt-3 text-4xl font-bold md:text-6xl">
                            Let's build something.
                        </h2>
                        <p className="mx-auto mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
                            Have a project in mind, an opportunity to share, or just want to say hi? Drop a message below.
                        </p>
                    </div>

                    {status === 'success' && (
                        <div className="mx-auto mt-8 max-w-lg rounded-lg bg-green-50 px-4 py-3 text-center text-sm text-green-700 dark:bg-green-950 dark:text-green-400">
                            Message sent — I'll get back to you soon.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mx-auto mt-8 max-w-lg rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-700 dark:bg-red-950 dark:text-red-400">
                            Something went wrong — try again, or reach me directly on WhatsApp/email below.
                        </div>
                    )}

                    <form onSubmit={submit} className="mx-auto mt-8 max-w-lg space-y-4">
                        <input
                            type="text"
                            required
                            placeholder="Your name"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-accent-400 dark:border-neutral-700 dark:bg-neutral-800"
                        />
                        <input
                            type="email"
                            required
                            placeholder="Your email"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-accent-400 dark:border-neutral-700 dark:bg-neutral-800"
                        />
                        <textarea
                            required
                            placeholder="What's on your mind?"
                            rows={5}
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                            className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-accent-400 dark:border-neutral-700 dark:bg-neutral-800"
                        />
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4 font-medium text-white transition-colors hover:bg-accent-600 disabled:opacity-60"
                        >
                            <Send className="h-4 w-4" />
                            {status === 'sending' ? 'Sending…' : 'Send Message'}
                        </button>
                    </form>

                    <div className="mt-10 flex justify-center gap-6">
                        <a href="https://github.com/Edacynthia" target="_blank" rel="noreferrer" className="text-neutral-500 transition-colors hover:text-accent-500" aria-label="GitHub">
    <GithubIcon className="h-5 w-5" />
</a>
<a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-neutral-500 transition-colors hover:text-accent-500" aria-label="LinkedIn">
    <LinkedinIcon className="h-5 w-5" />
</a>
                        <a href="https://wa.me/8121112943" target="_blank" rel="noreferrer" className="text-neutral-500 transition-colors hover:text-accent-500" aria-label="WhatsApp">
                            <WhatsAppIcon className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-sm text-neutral-500 md:flex-row dark:border-neutral-800">
                    <p>© 2026 Cynthia. Built with React and late nights.</p>
                    <p className="font-mono text-xs">Available for opportunities</p>
                </div>
            </Container>
        </section>
    );
}