import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 font-mono text-xs md:text-sm ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <span className="text-slate-500 font-normal">/</span>}
            {isLast || !item.href ? (
              <span className="text-red-500 font-bold tracking-wide">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-slate-400 hover:text-white transition-colors tracking-wide">
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
