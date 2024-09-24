package main

import (
	"fmt"
	"os"
)

func main() {
	myArgs := os.Args[1:]
	res := ""
	if len(myArgs) != 1 {
		res = "\n"
	}

	for i := 0; i < len(myArgs[0]); i++ {
		if string(myArgs[0][i]) == " " && i < len(myArgs[0])-2 && string(myArgs[0][i+1]) != " " && len(res) >= 1  {
			res += string(myArgs[0][i])
		} else if string(myArgs[0][i]) != " " {
			res += string(myArgs[0][i])
		}
	}

	fmt.Println(res)
}
