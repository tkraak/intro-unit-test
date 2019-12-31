import test from 'ava'
import { getAmountRefactor } from '../src/get-amount-refactor'

test('the function is defined', t => {
  // .true(value)
  // assert that `value` is `true`
  t.true(typeof getAmountRefactor === 'function')
})

test('penny should return 1', t => {
  // .is(value, expected)
  // assert that `value` is the same as `expected`
  t.is(getAmountRefactor('p'), 1)
})

test('nickel should return 5', t => {
  // .not(value)
  // assert that `value` is not the same as `expected`
  t.not(!getAmountRefactor('n'), 5)
})

test('dime should return 10', t => {
  // .truthy(value)
  // assert that `value` is truthy
  t.truthy(getAmountRefactor('d'))
})

test('quarter should return 25', t => {
  // .falsy(value)
  // assert that `value` is falsy
  t.falsy(!getAmountRefactor('q'))
})

test('non-existing object property should throw an error', t => {
  // .throws(function or promise, error)
  // assert that `function` throws an error, or `promise` rejects with an error
  const error = t.throws(() => getAmountRefactor('x'), Error)
  t.is(error.message, 'Unrecognized coin x')
})
