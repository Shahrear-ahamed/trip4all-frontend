import DashboardNavItems from "./DashboardNavItems";

interface AsideProps {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}

const Aside = ({ isSideMenuOpen, toggleSideMenu }: AsideProps) => {

  return (
    <>
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800  max-h-full min-h-[calc(100vh-80px)] shadow-lg md:flex flex-col justify-between pt-5 pb-10">
        <DashboardNavItems
          toggleSideMenu={toggleSideMenu}
          canToggle={false}
        />
      </aside>

      {/* // mobile menu  */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 z-10 mt-20 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
          onClick={toggleSideMenu}
          style={{
            transition: "opacity 150ms ease-in-out",
            opacity: 0.5,
          }}></div>
      )}
      <aside
        className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-20 overflow-y-auto bg-white dark:bg-gray-800 md:hidden duration-300 flex flex-col justify-between pt-5 pb-10 ${
          isSideMenuOpen ? "left-0" : "-left-[300px]"
        }`}>
        <DashboardNavItems
          toggleSideMenu={toggleSideMenu}
          canToggle={true}
        />
      </aside>
    </>
  );
};

export default Aside;
