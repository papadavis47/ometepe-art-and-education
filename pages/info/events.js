import Construction from "../../components/Construction";
import { useAppContext } from "../../Context/appContext.js";

const Events = () => {
  const { spanish } = useAppContext();
  return (
    <div className='pt-28'>
      <Construction title={spanish ? "Eventos" : "Events"} />
    </div>
  );
};

export default Events;
