def isPalindrome(s):
return s == s[:: -1]
 
s = "here is your word or text."
ans = isPalindrome(s)

if ans:
    print("Yes")
else:
    print("No")