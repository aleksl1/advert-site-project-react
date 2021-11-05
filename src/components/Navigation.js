import NavigationItems from "./NavigationItems";

const Navigation = () => {
  const menuItems = [
    { name: "Oglądaj", path: "/home" },
    { name: "Dodaj", path: "/add" },
    { name: "Wyszukaj", path: "/search" },
    { name: "Profil", path: "/user" },
  ];

  return (
    <nav className="top-bar-menu">
      <ul className="top-bar-menu__list">
        <NavigationItems items={menuItems} />

        {/* <li class="top-bar-menu__item">
          <a href="/" class="top-bar-menu__link">
            Oglądaj
          </a>
        </li>
        <li class="top-bar-menu__item">
          <a href="/" class="top-bar-menu__link">
            Dodaj
          </a>
        </li>
        <li class="top-bar-menu__item">
          <a href="/" class="top-bar-menu__link">
            Wyszukaj
          </a>
        </li>
        <li class="top-bar-menu__item">
          <a href="/" class="top-bar-menu__link">
            Profil
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
