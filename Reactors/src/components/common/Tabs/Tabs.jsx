export const Tabs = ({ tabList, currCatergory, setCurrCategory }) => {
  const handleTabClick = (tabId) => {
    setCurrCategory(tabId);
  };

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      {tabList.map((tab) => (
        <li key={tab.id} className="me-2 cursor-pointer">
          <a
            style={
              currCatergory === tab.id
                ? { opacity: "1", backgroundColor: "rgb(251, 191, 36)" }
                : {
                    opacity: "0.4",
                    backgroundColor: "transparent",
                    border: "1px solid transparent",
                  }
            }
            href={tab.href}
            className={`inline-block px-4 py-3 text-black rounded-3xl transition-all duration-100 ${
              Number(currCatergory) === tab.id
                ? "opacity-100 bg-amber-400"
                : "opacity-40 bg-transparent border border-transparent hover:border-gray-400"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.categoryName}
          </a>
        </li>
      ))}
    </ul>
  );
};
