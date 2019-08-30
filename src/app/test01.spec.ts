

// xdescribe( -- To NOT RUN IT put an x in front
// fdescribe( -- To ONLY RUN this test put a f in front
describe('Name Test01', () => {

  let expectedText = '';
  let notExpectedText = '';
  let expecteMatch = null;

  beforeEach(() => {
    expectedText = 'Test01';
    notExpectedText = 'Test02';
    expecteMatch = new RegExp(/^Test/);
  });

  afterEach(() => {
    expectedText = '';
    notExpectedText = '';
  });


  it('Check if Test01 is Test01 - 01',
    () => expect('Test01').toBe('Test01')
  );
  it('Check if Test01 is Test01 - 02',
    () => expect('Test01').toBe(expectedText)
  );


  it('Check if Test01 is not Test02 - 01',
    () => expect('Test01').not.toBe('Test02')
  );
  it('Check if Test01 is not Test02 - 02',
    () => expect('Test01').not.toBe(notExpectedText)
  );


  it('Check if Test01 starts with hello',
    () => expect('Test01').toMatch(expecteMatch)
  );


  // it('Check if Test01 is not Test01',
  //   () => expect('Test01').isNot('Test02')
  // );

});
