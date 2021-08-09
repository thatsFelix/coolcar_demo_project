package main

import (
	"context"
	"fmt"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	c := context.Background()
	mc, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://root:root@47.115.55.129:27017/coolcar?authSource=admin&readPreference=primary&appname=mongodb-vscode%200.6.0&directConnection=true&ssl=false"))
	if err != nil {
		fmt.Printf("mongo.Connect err: %v", err)
		return
	}

	col := mc.Database("coolcar").Collection("account")

	findRows(c, col)
}

func findRows(c context.Context, col *mongo.Collection) {
	cur, err := col.Find(c, bson.M{})
	if err != nil {
		fmt.Printf("col.Find err: %v", err)
		return
	}

	var row struct {
		ID     primitive.ObjectID `bson:"_id"`
		OpenID string             `bson:"open_id"`
	}

	for cur.Next(c) {
		err := cur.Decode(&row)
		if err != nil {
			fmt.Printf("res.Decode err: %v", err)
			return
		}
		fmt.Printf("%+v \n", row)
	}
}

func findRow(c context.Context, col *mongo.Collection) {
	res := col.FindOne(c, bson.M{
		"open_id": "123",
	})
	fmt.Printf("%+v \n", res)
	var row struct {
		ID     primitive.ObjectID `bson:"_id"`
		OpenID string             `bson:"open_id"`
	}
	err := res.Decode(&row)
	if err != nil {
		fmt.Printf("res.Decode err: %v", err)
		return
	}
	fmt.Printf("%+v \n", row)
}

func insertRows(c context.Context, col *mongo.Collection) {
	res, err := col.InsertMany(c, []interface{}{
		bson.M{
			"open_id": "111",
		},
		bson.M{
			"open_id": "222",
		},
	})

	if err != nil {
		fmt.Printf("col.InsertMany err: %v", err)
		return
	}

	fmt.Printf("%+v \n", res)
}
