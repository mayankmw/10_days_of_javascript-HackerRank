/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vovels = ['a','e','i','o','u'];
    for(let i = 0; i < s.length; i++)
        if(vovels.includes(s[i]))
        console.log(s[i]);
        
     for(let i = 0; i < s.length; i++)
        if(!vovels.includes(s[i]))
        console.log(s[i]);
            
}z