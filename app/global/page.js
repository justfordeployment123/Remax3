"use client";
import { useEffect } from 'react';

export default function Global() {
    useEffect(() => {
        // Redirect to RE/MAX Global website
        window.location.href = 'https://global.remax.com/';
    }, []);

    return (
        <main className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004e9b] mx-auto mb-4"></div>
                <p className="text-gray-600">Redirecting to RE/MAX Global...</p>
            </div>
        </main>
    );
}