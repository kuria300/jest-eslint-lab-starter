const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('Index.js', ()=>{
  describe(('capitalize'), ()=>{
    it('Should capitalizes the first letter of each word in the input string', ()=>{
       expect(capitalizeWords('hello world')).toBe('Hello World')
    })
  })
  describe(('Filter'), ()=>{
    it('should filter active users from the array.', ()=>{
       expect(filterActiveUsers([{ name: "Alice", isActive: true },{ name: "Bob", isActive: false },])).toEqual([{ name: "Alice", isActive: true }])
    })
  })
  describe(('Logaction'), ()=>{
    it('Should log an action performed by user with a timestamp', ()=>{
        const timestamp=new Date().toISOString().slice(0,19)
        expect(logAction('login', 'john')).toContain(`User john performed login at ${timestamp}`)
    })
  })
})