import QuickAction from "../Dashboard/QuickAction";
import ProfileDropdown from "../dropdowns/ProfileDropdown";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between px-8 pt-5 pb-2">
      <div>
        Search Bar
      </div >
      <div className="flex items-center gap-6">
        <QuickAction />
        <ProfileDropdown />
      </div>
    </header >
  );
};

export default Topbar;
