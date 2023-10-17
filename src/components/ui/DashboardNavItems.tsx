"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./button";
import { BiLogOut } from "react-icons/bi";
import { sidebarItems } from "@/constant/sideBarItems";
import { removeUserInfo } from "@/service/auth.service";
import { authKey } from "@/constant/storageKey";

interface DashboardNavItemsProps {
  role: string;
  canToggle: boolean;
  toggleSideMenu: () => void;
}

export default function DashboardNavItems({
  role,
  canToggle,
  toggleSideMenu,
}: DashboardNavItemsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const menuItems = sidebarItems(role);

  const handleToggleMenu = () => {
    if (canToggle) {
      toggleSideMenu();
    }
  };

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/sign-in");
  };

  return (
    <>
      <div className="text-gray-500 dark:text-gray-400">
        {menuItems.map((item) => (
          <Accordion
            type="single"
            collapsible
            key={item.key}
            className="border-b cursor-pointer">
            <AccordionItem value="item-1" className="border-b-0 w-40 mx-auto">
              {item.children ? (
                <AccordionTrigger className="hover:no-underline">
                  <div
                    onClick={handleToggleMenu}
                    className="w-40 mx-auto flex items-center">
                    <item.icon className="w-6 h-6" />
                    <span className="ml-5">{item.label}</span>
                  </div>
                </AccordionTrigger>
              ) : (
                <div
                  onClick={handleToggleMenu}
                  className={`w-40 py-4 mx-auto flex items-center ${
                    item.key === pathname && "text-primary"
                  }`}>
                  <item.icon className="w-6 h-6" />
                  <span className="ml-5 text-sm">{item.label}</span>
                </div>
              )}
              {item.children && (
                <AccordionContent className="just-test">
                  {item.children.map((child) => (
                    <div
                      key={child.key}
                      className={`w-full my-5 flex items-center ${
                        child.key === pathname && "text-primary"
                      }`}>
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
        <Button variant="destructive" className="w-full flex" onClick={logOut}>
          <BiLogOut className="mr-3" /> Logout
        </Button>
      </div>
    </>
  );
}
