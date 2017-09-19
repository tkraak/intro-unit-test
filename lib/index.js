function getAmount (coinType) {
  // COINS:
  // [p]enny
  // [n]ickel
  // [d]ime
  // [q]uarter

  switch (coinType) {
    case 'p': return 1
    case 'n': return 5
    case 'd': return 10
    case 'q': return 25
    default: throw new Error('Unrecognized coin ' + coinType)
  }
}

function getAmountRefactor (coinType) {
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

exports.getAmount = getAmount
exports.getAmountRefactor = getAmountRefactor
