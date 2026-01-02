import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Headers";
import CheckLoading from "./CheckLoading";

//parent route of every single child route that we have in our application
//outlet is to render whatever is the current nested route
export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);
  return (
    <div className="layout">
      {isLoading && <CheckLoading />}
      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
