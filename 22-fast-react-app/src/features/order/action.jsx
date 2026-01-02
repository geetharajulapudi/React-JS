//Whenever the form is submitted react router call this action function and it will pass in the request that was submitted

import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log(order);

  const newOrder = await createOrder(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "please enter a valid mobile number";

  if (Object.keys(errors).length>0) return errors;
  return redirect(`/order/${newOrder.id}`);
}
