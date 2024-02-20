import { CardItem } from "../CardItems/CardItem";

export const CardList = ({ shoppingItems }) => {
  return (
    <div className="mt-28 w-[90%] flex flex-col py-6 items-center gap-32">
      {shoppingItems.map(({ id, title, tutor, price, thumbnail }) => {
        return (
          <CardItem
            id={id}
            key={id}
            title={title}
            tutor={tutor}
            price={price}
            thumbnail={thumbnail}
          />
        );
      })}
    </div>
  );
};
