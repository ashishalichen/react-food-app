const { sum } = require("../sum")

test('Calculate it boy!!', () => {

    const res = sum(1, 2)

    // assertion
    expect(res).toBe(3)
})