package main

import (
	"log"
	"net"

	"go.uber.org/zap"
	"google.golang.org/grpc"

	authpb "coolcar/auth/api/gen/v1"
	"coolcar/auth/auth"
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
