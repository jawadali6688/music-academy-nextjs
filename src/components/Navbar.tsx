"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
       <Menu setActive={setActive} >
        <Link href={"/"}>
        <MenuItem  setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
        <div className="flex flex-col gap-4">
            <HoveredLink href="/courses">
                All Courses
            </HoveredLink>
            <HoveredLink href="/all_0">
                Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/all_1">
                Advance Composition Theory
            </HoveredLink>
            <HoveredLink href="/all_2">
                Song Writing
            </HoveredLink>
            <HoveredLink href="/all_3">
                Music Production
            </HoveredLink>
        </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active}  item="Contact Us">
        </MenuItem>
       </Menu>
      </div>
    );
  }
  

export default Navbar