## Retrium Developer Code Challenge

Welcome to the Retrium Developer Code Challenge!

For this challenge, you will spend one hour implementing and testing a CSV parser in pure JavaScript. You may use any testing framework you like (or none at all), as long as the test cases are covered and the requirements are met.

Are you ready to show us what you've got? Then read on!

### Comma-Separated Values

Love it or hate it, the CSV file format is here to stay. Originally used to represent free-form data in Fortran 77 programs, CSV has become ubiquitous for sharing simple tabular data among humans and machines.

#### Formatting

The virtue of CSV is its simplicity. A simple CSV file should contain one header record, followed by zero or more data records, with each record ending in a newline. Both header and data records should contain one or more fields separated by commas. For example, a table of the top five US cities by population might look like this:

    City,State,Population
    New York City,NY,8550405
    Los Angeles,CA,3971883
    Chicago,IL,2720546
    Houston,TX,2296224
    Philadelphia,PA,1567442

Unfortunately, there is one caveat: because commas and newlines are used as delimiters, data values that contain these characters must be handled in a special way. In these cases, the field should be wrapped in matching double quotes. Any comma or newline that appears in the quoted value is *not* considered a delimiter, but part of the value itself. For example, if we wanted to add a nicknames field to the above table, we would do something like this:

    City,State,Population,Nicknames
    New York City,NY,8550405,"The Big Apple,The City that Never Sleeps"
    Los Angeles,CA,3971883,"City of Angels,La La Land,The Big Orange,Tinseltown"
    Chicago,IL,2720546,"The Windy City,The Second City"
    [...etc...]

#### Requirements

The CSV parser should take a string parameter for the CSV input, and return an array of objects mapping the field names from the header record to the data values for each data record. For example, if the function is called with the above data, it should return the following JavaScript object:

```
	[
		{
			"City": "New York City",
			"State": "NY",
			"Population": "8550405",
			"Nicknames": "The Big Apple,The City that Never Sleeps"
		},
		{
			"City": "Los Angels",
			"State": "CA",
			"Population": "3971883",
			"Nicknames": "City of Angels,La La Land,The Big Orange,Tinseltown"
		},
		[...etc...]
	]
```

Notice that any quotes that were used for escaping data fields are *not* part of the returned data values.

#### Test cases

Alongside the CSV parser, you should provide a set of test cases to ensure that the implementation is correct. The following cases should be tested:

- [ ] Input with no header record should be invalid
- [ ] Input with no data records should return an empty result
- [ ] Input with one or more data records should return the correct number of results
- [ ] Input with one or more data records should return the correct values
- [ ] Input with escaped data values should return the correct values

### The Project

You will be submitting this project on CodeSandbox. The `sandbox.config.json` file tells CodeSandbox to spin up a Node.js container for you to write your code and run your tests. Whenever you're ready, click on the link below, and then click the "Fork" button to get started. When you're finished, copy the sandbox URL from the browser, and email it back to us (along with the other email screen reponses) to the thread in AngelList.

Good luck, and let the challenge begin!

[Start the Code Challenge](https://codesandbox.io/s/github/Retrium/dev-candidate/tree/master/code-challenge)
