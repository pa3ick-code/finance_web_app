'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function MobileNav({user}: MobileNavProps) {
    const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
        <Sheet>
            <SheetTrigger>
                <Image src='/icons/hamburger.svg' alt="Hamburger" width={30} height={30} className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent side='left' className="border-none bg-white">
                 <Link href='/' className='cursor-pointer flex items-center gap-1 px-4'>
                    <Image 
                        src='icons/logo.svg'
                        alt='Hybrid logo'
                        width={34}
                        height={34}
                    />
                    <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Hybrid</h1>
                </Link>

                <div className="mobilenav-sheet">
                    <SheetClose asChild>
                        <nav className="flex flex-col h-full gap-6 pt-16 text-white">
                            
                            {sidebarLinks.map(({route, label, imgURL})=>{
                            const isActive = 
                            pathname === route || pathname.startsWith(`${route}/`)
                            return(
                                    <SheetClose asChild key={route}>
                                        <Link
                                        href={route}
                                        key={label}
                                        className={cn("mobilenav-sheet_close w-full", {'bg-bank-gradient': isActive})}
                                        >
                                            <Image 
                                            src={imgURL}
                                            alt='menu icon'
                                            width={20}
                                            height={20}
                                            className={cn({'brightness-[3] invert-0': isActive})}
                                            />

                                            <p className={(cn('text-16 text-black-1 font-semibold', {'text-white': isActive}))}>
                                            {label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                            USER
                        </nav>
                    </SheetClose>
                    <Footer user={user} type="mobile" />
                </div>
            </SheetContent>
        </Sheet>
    </section>
  );
}
