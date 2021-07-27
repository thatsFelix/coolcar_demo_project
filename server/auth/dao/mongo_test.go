package dao

import (
	"context"
	"testing"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func TestResolveAccountID(t *testing.T) {
	c := context.Background()
	mc, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://root:root@47.115.55.129:27017/coolcar?authSource=admin&readPreference=primary&appname=mongodb-vscode%200.6.0&directConnection=true&ssl=false"))

	if err != nil {
		t.Fatalf("can not connect mongodb: %v", err)
	}

	m := NewMongo(mc.Database("coolcar"))
	id, err := m.ResolveAccount(c, "123")
	if err != nil {
		t.Errorf("failed resolve account id for 123: %v", err)
	} else {
		want := "60ff7dff07457b29111db68a"
		if id != want {
			t.Errorf("resolve account id: want: %q, got: %q", want, id)
		}
	}
}
