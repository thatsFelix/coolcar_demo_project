package main

import (
	"context"
	"fmt"
	"time"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/docker/go-connections/nat"
)

func main() {
	c, err := client.NewEnvClient()
	if err != nil {
		panic(err)
	}

	ctx := context.Background()

	resp, err := c.ContainerCreate(
		ctx,
		&container.Config{
			Image: "mongo:4.4",
			ExposedPorts: nat.PortSet{
				"27017/tcp": {},
			},
		},
		&container.HostConfig{
			PortBindings: nat.PortMap{
				"27017/tcp": []nat.PortBinding{
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

	err = c.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{})

	if err != nil {
		panic(err)
	}

	fmt.Println("container started")
	time.Sleep(10 * time.Second)
	inspRes, err := c.ContainerInspect(ctx, resp.ID)
	if err != nil {
		panic(err)
	}

	// 查看隐射到哪个端口上去了
	fmt.Printf("listen at %+v \n", inspRes.NetworkSettings.Ports["27017/tcp"][0])

	fmt.Println("killing container")

	err = c.ContainerRemove(ctx, resp.ID, types.ContainerRemoveOptions{
		Force: true,
	})

	if err != nil {
		panic(err)
	}
}
