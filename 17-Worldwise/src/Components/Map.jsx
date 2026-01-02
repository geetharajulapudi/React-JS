import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export default function Map() {

  const navigate = useNavigate();                                             
  const [searchParams, setSearchparams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form" )}>
      <h1>MAP </h1>
      <h1>
        Position : {lat}, {lng}
      </h1>
      <button onClick={() => setSearchparams({ lat: 23, lng: 13 })}>
        change position
      </button>
    </div>
  );
}
