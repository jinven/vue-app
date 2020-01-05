import { expect } from 'chai'
import { mutations } from '@/store'

const { increment} = mutations

describe('mutations', () => {
  it('increment', () => {
    const state = {count:0}
    increment(state);
    expect(state.count).to.equal(1)
  })
})
