import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-6 right-6 z-50
                w-12 h-12 rounded-full
                bg-button text-section font-black text-txth5
                flex items-center justify-center
                transition-all duration-400
                hover:scale-110 hover:bg-red-500
                cursor-pointer
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none "}
            `}
        >
            ↑
        </button>
    );
}
