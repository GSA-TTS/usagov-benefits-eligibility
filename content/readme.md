# Content Folder
1. Date Criteria
	1. In order to use the date input logic correctly a content manager must put the key and acceptance values in with accordance to our encoding
	2. We have several options for inputting a date
	3. First we put it the comparator into the criteria
		1. > / < / = 
		2. Will check the users date against the given date using the specified comparator
	4. Next we will put in the date
		1. >11-14-1999
		2. Needs to follow this patteren (>MM-DD-YYYY)
	5. For putting in a dynamically calculated date (i.e. the user has to be older than 60 years)
		1. We can do this by following a similar pattern
		2. >60years
		3. The pattern is the operator then an amount of time then a determiner (months, days, years)
	6. You are also able to put in multiple dates / encodings to create a range
		1. i.e. You wish to only have a user be elgible if they are older than 40 years and less than 60 years
		2. acceptanceValues: ['<60years', '>40years']