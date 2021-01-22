# HansifyNumbers 

This simple javascript utility helps you turning numbers like 500,000 to "50萬", and it's only 2.7KB without dependcies 


### installation
```
npm install hansifynumbers
```
or if you prefer yarn
```
yarn add hansifynumbers
```

### usage
```
hansifyNumbers(5000) 
// returns "5000"

hansifyNumbers(5000, {
    onlyFirstNum: true,
}) 
// returns "5千"


hansifyNumbers(50000)
// returns "5萬"


hansifyNumbers(500000) 
// returns "50萬"
```