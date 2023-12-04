import LogoYoutube from "../assets/LogoYoutube";
import { Menu } from "lucide-react";

export default function PageHeader() {
    return (
        <div className="flex justify-between gap-10 lg:gap-20">
            <div className="flex flex-shrink-0 gap-4 items-center">
                <button>
                    <Menu />
                </button>
                <a href="/">
                    <LogoYoutube />
                </a>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}