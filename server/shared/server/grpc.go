package server

import (
	"coolcar/shared/auth"
	"net"

	"go.uber.org/zap"
	"google.golang.org/grpc"
)

type GRPCConfig struct {
	Name              string
	Addr              string
	AuthPuclicKeyFile string
	RegisterFunc      func(*grpc.Server)
	Logger            *zap.Logger
}

func RunGRPCServer(c *GRPCConfig) error {
	nameField := zap.String("name", c.Name)

	listener, err := net.Listen("tcp", c.Addr)
	if err != nil {
		c.Logger.Fatal("Can not Listen", nameField, zap.Error(err))
	}

	var opts []grpc.ServerOption
	if c.AuthPuclicKeyFile != "" {
		in, err := auth.Interceptor(c.AuthPuclicKeyFile)
		if err != nil {
			c.Logger.Fatal("Can not create auth interceptor", nameField, zap.Error(err))
		}
		opts = append(opts, grpc.UnaryInterceptor(in))
	}

	s := grpc.NewServer(opts...)

	c.RegisterFunc(s)

	return s.Serve(listener)
}
