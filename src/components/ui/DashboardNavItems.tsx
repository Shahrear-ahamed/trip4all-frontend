"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import { BiLogOut } from "react-icons/bi";
import { sidebarItems } from "@/constant/sideBarItems";

interface DashboardNavItemsProps {
  role: string;
  toggleSideMenu: () => void;
}

export default function DashboardNavItems({
  role,
  toggleSideMenu,
}: DashboardNavItemsProps) {
  const pathname = usePathname();
  const menuItems = sidebarItems(role);
  return (
    <>
      <div className="text-gray-500 dark:text-gray-400">
        {menuItems.map((item) => (
          <Accordion
            type="single"
            collapsible
            key={item.key}
            className={`border-b cursor-pointer ${
              item.key?.includes(pathname) && " text-primary"
            }`}>
            <AccordionItem value="item-1" className="border-b-0 w-40 mx-auto">
              {item.children ? (
                <AccordionTrigger className="hover:no-underline">
                  <div
                    onClick={toggleSideMenu}
                    className="w-40 mx-auto flex items-center">
                    <item.icon className="w-6 h-6" />
                    <span className="ml-5">{item.label}</span>
                  </div>
                </AccordionTrigger>
              ) : (
                <div
                  onClick={toggleSideMenu}
                  className="w-40 py-4 mx-auto flex items-center">
                  <item.icon className="w-6 h-6" />
                  <span className="ml-5 text-sm">{item.label}</span>
                </div>
              )}
              {item.children && (
                <AccordionContent className="just-test">
                  {item.children.map((child) => (
                    <div
                      key={child.key}
                      className="w-full my-5 flex items-center">
                      <child.icon className="w-6 h-6" />
                      <span className="ml-3">{child.label}</span>
                    </div>
                  ))}
                </AccordionContent>
              )}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      <div>
        <Button variant="destructive" className="w-full flex">
          <BiLogOut className="mr-3" /> Logout
        </Button>
      </div>
    </>
  );
}
