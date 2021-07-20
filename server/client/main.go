package main

import (
	"context"
	trippb "coolcar/proto/gen/go"
	"fmt"
	"log"

	"google.golang.org/grpc"
)

func main() {
	log.SetFlags(log.Lshortfile)

	conn, err := grpc.Dial("localhost:8081", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("Can not connect to server %v", err)
	}

	tsClinet := trippb.NewTripServiceClient(conn)

	res, err := tsClinet.GetTrip(context.Background(), &trippb.GetTripRequest{
		Id: "trip456",
	})

	if err != nil {
		log.Fatalf("Can not call getTrip %v", err)
	}

	fmt.Println("res", res)
}
