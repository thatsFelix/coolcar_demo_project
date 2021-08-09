package dao

import (
	"context"
	"fmt"

	mgo "coolcar/shared/mongo"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const openIDField = "open_id"

type Mongo struct {
	col      *mongo.Collection
	NewObjID func() primitive.ObjectID
}

// create a new mongo dao
func NewMongo(db *mongo.Database) *Mongo {
	return &Mongo{
		col:      db.Collection("account"),
		NewObjID: primitive.NewObjectID,
	}
}

// 将openID转化成accountID
func (m *Mongo) ResolveAccountID(c context.Context, openID string) (string, error) {
	// m.col.InsertOne(c, bson.M{
	// 	mgo.IDField: m.NewObjID(),
	// 	openIDField: openID,
	// })

	insertedID := m.NewObjID()

	res := m.col.FindOneAndUpdate(c,
		bson.M{
			openIDField: openID,
		},
		mgo.SetOnInsert(bson.M{
			mgo.IDField: insertedID,
			openIDField: openID,
		}),
		options.FindOneAndUpdate().
			SetUpsert(true).
			SetReturnDocument(options.After),
	)

	if err := res.Err(); err != nil {
		return "", fmt.Errorf("can not FindOneAndUpdate: %v", err)
	}

	var row mgo.ObjId

	err := res.Decode(&row)
	if err != nil {
		return "", fmt.Errorf("can not decode res: %v", err)
	}

	return row.ID.Hex(), nil
}
