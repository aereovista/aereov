// src/app/components/WhatsAppButton.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react';

const WhatsAppButton = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const phoneNumber = "5491170655085";
    const message = "Hola! Quisiera consultar sobre sus servicios de drones.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {showTooltip && (
                <span className="mb-2 px-3 py-1 bg-black text-white rounded shadow text-sm animate-fade-in">
                    Escribinos por WhatsApp
                </span>
            )}
            <Link
                href={whatsappUrl}
                target="_blank"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                aria-label="WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.487 5.235 3.487 8.413 0 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.479 5.414 5.596-1.47z" />
                </svg>
            </Link>
        </div>
    );
};

export default WhatsAppButton;
