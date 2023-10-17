import Link from "next/link";
import { USER_ROLE } from "./role";
import {
  MdHomeRepairService,
  MdMedicalServices,
  MdOutlinePostAdd,
  MdOutlineSpaceDashboard,
  MdRateReview,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiFillFileAdd, AiOutlineUserSwitch } from "react-icons/ai";
import {
  FaQ,
  FaQuoteRight,
  FaUserNurse,
  FaUserTie,
  FaUsers,
} from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { BsFillPostcardFill, BsSignpost2 } from "react-icons/bs";
import { BiKey } from "react-icons/bi";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import { IoAddCircle } from "react-icons/io5";
import { RiUserStarFill } from "react-icons/ri";

export const sidebarItems = (role: string) => {
  const defaultSidebarItems = [
    {
      label: (
        <Link href={`/${role}/dashboard`} className="w-full my-5">
          Dashboard
        </Link>
      ),
      icon: MdOutlineSpaceDashboard,
      key: `/${role}/dashboard`,
    },
    {
      label: "Profile",
      icon: CgProfile,
      children: [
        {
          label: (
            <Link href={`/profile`} className="w-full my-5">
              My Profile
            </Link>
          ),
          icon: FaUserNurse,
          key: `/profile`,
        },
        {
          label: (
            <Link href={`/profile/change-password`} className="w-full my-5">
              Change Password
            </Link>
          ),
          icon: BiKey,
          key: `/profile/change-password`,
        },
      ],
    },
  ];

  const adminSidebarItems = [
    ...defaultSidebarItems,
    {
      label: (
        <Link href={`/${role}/manage-user`} className="w-full my-5">
          Manage Users
        </Link>
      ),
      icon: AiOutlineUserSwitch,
      key: `/${role}/manage-user`,
    },
    {
      label: "Service",
      icon: MdHomeRepairService,
      children: [
        {
          label: (
            <Link href={`/${role}/service`} className="w-full my-5">
              View Services
            </Link>
          ),
          icon: HiMiniViewfinderCircle,
          key: `/${role}/service`,
        },
        {
          label: (
            <Link href={`/${role}/service/add-service`} className="w-full my-5">
              Add Service
            </Link>
          ),
          icon: AiFillFileAdd,
          key: `/${role}/service/add-service`,
        },
      ],
    },
    {
      label: "Booking",
      icon: IoAddCircle,
      children: [
        {
          label: (
            <Link href={`/${role}/booking/new-booking`} className="w-full my-5">
              New Bookings
            </Link>
          ),
          icon: GrServices,
          key: `/${role}/booking/new-booking`,
        },
        {
          label: (
            <Link
              href={`/${role}/booking/all-bookings`}
              className="w-full my-5">
              View Bookings
            </Link>
          ),
          icon: MdMedicalServices,
          key: `/${role}/booking/all-bookings`,
        },
      ],
    },
    {
      label: "Content",
      icon: FaQuoteRight,
      children: [
        {
          label: (
            <Link href={`/${role}/content/add-blog`} className="w-full my-5">
              Add Blog
            </Link>
          ),
          icon: MdOutlinePostAdd,
          key: `/${role}/content/add-blog`,
        },
        {
          label: (
            <Link href={`/${role}/content/all-blogs`} className="w-full my-5">
              View All Blogs
            </Link>
          ),
          icon: BsFillPostcardFill,
          key: `/${role}/content/all-blogs`,
        },
        {
          label: (
            <Link href={`/${role}/content/add-faq`} className="w-full my-5">
              Add Faq
            </Link>
          ),
          icon: BsSignpost2,
          key: `/${role}/content/add-faq`,
        },
        {
          label: (
            <Link href={`/${role}/content/all-faqs`} className="w-full my-5">
              View All Faqs
            </Link>
          ),
          icon: FaQ,
          key: `/${role}/content/all-faqs`,
        },
        {
          label: (
            <Link href={`/${role}/content/add-tag`} className="w-full my-5">
              Add Tag
            </Link>
          ),
          icon: BsSignpost2,
          key: `/${role}/content/add-tag`,
        },
        {
          label: (
            <Link href={`/${role}/content/all-tags`} className="w-full my-5">
              View All Tags
            </Link>
          ),
          icon: FaQ,
          key: `/${role}/content/all-tags`,
        },
      ],
    },
  ];

  const superAdminSidebarItems = [
    ...defaultSidebarItems,
    {
      label: "Manage Admins",
      icon: FaUserTie,
      key: `/${role}/manage-admin`,
      children: [
        {
          label: (
            <Link href={`/${role}/add-admin`} className="w-full my-5">
              Add Admins
            </Link>
          ),
          icon: RiUserStarFill,
          key: `/${role}/add-admin`,
        },
        {
          label: (
            <Link href={`/${role}/manage-admin`} className="w-full my-5">
              Manage Admins
            </Link>
          ),
          icon: FaUsers,
          key: `/${role}/manage-admin`,
        },
      ],
    },
  ];

  const userSidebarItems = [
    ...defaultSidebarItems,
    {
      label: (
        <Link href={`/${role}/my-reviews`} className="w-full my-5">
          My Reviews
        </Link>
      ),
      icon: MdRateReview,
      key: `/${role}/my-reviews`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
