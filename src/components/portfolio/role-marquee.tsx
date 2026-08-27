const roles = [
    'Full-Stack Developer',
    'Laravel Enthusiast',
    'React Tinkerer',
    'Problem Solver',
];

export default function RoleMarquee() {
    const track = [...roles, ...roles]; // duplicated for seamless loop

    return (
        <div className="mt-16 w-full max-w-md overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex w-max gap-6">
                {track.map((role, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-6 font-mono text-sm text-neutral-500"
                    >
                        {role}
                        <span className="text-accent-500">•</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
