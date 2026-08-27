import type { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="mx-auto max-w-[1320px] px-8 lg:px-12">{children}</div>
    );
}
