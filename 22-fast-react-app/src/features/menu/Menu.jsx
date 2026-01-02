import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
// import "./Loader";
// import { getMenu } from "/../../services/apiRestuarant";
function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// //creating loader function
// export async function loader() {
//   const menu = await getMenu();
//   return menu;
// }

export default Menu;
