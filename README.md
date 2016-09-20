# Dialpad Javascript Lottery

The logic that I applied in solving this problem was broken down into two parts. I first wanted to filter for only strings that were between 7 and 14 as we know that all valid lottery numbers can only fall within this length. Secondly I wanted to verify if any pair of numbers was within the range of 1-59. In the case the number was outside that range I split the number to take the first digit as a valid lottery number. When only 7 numbers were in a given string they would essneitlaly all become valid lottery numbers (outside of 0). 

### Challenges
- If there are 8 numbers or so it will not account ensure that there are 7 digits as it can take in 4 pairs and pass. 
