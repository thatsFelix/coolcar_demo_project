package auth

import (
	"context"
	authpb "coolcar/auth/api/gen/v1"

	"go.uber.org/zap"
)

type Service struct {
	authpb.UnimplementedAuthServiceServer
	Logger *zap.Logger
}

// Login log a user in.
func (s *Service) Login(c context.Context, req *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	s.Logger.Info("rescived code", zap.String("code", req.Code))
	return &authpb.LoginResponse{
		AccessToken: "Token From Felix" + req.Code,
		ExpiresIn:   7200,
	}, nil
}
