package main

import (
	"log"
	"net"

	"go.uber.org/zap"
	"google.golang.org/grpc"

	authpb "coolcar/auth/api/gen/v1"
	"coolcar/auth/auth"
	"coolcar/auth/auth/wechat"
)

func main() {
	// 自定义配置zapLogger
	logger, err := newZapLogger()
	if err != nil {
		log.Fatalf("Can not create logger: %v", err)
		return
	}

	listener, err := net.Listen("tcp", ":8081")
	if err != nil {
		logger.Fatal("Can not Listen", zap.Error(err))
	}

	s := grpc.NewServer()
	authpb.RegisterAuthServiceServer(s, &auth.Service{
		OpenIDResolver: &wechat.Service{
			AppID:     "wxddc188eb940f6998",
			AppSecret: "e624f9d24ecd745b7b16fbf77ba32d58",
		},
		Logger: logger,
	})

	err = s.Serve(listener)
	logger.Fatal("Can not Serve", zap.Error(err))
}

func newZapLogger() (*zap.Logger, error) {
	cfg := zap.NewDevelopmentConfig()
	cfg.EncoderConfig.TimeKey = ""
	return cfg.Build()
}
