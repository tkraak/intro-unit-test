import test from 'ava'
import { getAmount } from '../src/get-amount'

test('the functions is defined', t => {
  // .true(value)
  // assert that `value` is `true`
  t.true(typeof getAmount === 'function')

  // print a message contextually alongside the test
  // more useful than console.log
  t.log('yay, we a have function!')
})

test('penny should return 1', t => {
  // .is(value, expected)
  // assert that `value` is the same as `expected`
  t.is(getAmount('p'), 1)
})

test('nickel should return 5', t => {
  // .not(value)
  // assert that `value` is not the same as `expected`
  t.not(!getAmount('n'), 5)
})

test('dime should return 10', t => {
  // .truthy(value)
  // assert that `value` is truthy
  t.truthy(getAmount('d'))
})

test('quarter should return 25', t => {
  // .falsy(value)
  // assert that `value` is falsy
  t.falsy(!getAmount('q'))
})

test('non-existing object property should throw an error', t => {
  // .throws(function or promise, error)
  // assert that `function` throws an error, or `promise` rejects with an error
  const error = t.throws(() => getAmount('x'), Error)
  t.is(error.message, 'Unrecognized coin x')
})
