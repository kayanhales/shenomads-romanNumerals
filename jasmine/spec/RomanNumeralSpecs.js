describe('RomanNumeral', function () {
  it ('returns I for 1', function () {
    expect(RomanNumeral(1)).toEqual('I')
  })
  it ('returns IX for 9', function () {
    expect(RomanNumeral(9)).toEqual('IX')
  })
  it ('returns L for 50', function () {
    expect(RomanNumeral(50)).toEqual('L')
  })
  it ('returns DCCCII for 802', function () {
    expect(RomanNumeral(802)).toEqual('DCCCII')
  })
  it ('returns XXI for 21', function () {
    expect(RomanNumeral(21)).toEqual('XXI')
  })
  it ('returns DCCLXXVII for 777', function () {
    expect(RomanNumeral(777)).toEqual('DCCLXXVII')
  })
  it ('returns MMX for 2010', function () {
    expect(RomanNumeral(2010)).toEqual('MMX')
  })

})
