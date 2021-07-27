package wechat

import (
	"fmt"

	"github.com/medivhzhan/weapp/v2"
)

type Service struct {
	AppID     string
	AppSecret string
}

func (s *Service) Resolve(code string) (string, error) {
	resp, err := weapp.Login(s.AppID, s.AppSecret, code)
	if err != nil {
		return "", fmt.Errorf("weapp.Login err: %v", err)
	}

	if err := resp.GetResponseError(); err != nil {
		return "", fmt.Errorf("weapp respose error: %v", err)
	}

	return resp.OpenID, nil
}
