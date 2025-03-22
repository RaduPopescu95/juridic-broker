const Category = () => {
  const categories = [
    { name: "Sfaturi utile", count: 14 },
    { name: "Asigurări auto", count: 9 },
    { name: "Asigurări de locuință", count: 6 },
    { name: "Asigurări de viață și sănătate", count: 7 },
    { name: "Călătorii în siguranță", count: 4 },
    { name: "Noutăți din domeniu", count: 5 },
  ];

  return (
    <ul className="style-none">
      {categories.map((category, index) => (
        <li key={index}>
          <a href="#">
            {category.name}
            <span className="float-end">({category.count})</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Category;
