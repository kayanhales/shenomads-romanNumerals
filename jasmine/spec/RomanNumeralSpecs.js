describe('RomanNumeral', function () {
  it ('returns I for 1', function () {
    expect(RomanNumeral(1)).toEqual('I')
  })
  it ('returns V for 5', function () {
    expect(RomanNumeral(5)).toEqual('V')
  })
  it ('returns L for 50', function () {
    expect(RomanNumeral(50)).toEqual('L')
  })
  it ('returns CMII for 902', function () {
    expect(RomanNumeral(902)).toEqual('CMII')
  })
  it ('returns XLV for 45', function () {
    expect(RomanNumeral(45)).toEqual('XLV')
  })
  it ('returns MCMXCVI for 1996', function () {
    expect(RomanNumeral(1996)).toEqual('MCMXCVI')
  })
  it ('returns MMXVIII for 2018', function () {
    expect(RomanNumeral(2018)).toEqual('MMXVIII')
  })

})
