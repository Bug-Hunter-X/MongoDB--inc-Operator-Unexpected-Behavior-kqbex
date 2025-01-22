```javascript
// Solution 1: Check field before incrementing
db.collection.findOne({"_id":ObjectId("someId")},{"_id":0,field:1})
.then(result => {
if(result && result.field){
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
} else {
// Handle the case where the field doesn't exist
console.log("Field doesn't exist. Creating it instead.");
db.collection.updateOne({"_id":ObjectId("someId")},{$set:{field:value}});
}
});

//Solution 2: Using $setOnInsert with $inc 
db.collection.updateOne({"_id":ObjectId("someId")},{
  $inc: {field: value},
  $setOnInsert: {field: 0} //Set the field to 0 if the document doesn't exist 
});
```