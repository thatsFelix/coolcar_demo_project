package main

import (
	"context"
	"io/ioutil"
	"log"
	"net"
	"os"
	"time"

	"github.com/dgrijalva/jwt-go"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.uber.org/zap"
	"google.golang.org/grpc"

	authpb "coolcar/auth/api/gen/v1"
	"coolcar/auth/auth"
	"coolcar/auth/auth/wechat"
	"coolcar/auth/dao"
	token "coolcar/auth/token"
	"coolcar/shared/server"
)

func main() {
	// 自定义配置zapLogger
	logger, err := server.NewZapLogger()
	if err != nil {
		log.Fatalf("Can not create logger: %v", err)
		return
	}

	listener, err := net.Listen("tcp", ":8081")
	if err != nil {
		logger.Fatal("Can not Listen", zap.Error(err))
	}

	c := context.Background()
	mongoClient, err := mongo.Connect(c, options.Client().ApplyURI("mongodb://root:root@47.115.55.129:27017/coolcar?authSource=admin&readPreference=primary&appname=mongodb-vscode%200.6.0&directConnection=true&ssl=false"))

	if err != nil {
		logger.Fatal("can not connect mongodb", zap.Error(err))
	}

	pkFile, err := os.Open("auth/private.key")
	if err != nil {
		logger.Fatal("can not open private.key", zap.Error(err))
	}
	pkBytes, err := ioutil.ReadAll(pkFile)
	if err != nil {
		logger.Fatal("can not read private.key", zap.Error(err))
	}
	privateKey, err := jwt.ParseRSAPrivateKeyFromPEM(pkBytes)
	if err != nil {
		logger.Fatal("can not parse private.key", zap.Error(err))
	}

	s := grpc.NewServer()
	authpb.RegisterAuthServiceServer(s, &auth.Service{
		OpenIDResolver: &wechat.Service{
			AppID:     "wxddc188eb940f6998",
			AppSecret: "e624f9d24ecd745b7b16fbf77ba32d58",
		},
		Mongo:          dao.NewMongo(mongoClient.Database("coolcar")),
		Logger:         logger,
		TokenExpire:    2 * time.Hour,
		TokenGenerator: token.NewJWTTokenGen("coolcar/auth", privateKey),
	})

	err = s.Serve(listener)
	logger.Fatal("Can not Serve", zap.Error(err))
}
