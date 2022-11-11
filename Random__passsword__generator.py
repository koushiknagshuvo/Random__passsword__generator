# This app build by koushik Nag Shuvo, Faridpur Dhaka Bangladesh University:
# Daffodil international University 
# Email: koushik15-12971@diu.edu.bd // koushiknagshuvo@gmail.com


import random
import string

s1 = string.ascii_lowercase
s2 = string.ascii_uppercase
s3 = string.digits
s4 = string.punctuation
s5 = string.hexdigits


plen = int(input("Enter password lenth : "))

s = []
s.extend(list(s1))
s.extend(list(s2))
s.extend(list(s3))
s.extend(list(s4))
s.extend(list(s5))


random.shuffle(s)
print('Your password is : '+ "".join(s[0:plen]))
