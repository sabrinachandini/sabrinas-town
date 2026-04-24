'use client';
import { useState } from 'react';
import Link from 'next/link';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex sm:hidden flex-col gap-[4px] p-1 cursor-pointer"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <span className="block w-5 h-[2px] bg-[var(--cream)] rounded-sm" />
        <span className="block w-5 h-[2px] bg-[var(--cream)] rounded-sm" />
        <span className="block w-[13px] h-[2px] bg-[var(--cream)] rounded-sm" />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 right-0 z-50"
          style={{ background: 'var(--ink)', borderBottom: '3px solid var(--red)' }}
        >
          {['Towns', 'Teach', 'Partner'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '16px 20px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(242,230,200,0.55)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(242,230,200,0.07)',
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
