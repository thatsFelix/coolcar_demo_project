package main

import (
	"context"
	"log"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"

	authpb "coolcar/auth/api/gen/v1"
)

func main() {
	c := context.Background()
	c, cancel := context.WithCancel(c)
	defer cancel()

	jsonpb := &runtime.JSONPb{}
	// 设置枚举使用枚举值而不是字符串
	jsonpb.UseEnumNumbers = true
	// 使用原始名称(使用下划线连接不转驼峰)
	jsonpb.UseProtoNames = true

	mux := runtime.NewServeMux(runtime.WithMarshalerOption(runtime.MIMEWildcard, jsonpb))

	err := authpb.RegisterAuthServiceHandlerFromEndpoint(c, mux, ":8081", []grpc.DialOption{grpc.WithInsecure()})

	if err != nil {
		log.Fatalf("Can not register auth service: %v", err)
	}

	err = http.ListenAndServe(":8088", mux)
	if err != nil {
		log.Fatalf("Can not ListenAndServe: %v", err)
	}
}
