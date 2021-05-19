import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51HyLfWCrURxc9HmkEheG5N9xRtZNnmFHuz5aUk8gBwWrsFs6srGr0zcBKOCHfSaQDQGYhMGEUIcy5ZK0jIzOtvnq00td4fdFN8")
  }
  return stripePromise
}