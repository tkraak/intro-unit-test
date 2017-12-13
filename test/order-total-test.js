import test from 'ava'
import { paidShippingOrder, freeShippingOrder } from './fixtures/orders'
import { orderTotal } from '../src/order-total'

test('calculate order total with paid shipping', t => {
  t.is(orderTotal(paidShippingOrder), 856)
})

test('calculate order total with free shipping', t => {
  t.is(orderTotal(freeShippingOrder), 1616)
})
