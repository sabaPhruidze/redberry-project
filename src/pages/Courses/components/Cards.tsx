import CardsMiddle from "./CardsMiddle";
import CardsTop from "./CardsTop";
import Pagination from "./Pagination";
const Cards = () => {
  return (
    <div className="w-[1167px] h-[1554px]">
      <CardsTop />
      <CardsMiddle />
      <Pagination />
    </div>
  );
};

export default Cards;
