export default function AmbientGlow() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-drift-1 absolute top-[-10%] left-[-5%] h-[420px] w-[420px] rounded-full bg-accent-500/25 blur-[110px]" />
            <div className="animate-drift-2 absolute right-[-10%] bottom-[-15%] h-[380px] w-[380px] rounded-full bg-accent-400/20 blur-[100px]" />
        </div>
    );
}
