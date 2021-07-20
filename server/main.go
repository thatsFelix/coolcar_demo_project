package main

import (
	"context"
	trippb "coolcar/proto/gen/go"
	trip "coolcar/tripsevices"
	"log"
	"net"
	"net/http"

	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
)

func main() {
	log.SetFlags(log.Lshortfile)
	go startGRPCGateWay()

	lisener, err := net.Listen("tcp", ":8081")
	if err != nil {
		log.Fatalf("Failed to listen %v \n", err)
	}

	server := grpc.NewServer()
	trippb.RegisterTripServiceServer(server, &trip.Service{})
	log.Fatal(server.Serve(lisener))
}

func startGRPCGateWay() {
	c := context.Background()
	c, cancel := context.WithCancel(c)
	defer cancel()

	mux := runtime.NewServeMux()

	err := trippb.RegisterTripServiceHandlerFromEndpoint(
		c,
		mux,
		":8081",
		[]grpc.DialOption{grpc.WithInsecure()},
	)

	if err != nil {
		log.Fatalf("cannot start grpc gateway %v", err)
	}

	err = http.ListenAndServe(":8082", mux)

	if err != nil {
		log.Fatalf("cannListenAndServe err: %v", err)
	}
}
