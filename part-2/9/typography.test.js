const calc = require('./index');

test(`given "амперсанд - & , меньше - < , больше - > , двойные ковычки - " , апостроф - ' ", expected "амперсанд - &amp; , меньше - &lt; , больше - &gt; , двойные ковычки - &quot; , апостроф - &apos;"`,() =>{
    expect(calc(`амперсанд - & , меньше - < , больше - > , двойные ковычки - " , апостроф - '`)).toEqual("амперсанд - &amp; , меньше - &lt; , больше - &gt; , двойные ковычки - &quot; , апостроф - &apos;")
})
