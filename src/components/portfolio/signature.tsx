import { motion } from 'motion/react';

export default function Signature({ className = '' }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 320 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <clipPath id="signature-reveal">
                    <motion.rect
                        x="0"
                        y="0"
                        height="100"
                        initial={{ width: 0 }}
                        animate={{ width: 320 }}
                        transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.4 }}
                    />
                </clipPath>
            </defs>

            <text
                x="8"
                y="68"
                fontFamily="'Dancing Script', cursive"
                fontWeight="700"
                fontSize="60"
                className="fill-neutral-900 dark:fill-neutral-100"
                clipPath="url(#signature-reveal)"
            >
                Cynthia
            </text>

            <motion.circle
                r="4"
                className="fill-accent-500"
                cy="55"
                initial={{ cx: 0, opacity: 1 }}
                animate={{ cx: 300, opacity: [1, 1, 0] }}
                transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.4 }}
            />
        </svg>
    );
}