package main

import (
	trippb "coolcar/proto/gen/go"
	"encoding/json"
	"fmt"

	"google.golang.org/protobuf/proto"
)

func main() {
	fmt.Println("hello")
	trip := trippb.Trip{
		Start:       "abc",
		End:         "def",
		DurationSec: 3600,
		FeeCent:     10000,
		StartPos: &trippb.Location{
			Longitude: 30,
			Latitude:  120,
		},
		EndPos: &trippb.Location{
			Longitude: 35,
			Latitude:  115,
		},
		PathLocations: []*trippb.Location{
			{
				Longitude: 31,
				Latitude:  119,
			},
			{
				Longitude: 32,
				Latitude:  118,
			},
		},
		Status: trippb.TripStatus_IN_PROGRESS,
	}

	fmt.Println(&trip)

	// 序列化成buffer
	buffer, err := proto.Marshal(&trip)
	if err != nil {
		fmt.Printf("proto.Marshal err: %v", err)
		panic(err)
	}

	fmt.Printf("buffer %x \n", buffer)

	// buffer反序列化
	var trip2 trippb.Trip
	proto.Unmarshal(buffer, &trip2)
	fmt.Println("trip2", &trip2)

	// protobuf转json
	b, err := json.Marshal(&trip2)
	if err != nil {
		fmt.Printf("json.Marshal err: %v", err)
		return
	}
	fmt.Printf("b %s \n", b)
}
