import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Separator } from "@/components/ui/separator"

import Image from "next/image"
import Navitems from "./Navitems"

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">Open</SheetTrigger>
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src="/assets/images/Logo.svg"
          alt="log"
          width={128}
          height={38}
          />
          <Separator className="border border-gray-50"/>
          <Navitems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav