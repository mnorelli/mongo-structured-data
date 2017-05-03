
db.User  // show User structure

//1
db.User.create({name:"Joe",tweets[
  {body:"Look at my tweet"},
  {body:"My second tweet!"}
  ]
})

var user = new db.User({name:"Fritz Lang",tweets:{}})
user.save()

//2
var tweet1 = new db.Tweet({body:"Hallooooo!"})
var tweet2 = new db.Tweet({body:"No. Frickin. Way."})
user.tweets.push(tweet2,tweet1)
user.save()

//3
// list Users
// returns the whole object, and at the very end, the find data
db.User.find({},function(e,users){console.log(users)})

//4
// find the user whose name is between "Fri" and "Fro"
var searchTerm = {name: {$gt : "Fri",$lt : "Fro"}}
db.User.find(searchTerm,
  function(e,users){console.log(users)})

// find the user name that starts with "J"
var searchTerm = {name:/^J/}
db.User.find(searchTerm,
  function(e,user){console.log(user)})

// list all that user's tweets
db.User.find(searchTerm,
  function(e,user){
    for (tweet in user[0].tweets) // iterate over all the tweets for this user
      {console.log(user[0].tweets[tweet].body)}  // show the body for each tweet
  })

//5
var cheese = new db.Ingredient({title:"Munster",origin:"Bavaria"})
var bread = new db.Ingredient({title:"Pain du Monde",origin:"France"})
var lettuce = new db.Ingredient({title:"romaine",origin:"Romania"})
cheese.save()
bread.save()
lettuce.save()

//6
var cheesus = new db.Food({name:"Cheesus Christ"})
cheesus.ingredients.push(cheese._id,bread._id,lettuce._id)
cheesus.save()

var dblCheese = new db.Food({name:"Double Cheese"})
dblCheese.ingredients.push(cheese._id,cheese._id,bread._id)
dblCheese.save()

db.Food.create({name:"Salad",ingredients:[lettuce._id,lettuce._id]})

//7
db.Food.find({},function(e,foods){console.log(foods)})

//8
// find one food, iterate over the ingredients for it, and
// show the corresponding name for each ingredient ID
var searchTerm = {name:/^S/}
db.Food.find(searchTerm,
  function(e,food)
    {for (i in food[0].ingredients) 
        {db.Ingredient.find({_id:food[0].ingredients[i]},function(e,ingred){console.log(ingred[0].title)})}  
    }
  )

var searchTerm = {name:/^S/}
db.Food.find(searchTerm,
  function(e,food)
    {
        console.log(food[0].ingredients)
    }
  )

// alterntive answer based on solutions code
db.Ingredient.find(
  {
    _id: {$in: dblCheese.ingredients}
  },
  function(err, ingredients){
    for (i in ingredients)
      {console.log(ingredients[i].title)};
  }
);




