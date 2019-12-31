const { coins } = require('../test/fixtures/coins')

exports.getAmountRefactor = function (coinType) {
  return coins.hasOwnProperty(coinType) // eslint-disable-line no-prototype-builtins
    ? coins[coinType]
    : (() => { throw new Error(`Unrecognized coin ${coinType}`) })()
}
