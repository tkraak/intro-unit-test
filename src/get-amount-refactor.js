const { coins } = require('../test/fixtures/coins')

exports.getAmountRefactor = function (coinType) {
  return coins.hasOwnProperty(coinType)
    ? coins[coinType]
    : (() => { throw new Error(`Unrecognized coin ${coinType}`) })()
}
