package dao

import (
	"context"
	"os"
	"testing"

	mongotesting "coolcar/shared/mongo/testing"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var mongoURI string

func TestResolveAccountID(t *testing.T) {
	c := context.Background()
	mc, err := mongo.Connect(c, options.Client().ApplyURI(mongoURI))

	if err != nil {
		t.Fatalf("can not connect mongodb: %v", err)
	}

	m := NewMongo(mc.Database("coolcar"))
	m.NewObjID = func() primitive.ObjectID {
		objecId, _ := primitive.ObjectIDFromHex("61090c12e4907e82d3627d04")
		return objecId
	}

	id, err := m.ResolveAccountID(c, "123")
	if err != nil {
		t.Errorf("failed resolve account id for 123: %v", err)
	} else {
		want := "61090c12e4907e82d3627d04"
		if id != want {
			t.Errorf("resolve account id: want: %q, got: %q", want, id)
		}
	}
}

func TestMain(m *testing.M) {
	os.Exit(mongotesting.RunWithMongoInDocker(m, &mongoURI))
}
