package token

import (
	"crypto/rsa"
	"fmt"

	"github.com/dgrijalva/jwt-go"
)

// Verifier Verifies access tokens
type JWTTokenVerifier struct {
	PublicKey *rsa.PublicKey
}

// Verify Verifies a token and returns accountID
func (v *JWTTokenVerifier) Verify(token string) (string, error) {
	tkn, err := jwt.ParseWithClaims(token, &jwt.StandardClaims{}, func(*jwt.Token) (interface{}, error) {
		return v.PublicKey, nil
	})
	if err != nil {
		return "", fmt.Errorf("can not parse token: %v", err)
	}
	if !tkn.Valid {
		return "", fmt.Errorf("token not valid")
	}
	clm, ok := tkn.Claims.(*jwt.StandardClaims)
	if !ok {
		return "", fmt.Errorf("token claim is not StandardClaims")
	}

	if err := clm.Valid(); err != nil {
		return "", fmt.Errorf("claim is not Valid: %v", err)
	}

	return clm.Subject, nil
}
