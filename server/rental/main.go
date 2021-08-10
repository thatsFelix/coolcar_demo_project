package main

import (
	"log"

	"go.uber.org/zap"
	"google.golang.org/grpc"

	rentalpb "coolcar/rental/api/gen/v1"
	"coolcar/rental/trip"
	"coolcar/shared/server"
)

func main() {
	// 自定义配置zapLogger
	logger, err := server.NewZapLogger()
	if err != nil {
		log.Fatalf("Can not create logger: %v", err)
		return
	}

	err = server.RunGRPCServer(&server.GRPCConfig{
		Name:              "rental",
		Addr:              ":8082",
		AuthPuclicKeyFile: "../shared/auth/public.key",
		Logger:            logger,
		RegisterFunc: func(s *grpc.Server) {
			rentalpb.RegisterTripServiceServer(s, &trip.Service{
				Logger: logger,
			})
		},
	})

	// listener, err := net.Listen("tcp", ":8082")
	// if err != nil {
	// 	logger.Fatal("Can not Listen", zap.Error(err))
	// }

	// in, err := auth.Interceptor("../shared/auth/public.key")
	// if err != nil {
	// 	logger.Fatal("Can not create auth interceptor", zap.Error(err))
	// }

	// s := grpc.NewServer(grpc.UnaryInterceptor(in))
	// rentalpb.RegisterTripServiceServer(s, &trip.Service{
	// 	Logger: logger,
	// })

	// err = s.Serve(listener)
	logger.Fatal("Can not Serve", zap.Error(err))
}
