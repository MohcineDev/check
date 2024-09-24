package main

import (
	"fmt"
	"os"
)

func main() {
	myArgs := os.Args[1:]
	res := ""
	if len(myArgs) != 3 {
		return
	}

	for i := 0; i < len(myArgs[0]); i++ {
		if string(myArgs[0][i]) == myArgs[1] {
			res += myArgs[2]
		} else {
			res += string(myArgs[0][i])
		}
	}

	fmt.Println(res)
}
