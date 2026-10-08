import React, { useEffect, useId, useRef, useState } from 'react';
import { Language } from '../types';

const phoneNumbers = [
  { label: '+1 (281) 662-4097', href: 'tel:+12816624097' },
  { label: '+1 (832) 859-5138', href: 'tel:+18328595138' },
];

interface CallOptionsButtonProps {
  language: Language;
  label: string;
  className: string;
  wrapperClassName?: string;
  children: React.ReactNode;
}

export const CallOptionsButton: React.FC<CallOptionsButtonProps> = ({
  language,
  label,
  className,
  wrapperClassName = '',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const optionsId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={`relative inline-flex ${wrapperClassName}`} ref={containerRef}>
      <button
        type="button"
        aria-label={label}
        aria-expanded={isOpen}
        aria-controls={optionsId}
        onClick={() => setIsOpen((open) => !open)}
        className={className}
      >
        {children}
      </button>
      {isOpen && (
        <div
          id={optionsId}
          role="group"
          aria-label={language === 'en' ? 'Choose a phone number' : 'Elige un número de teléfono'}
          className="absolute right-0 top-full z-[60] mt-2 w-56 overflow-hidden rounded-md border border-stone-700 bg-stone-950 p-1.5 shadow-xl"
        >
          <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-stone-400">
            {language === 'en' ? 'Choose a number to call' : 'Elige a cuál número llamar'}
          </p>
          {phoneNumbers.map((number) => (
            <a
              key={number.href}
              href={number.href}
              onClick={() => setIsOpen(false)}
              className="block rounded px-3 py-2.5 text-sm font-bold text-white hover:bg-stone-800 hover:text-amber-400 focus:bg-stone-800 focus:text-amber-400 focus:outline-none"
            >
              {number.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
