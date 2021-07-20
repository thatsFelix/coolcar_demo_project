package trip

import (
	"context"
	trippb "coolcar/proto/gen/go"
)

type Service struct {
	trippb.UnimplementedTripServiceServer
}

func (*Service) GetTrip(c context.Context, req *trippb.GetTripRequest) (*trippb.GetTripResponse, error) {
	return &trippb.GetTripResponse{
		Id: req.Id,
		Trip: &trippb.Trip{
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
		},
	}, nil
}
