import CityItem from "./CityItem.jsx";
import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return(
  <Message message="Add your first city by clicking on a city of the map" />
  );
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
