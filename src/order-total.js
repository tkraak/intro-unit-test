exports.orderTotal = function orderTotal (order) {
  const totalItems = order.items
          .filter(item => !item.shipping)
          .reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const shippingItem = order.items.find(item => !!item.shipping)
  const shipping = totalItems > 1000 ? 0 : shippingItem.price

  return totalItems + shipping
}
