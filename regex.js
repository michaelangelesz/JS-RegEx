/* 

Sample String
Below is a sample application string similar to the ones StackOver Adoptions will be using these regular expressions on. 

As you go through this activity, use this string to test your regex on using the common built-in JavaScript methods we learned about in class.

*/

let sampleApp = `
name(s): Larissa Souza
phone number(s): 555-123-4567 555-567-8910
email: lsouza@gmail.com 
animals: Dog, cat
bio: Cat ipsum dolor sit amet, exercitationem incididunt. Laborum consequuntur, error velitesse incidunt. Nostrud fugit eu, anim. Sint qui but exercitationem iure yet nesciunt. Occaecat do so ut yet nihil. Fugiat fugiat but voluptatem or velit, for aut. 
status: Approved 
`

/* 

Regular Expression 1: Phone Number 
- Format to match: ###-###-#### 
- Planned usage: Will be used to parse out all phone numbers in that format in any given string. The phone numbers should be saved in an array. Make sure it captures ALL phone 
numbers if there are more than one

- Hint for regex: Is there a shortcut for digits? What quantifier allows you to specify the exact amount of times to match a character? What modifier finds all matches instead of just the first?
- Hint for testing: What JavaScript method saves matches into an array? 

Expected Output: 
["555-123-4567", "555-567-8910"]

*/ 
 
/** 1st line creates new regex pattern to match phone numbers in the format of "###-###-####", where "#" represents a digit. The `\d` character class matches any digit, and the `{3}` and `{4}` quantifiers specify that there must be exactly three and four digits, respectively. The `-` characters match the hyphens that separate the digits. The `g` flag at the end of the regex pattern means that the search should be global, which means that it will find all matches in the string, not just the first one. 

2nd line uses the `match()` method to search for all occurrences of the regex pattern in the `sampleApp` string. The `match()` method returns an array of all matches, or `null` if no matches are found. The array contains the matched substrings, as well as any captured groups within the regex pattern. */

let phoneReg = /\d{3}-\d{3}-\d{4}/g
let phoneArr = sampleApp.match(phoneReg)
console.log(phoneArr)

/* 

Regular Expression 2: Email 
- Format to match: ____@__.__ 
- Planned usage: Will be used to parse out the first email provided. The email should be saved in an array. 
- Restraints: 
    - Assume the first part of the email address can only have alphanumeric characters and underscores (_)
    - Assume the domain name and extension can only have alphabetical characters (i.e. gmail.com, abc.de)

- Hints for regex: Is there a shortcut for alphanumerical and underscore? What quantifier allows you to match at least one or more of a character/group? What grouping rule allows you to specify a range of characters to match?
- Hint for testing: What JavaScript method saves matches into an array? 

Expected Output: 
["lsouza@gmail.com"]
- Note: Your terminal might also display the index, input, and groups of the match. If so, that's okay!

*/ 

/** 1st line creates a new regex pattern that matches email addresses in the format of "username@domain.com". The `\w+` character class matches one or more word characters (letters, digits, or underscores), which is used to match the username part of the email address. The `@[a-zA-Z]+` part matches the "@" symbol and one or more letters for the domain name. The final `[a-zA-Z]+` matches the top-level domain (.com, .net, .org, etc.). 
 
2nd line uses the `match()` method to search for all occurrences of the regex pattern in the `sampleApp` string. The `match()` method returns an array of all matches, or `null` if no matches are found. The array contains the matched substrings, as well as any captured groups within the regex pattern. */

let emailReg = /\w+@[a-zA-Z]+.[a-zA-Z]+/
let emailArr = sampleApp.match(emailReg)
console.log(emailArr)

/* 

Regular Expression 3: 
- Format to match: "Status:"
- Planned usage: Will be used to find where the status of the application is located in the string. Be sure to make the regex insensitive to casing as some applicants like to type in all caps or all lowercase. 

- Hints for regex: What modifier allows casing to be ignored?
- Hint for testing: What JavaScript method returns the first index where the match is located? 

Expected Output: 
365

*/ 

/** 1st line creates a new regex pattern that matches the word "status" followed by a colon. The `i` flag at the end of the regex pattern means that the search should be case-insensitive, so it will match both "status:" and "Status:".

2nd line uses the `search()` method to search for the first occurrence of the regex pattern in the `sampleApp` string. The `search()` method returns the index of the first match, or `-1` if no matches are found.*/

let statusReg = /status:/i 
let statusIndex = sampleApp.search(statusReg)
console.log(statusIndex)
