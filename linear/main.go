package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	myArgs := os.Args[1:]
	if len(myArgs) != 1 {
		log.Fatalln("args error")
	}

	fmt.Println("123")
}
