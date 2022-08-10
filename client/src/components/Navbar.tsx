import React, { useEffect } from "react"
import { useDarkMode } from "usehooks-ts"

const Navbar = () => {
    const { isDarkMode } = useDarkMode(true);

    useEffect(() => {
        const className = "dark"
        const element = window.document.body;
        isDarkMode ? element.classList.add(className) : element.classList.remove(className);
    }, [isDarkMode]);

    return <nav className="bg-all shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
                <div>
                    <a href="/" className="flex items-center py-4 px-2">
                        <span className="font-semibold text-lg text-all text-hover">Weather ReactJS</span>
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="https://pantelis.theodosiou.me" target="_blank" rel="noreferrer">
                        <Icon prefix="fa-brands" icon="fa-github" extraClass="text-lg text-all text-hover py-4 px-2" />
                    </a>
                    <Icon icon={isDarkMode ? 'fa-moon' : 'fa-sun'} extraClass="text-lg text-all text-hover py-4 px-2" />
                </div>
            </div>
        </div>
    </nav>
}

const Icon = ({ icon, prefix = "fa-solid", extraClass }: IconProps) => {
    const _extraClass = String(extraClass).split(" ").map(x => x.trim());
    const className = [prefix, icon, ..._extraClass].join(" ");
    const { toggle } = useDarkMode()
    return (
        <button onClick={toggle} className="">
            <span className={className}></span>
        </button>
    )
}

interface IconProps {
    prefix?: "fa-brands" | "fa-regular" | "fa-solid";
    icon: string;
    extraClass?: string
}

export default Navbar