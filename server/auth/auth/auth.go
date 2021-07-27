package auth

import (
	"context"
	authpb "coolcar/auth/api/gen/v1"
	"coolcar/auth/dao"

	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type Service struct {
	authpb.UnimplementedAuthServiceServer
	OpenIDResolver OpenIDResolver
	Mongo          *dao.Mongo
	Logger         *zap.Logger
}

// OpenIDResolver resolves an authorization code
// to an open id
type OpenIDResolver interface {
	Resolve(code string) (string, error)
}

// Login log a user in.
func (s *Service) Login(c context.Context, req *authpb.LoginRequest) (*authpb.LoginResponse, error) {
	s.Logger.Info("rescived code", zap.String("code", req.Code))
	openID, err := s.OpenIDResolver.Resolve(req.Code)
	if err != nil {
		return nil, status.Errorf(codes.Unavailable, "Can not resolve open id", err)
	}
	return &authpb.LoginResponse{
		AccessToken: "Token for open id" + openID,
		ExpiresIn:   7200,
	}, nil
}
