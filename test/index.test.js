const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('Index.js', ()=>{
  describe(('capitalize'), ()=>{
    it('Should capitalizes the first letter of each word in the input string', ()=>{
       expect(capitalizeWords('hello world')).toBe('Hello World')
    });
    it("empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

   it("special characters", () => {
    expect(capitalizeWords("hello-world")).toBe("Hello-World");
  });

  ("single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });
  })
  describe(('Filter'), ()=>{
    it('should filter active users from the array.', ()=>{
       expect(filterActiveUsers([{ name: "Alice", isActive: true },{ name: "Bob", isActive: false },])).toEqual([{ name: "Alice", isActive: true }])
    })
    it('returns an empty array', ()=>{
      expect(filterActiveUsers([])).toEqual([])
    });
    it("returns an empty array when all users are inactive", () => {
    expect(filterActiveUsers([{ name: "Alice", active: false },{ name: "Bob", active: false }])).toEqual([]);
  });
  })
  describe(('Logaction'), ()=>{
    it('Should log an action performed by user with a timestamp', ()=>{
        const timestamp=new Date().toISOString().slice(0,19)
        expect(logAction('login', 'john')).toContain(`User john performed login action at ${timestamp}`)
    });

    it("handles missing username", () => {
      const timestamp=new Date().toISOString().slice(0,19)
    expect(logAction('logout')).toBe(`User undefined performed logout action at ${timestamp}`);
    });

   it("handles missing action", () => {
    const timestamp=new Date().toISOString().slice(0,19)
    expect(logAction(undefined,"Alice")).toBe(`User Alice performed undefined action at ${timestamp}`);
  });

  it("handles empty string inputs", () => {
    const timestamp=new Date().toISOString().slice(0,19)
    expect(logAction()).toBe(`User undefined performed undefined action at ${timestamp}`);
  });
  })
})