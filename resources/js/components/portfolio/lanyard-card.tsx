import { motion } from 'motion/react';
import { useState } from 'react';

type LanyardCardProps = {
    image: string;
    name?: string;
    role?: string;
};

export default function LanyardCard({
    image,
    name = 'Cynthia',
    role = 'Full-Stack Developer',
}: LanyardCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === 'touch') {
            return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        const horizontalPosition = (event.clientX - bounds.left) / bounds.width;
        const verticalPosition = (event.clientY - bounds.top) / bounds.height;

        setTilt({
            rotateX: (0.5 - verticalPosition) * 8,
            rotateY: (horizontalPosition - 0.5) * 10,
        });
    };

    const resetPointerState = () => {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div
            className="flex w-full max-w-80 flex-col items-center"
            onPointerEnter={(event) => {
                if (event.pointerType !== 'touch') {
                    setIsHovered(true);
                }
            }}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointerState}
        >
            <div className="h-3 w-3 rounded-full bg-accent-400" />

            <motion.div
                className="origin-top perspective-[900px]"
                animate={
                    isHovered
                        ? { rotate: 0, ...tilt }
                        : { rotate: [-5, 5, -5], ...tilt }
                }
                transition={{
                    rotate: isHovered
                        ? { duration: 0.4, ease: 'easeOut' }
                        : { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    rotateX: { type: 'spring', stiffness: 220, damping: 24 },
                    rotateY: { type: 'spring', stiffness: 220, damping: 24 },
                }}
            >
                <div className="mx-auto h-16 w-1.5 rounded-full bg-gradient-to-b from-neutral-400 to-accent-400 dark:from-neutral-600 dark:to-accent-500" />
                <div className="mx-auto -mt-1 h-4 w-8 rounded-sm border-2 border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800" />

                <div className="mt-1 w-full rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                        <img
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="mt-3 text-center">
                        <p className="font-display text-lg font-semibold">
                            {name}
                        </p>
                        <p className="text-xs text-neutral-500">{role}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
