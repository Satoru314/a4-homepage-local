interface HeroButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function HeroButton({ href, children, className = "" }: HeroButtonProps) {
    return (
        <div className={`mt-8 md:mt-0 ${className}`}>
            <a
                href={href}
                className="inline-flex items-center justify-center bg-[var(--button-blue)] hover:bg-[color-mix(in_srgb,var(--button-blue)_80%,black)] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg w-56"
            >
                {children}
                <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </a>
        </div>
    );
}
