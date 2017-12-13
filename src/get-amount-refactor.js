exports.getAmountRefactor = function (coinType) {
  const coins = {
    p: 1,
    n: 5,
    d: 10,
    q: 25
  }

  return coins.hasOwnProperty(coinType)
    ? coins[coinType]
    : (() => { throw new Error(`Unrecognized coin ${coinType}`) })()
}
