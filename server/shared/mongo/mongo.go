package mgo

import "go.mongodb.org/mongo-driver/bson"

// Set returns a $set update document.
func Set(v interface{}) bson.M {
	return bson.M{
		"$set": v,
	}
}
