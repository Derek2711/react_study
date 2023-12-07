import LogoYoutube from "../assets/LogoYoutube";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

export default function PageHeader() {
    const [showFullWidthSearch, setshowFullWidthSearch] = useState(false);

    return (
        <div className="flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4 mt-1">
            <div className={`flex-shrink-0 gap-4 items-center ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button variant="ghost" size="icon">
                    <Menu />
                </Button>
                <a href="/">
                    <LogoYoutube />
                </a>
            </div>
            <form className={`gap-4 justify-center flex-grow ${showFullWidthSearch ? "flex" : "md:flex hidden"}`}>
                {showFullWidthSearch && (
                    <Button type="button" variant="ghost" size="icon" onClick={() => setshowFullWidthSearch(false)}>
                        <ArrowLeft />
                    </Button>
                )}
                <div className="flex flex-grow max-w-[600px]">
                    <input type="search" placeholder="Search"
                        className="rounded-l-full px-5 border border-secondary-border
                    shadow-inner shadow-secondary w-full outline-none focus:border-blue-500"/>
                    <Button className="py-2 px-4 rounded-r-full border border-secondary-border
                     border-l-0 flex-shrink-0">
                        <Search />
                    </Button>
                </div>
                <Button type="button" size="icon" className="flex-shrink-0">
                    <Mic />
                </Button>
            </form>
            <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button onClick={() => setshowFullWidthSearch(true)} variant="ghost" size="icon" className="md:hidden">
                    <Search />
                </Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Mic />
                </Button>
                <Button variant="ghost" size="icon">
                    <Upload />
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell />
                </Button>
                <Button variant="ghost" size="icon">
                    <User />
                </Button>
            </div>
        </div>
    )
}