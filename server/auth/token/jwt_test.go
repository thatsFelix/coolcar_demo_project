package token

import (
	"testing"
	"time"

	"github.com/dgrijalva/jwt-go"
)

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAiGPBDP4VCc+cp7f02lvoxEs0vlTYuf2rmNuKyVX2Gf3Mf8sD
BK9KTSBbTSfRJ0OSYt4f/TSrAgbb5Z/BWFT/uN1kJ/Yz9HnKIAvahTC6HVLxnyoq
ZGnDht9OB2LOhC23eR+pUAxcLTqSvcs0NbZ1nnZqMAlLcjf5J5hsYqhEWWV4E2jg
bI4lPLz5mig5+e34GA78i7OvpycBV2JtuGULmAIwYEN5PyxBNByv/8FYzKZX9ReK
SdaFwUX0hGDCSe01qZazDvqEsR5Q2XQGeLyvuWBZOJaSp9Qnl+DoTKEBrBi9+UDQ
vCZoHWWmMvhdfJsAzp3uX9SlYEij4qIBn6L5RwIDAQABAoIBAF4tK09SXqqQneY9
oqfokNiB6aCHK8N5wrRg2/tcDPwzgLK5NpNUiqSo9AJZvRU0lm8IW+RWKsLSg6KR
5kqdHprC3HavjX6BXi00oiYX2FuJO2ghEHaXhTirFtEIy/r/KlJLp3iroDZm3I6L
MrjoDV1m/LnAoUT0G2nY2PZipBdpcyVQBgNPzwvA8JADwU/b2EEqy41orErqkdzW
B6Fi00HrH0R3Xf32Ad/5o8Kg0mI8VGK/hxsA+qxC7+3wFMDoenkPBtO+rTxxxJGV
0wcCte4qcuwnn6BrV3nXn1STUmd2bm53xjqqZzvsLx/eQOXDLCLWq/MyIWdmkX5y
8EmjigECgYEAzEaDQhBwuU13iQ7oM1zoZctcWM7vurGzpKkwyqG7BU/GE6P2OLmL
t07LAGbrEF3yFuQqfcw2xV1Hs5nNszf8jfgsUuHEo+9Hg3sYExGsMPycIm6j5cOE
AmqQWy3GXox2PmfcDLvJFwSfpnwT9ELUdLusSkFMg1GwgG+xE1Db7EcCgYEAquzE
m5A2Rt3DPXSATL2iS3BcGtLPUWdM2wMbecLc+ts3Ct395FIrlzfjECrmTzQh3jJj
WzBmEW1NIRQ15OQTpzzH1kZxoNCCA4cK7qbN5QG/LcBG41AQT7BfKw3J4YuIgqEF
4Y6kamNDd5IdB0jVlwU4jce6oWOo9paVfzdgCwECgYEAkfBKdBdUwT4UCUoqIA/f
RGJeLmBhKssr4ZaycgHLoEbW5087aFk+9Q4Iv9fHViEYBLyrksYj1ysGP8zBBaoY
98B2whvjpY8cU1XM5Eq67yB516ud0le1ZxiE228/imrlSz5eGobKanR2LrX0d4yL
Rn6R31b5d9QTuh6RrpAVHp8CgYA3mJ32z7in4lgwNCXLUF9q1FhRLULcApLAJkmY
mGaSfh1wPnbn/kZJgJct2hZhqt5dTNx+e8anYnsVCGLjWcB+xEloDC/HlCrGBPXs
XHtaQvAxbHpiU9eKZB8AfRKud1lmzAOCs4gNRs5aJT+l7+3xmnQjwdSVzDnYQ3DL
GXL3AQKBgQChaWqhR+MiDl8WANwymjCmAXEfztm3hf6EW4QwOCuFVEQV6MNFdglb
HKRnWSRzroSUXWJUQULF8h4isDgp+1102njY9W8SXu9uU0K5TaWZICSm1LxIdA6C
GYpv64TyTCNWOiMXUXMMT7IOHKNWC0SG3/mfGemyw9M9tFQIXhadSA==
-----END RSA PRIVATE KEY-----`

func TestGenerateToken(t *testing.T) {
	key, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(privateKey))
	if err != nil {
		t.Fatalf("can not parse privateKey: %v", err)
	}
	g := NewJWTTokenGen("coolcar/gen", key)
	g.nowFunc = func() time.Time {
		return time.Unix(1516239022, 0)
	}
	tkn, err := g.GenerateToken("610ce0bb803650bfbefa0e24", 2*time.Hour)
	if err != nil {
		t.Errorf("can not generate token: %v", err)
	}

	want := `eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTYyNDYyMjIsImlhdCI6MTUxNjIzOTAyMiwiaXNzIjoiY29vbGNhci9nZW4iLCJzdWIiOiI2MTBjZTBiYjgwMzY1MGJmYmVmYTBlMjQifQ.RoGL7OpNa56BPIRSNBdz4Du_nisM2rZVqHTjd9YZIJfWDbY_EihRAbTjV6gx4dWK7e20M3CQaLMIpNhT2B1p1m5yleXfhShIVm9cCVMPm719AoOYzxP5Ol9PFSkmvNtePVBvtuS-aR0boeStmXsQSbCF30avNWAeta3niSbA_BHEJDxLo2NYsHa_qZrvNYOf_Qz3zaW07iDNyn3tb-68m8Y1PLjbw_J2KPU392sf2j0uedIwY6CjX7N8-m4cJoRXxX40_5vOINMZb-9eS-sgyi1W1YUcVUCYMtAGa8HtnKHm7HhD-fjTL7M5c0HMOL5GIoO311u9cw1C_sVsg2_M2Q`

	if tkn != want {
		t.Errorf("wrong token generated. want: %q; got: %q", want, tkn)
	}
}
