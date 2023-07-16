import { HomeIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";

export const Header = ({ darkMode, toggleTheme }) => {
  const arrayBtnsLeft = [
    <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" />,
    darkMode ? <MoonIcon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" onClick={toggleTheme} /> : <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" onClick={toggleTheme} />,
  ];

  const arrayBtnsRight = ["Projetos", "Formação", "Experiências"];

  return (
    <div>
      <header
        id="header"
        className={`shadow-md`}
      >
        <nav
          className="flex justify-between p-2 sm:p-6 2xl:px-24"
          aria-label="Global"
        >
          <div className={`items-center sm:space-x-2 2xl:space-x-6`}>
            {arrayBtnsLeft.map((botao, index) => (
              <div
                key={`header-btns-left-${index}`}
                className={`cursor-pointer inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                  darkMode ? "dark:text-white" : "text-gray-500"
                }`}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {botao}
              </div>
            ))}
          </div>
          <div className={`items-center sm:space-x-2 2xl:space-x-8`}>
            {arrayBtnsRight.map((botao, index) => (
              <div
                key={`header-btns-right-${index}`}
                className={`text-sm sm:text-base 2xl:text-lg cursor-pointer inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                  darkMode ? "dark:text-white" : "text-gray-600"
                }`}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {botao}
              </div>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};
