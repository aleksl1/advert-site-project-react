const NavigationItems = (props) => {
  const menu = props.items.map((item, index) => {
    return (
      <li key={index} className="top-bar-menu__item">
        <a href={item.path} className="top-bar-menu__link">
          {item.name}
        </a>
      </li>
    );
  });

  return <>{menu}</>;
};

export default NavigationItems;
