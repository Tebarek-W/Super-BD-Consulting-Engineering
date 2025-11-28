import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    children: React.ReactNode;
    id?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24", className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
