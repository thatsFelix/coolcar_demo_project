package mongotesting

import (
	"context"
	"fmt"
	"testing"
	"time"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/docker/go-connections/nat"
)

const (
	image         = "mongo:4.4"
	containerPort = "27017/tcp"
)

func RunWithMongoInDocker(m *testing.M, mongoURI *string) int {
	c, err := client.NewEnvClient()
	if err != nil {
		panic(err)
	}

	ctx := context.Background()

	resp, err := c.ContainerCreate(
		ctx,
		&container.Config{
			Image: image,
			ExposedPorts: nat.PortSet{
				containerPort: {},
			},
		},
		&container.HostConfig{
			PortBindings: nat.PortMap{
				containerPort: []nat.PortBinding{
					{
						HostIP: "127.0.0.1",
						// 自动选一个闲置的端口隐射出来
						HostPort: "0",
					},
				},
			},
		},
		nil,
		"",
	)

	if err != nil {
		panic(err)
	}

	containerId := resp.ID
	defer func() {
		fmt.Println("killing container")
		err = c.ContainerRemove(ctx, containerId, types.ContainerRemoveOptions{
			Force: true,
		})

		if err != nil {
			panic(err)
		}
	}()

	err = c.ContainerStart(ctx, containerId, types.ContainerStartOptions{})

	if err != nil {
		panic(err)
	}

	fmt.Println("container started")
	time.Sleep(10 * time.Second)
	inspRes, err := c.ContainerInspect(ctx, resp.ID)
	if err != nil {
		panic(err)
	}

	hostIP := inspRes.NetworkSettings.Ports["27017/tcp"][0].HostIP
	hostPort := inspRes.NetworkSettings.Ports["27017/tcp"][0].HostPort
	*mongoURI = fmt.Sprintf("mongodb://%s:%s", hostIP, hostPort)

	// 查看隐射到哪个端口上去了
	fmt.Printf("listen at %+v \n", inspRes.NetworkSettings.Ports["27017/tcp"][0])

	return m.Run()
}
