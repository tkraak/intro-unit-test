exports.getAmountRefactor = function (coins, coinType) {
  return coins.hasOwnProperty(coinType)
    ? coins[coinType]
    : (() => { throw new Error(`Unrecognized coin ${coinType}`) })()
}
