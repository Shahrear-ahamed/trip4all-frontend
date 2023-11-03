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
import { BiCategory, BiKey, BiSolidDuplicate } from "react-icons/bi";
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
      label: "Service",
      icon: MdHomeRepairService,
      children: [
        {
          label: (
            <Link href={`/${role}/tour`} className="w-full my-5">
              View tours
            </Link>
          ),
          icon: HiMiniViewfinderCircle,
          key: `/${role}/tour`,
        },
        {
          label: (
            <Link href={`/${role}/tour/add-tour`} className="w-full my-5">
              Add tour
            </Link>
          ),
          icon: AiFillFileAdd,
          key: `/${role}/tour/add-tour`,
        },
        {
          label: (
            <Link href={`/${role}/category`} className="w-full my-5">
              View Category
            </Link>
          ),
          icon: BiCategory,
          key: `/${role}/category`,
        },
        {
          label: (
            <Link
              href={`/${role}/category/add-category`}
              className="w-full my-5">
              Add Category
            </Link>
          ),
          icon: BiSolidDuplicate,
          key: `/${role}/category/add-category`,
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
    {
      label: (
        <Link href={`/${role}/feedback`} className="w-full my-5">
          feedback
        </Link>
      ),
      icon: FaQ,
      key: `/${role}/feedback`,
    },
  ];

  const superAdminSidebarItems = [
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
      label: "Review",
      icon: CgProfile,
      children: [
        {
          label: (
            <Link href={`/${role}/review/give-review`} className="w-full my-5">
              Give review
            </Link>
          ),
          icon: FaUserNurse,
          key: `/${role}/review/give-review`,
        },
        {
          label: (
            <Link href={`/${role}/review/my-review`} className="w-full my-5">
              My Review
            </Link>
          ),
          icon: BiKey,
          key: `/${role}/review/my-review`,
        },
      ],
    },
    ,
    {
      label: (
        <Link href={`/${role}/feedback`} className="w-full my-5">
          Feedback
        </Link>
      ),
      icon: MdRateReview,
      key: `/${role}/feedback`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
