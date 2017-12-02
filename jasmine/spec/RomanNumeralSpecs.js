describe('RomanNumeral', function () {
  it ('returns I for 1', function () {
    expect(RomanNumeral(1)).toEqual('I')
  })
  it ('returns IV for 4', function () {
    expect(RomanNumeral(4)).toEqual('IV')
  })
  it ('returns D for 500', function () {
    expect(RomanNumeral(4)).toEqual('IV')
  })
  it ('returns XCII for 92', function () {
    expect(RomanNumeral(92)).toEqual('XCII')
  })
  it ('returns CDLVI for 456', function () {
    expect(RomanNumeral(456)).toEqual('CDLVI')
  })
  it ('returns MCMXCVIII for 1998', function () {
    expect(RomanNumeral(1998)).toEqual('MCMXCVIII')
  })
  it ('returns MMXVII for 2017', function () {
    expect(RomanNumeral(2017)).toEqual('MMXVII')
  })

})
