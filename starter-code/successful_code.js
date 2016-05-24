
db.User  // show User structure

//1
var user = new db.User({name:"Fritz Lang",tweets:{}})
user.save()

db.User.create({name:"Fred Flinstone"})

//2
var tweet1 = new db.Tweet({body:"Hallooooo!"})
var tweet2 = new db.Tweet({body:"No. Frickin. Way."})
user.tweets.push(tweet2,tweet1)
user.save()

//3
db.User.find({},function(e,users){console.log(users)})
// returns the whole object, and at the very end, the find data

//4
db.User.find({name: {$gt : "Fri",$lt : "Fro"}},
  function(e,users){console.log(users)})
//list Users, in this case, one
db.User.find({name: {$gt : "Fri",$lt : "Fro"}},
  function(e,users){console.log(users[0].tweets)})

//5
var cheese = new db.Ingredient({title:"Munster",origin:"Bavaria"})
var bread = new db.Ingredient({title:"Pain du Monde",origin:"France"})
var lettuce = new db.Ingredient({title:"romaine",origin:"Romania"})
cheese.save()
bread.save()
lettuce.save()

//6
var cheesus = new db.Food({title:"Cheesus Christ"})
cheesus.ingredients.push(cheese._id,bread._id,lettuce._id)
cheesus.save()