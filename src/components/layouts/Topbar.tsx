import ProfileDropdown from "../dropdowns/ProfileDropdown";
import RedirectButton from "../utils/Buttons/RedirectButton";

const Topbar = () => {
  return (
    <header className="bg-white flex items-center justify-between px-8 py-5">
      <div>
        Search Bar
      </div>
      <div className="flex items-center gap-6">
        <RedirectButton text="+ Add Expense" to="/transaction" />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Topbar;
