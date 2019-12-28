# Endpoints
## AUTH
```
### login
request (POST)
{
	email:String 
	password:String 
}

response
{
	token:String
	name:String
	avatar:String
}
```
```
### loginFB
request (POST)
{
	email:String 
	fbId:String 
}

response
{
	token:String
	name:String
	avatar:String
}
```
```
### loginGoogle
request (POST)
{
	email:String 
	googleId:String 
}

response
{
	token:String
	name:String
	avatar:String
}
```
## Query
```
### completeHotels
request (GET)
{
	query:String 
}

response 
Array<String>
```

```
### GetHotels
request (GET)
{
	from:DateString
	to:DateString
	area:aaa
}

response
Array<{
	id: String,
	name:String,
	address:String,
	image:String,
	stars:Number,
	tripAdvisorScore:Number,
	kmFromCenter:String,
	lowestPrice:Number,
	reviewCount:Number,
}>
```

```
### GetHotels
getRooms (GET)
{
	from:DateString
	to:DateString
}

response
Array<{
	id: String,
	name:String,
	address:String,
	image:String,
	stars:Number,
	tripAdvisorScore:Number,
	kmFromCenter:String,
	lowestPrice:Number,
	reviewCount:Number,
}>
```




