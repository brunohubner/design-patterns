import { ShoppingOrder } from "./shoppingOrder/ShoppingOrder"

const order = new ShoppingOrder()
order.getStateName()
order.approvePayment()
order.shipOrder()
order.waitPayment()
order.rejectPayment()
