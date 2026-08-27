import { useEffect, useState } from 'react';

type Line = {
    text: string;
    type: 'command' | 'output' | 'status';
    delayAfter?: number; // ms pause after this line finishes
};

const LINES: Line[] = [
    { text: 'whoami', type: 'command', delayAfter: 300 },
    { text: '> Full-Stack Developer', type: 'output' },
    { text: '> System Architect Intern', type: 'output' },
    { text: '> Code Tinkerer', type: 'output', delayAfter: 500 },
    { text: 'status', type: 'command', delayAfter: 300 },
    { text: '● Available for hire', type: 'status', delayAfter: 500 },
    { text: 'execute portfolio.sh', type: 'command' },
];

const TYPE_SPEED = 35; // ms per character

export default function TerminalWidget() {
    const [visibleLines, setVisibleLines] = useState<string[]>([]);
    const [currentText, setCurrentText] = useState('');
    const [lineIndex, setLineIndex] = useState(0);
    const done = lineIndex >= LINES.length;

    useEffect(() => {
        if (done) {
            return;
        }

        const line = LINES[lineIndex];
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            charIndex++;
            setCurrentText(line.text.slice(0, charIndex));

            if (charIndex === line.text.length) {
                clearInterval(typeInterval);

                setTimeout(() => {
                    setVisibleLines((prev) => [...prev, line.text]);
                    setCurrentText('');
                    setLineIndex((prev) => prev + 1);
                }, line.delayAfter ?? 150);
            }
        }, TYPE_SPEED);

        return () => clearInterval(typeInterval);
    }, [lineIndex, done]);

    const renderLine = (text: string, isCommand: boolean) => {
        if (isCommand) {
            return (
                <div className="text-neutral-100">
                    <span className="text-accent-400">root@cynthia</span>
                    <span className="text-neutral-400">:~$ </span>
                    <span>{text}</span>
                </div>
            );
        }

        return <div className="pl-1 text-neutral-400">{text}</div>;
    };

    return (
        <div className="w-full max-w-md overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-xl">
            <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-neutral-500">
                    cynthia@builder-os:~
                </span>
            </div>

            <div className="min-h-[220px] space-y-1.5 p-5 font-mono text-sm">
                {visibleLines.map((text, i) => {
                    const meta = LINES[i];

                    return (
                        <div key={i}>
                            {renderLine(text, meta.type === 'command')}
                        </div>
                    );
                })}

                {!done && lineIndex < LINES.length && (
                    <div>
                        {renderLine(
                            currentText,
                            LINES[lineIndex].type === 'command',
                        )}
                        <span className="inline-block h-4 w-2 animate-pulse bg-accent-400 align-middle" />
                    </div>
                )}

                {done && (
                    <span className="inline-block h-4 w-2 animate-pulse bg-accent-400 align-middle" />
                )}
            </div>
        </div>
    );
}
