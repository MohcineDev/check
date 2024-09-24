package main

import (
	"fmt"
	"os"
)

func main() {
	myArgs := os.Args[1:]
	res := ""
	if len(myArgs) != 1 || len(myArgs[0]) == 0 {
		return
	}

	for i := 0; i < len(myArgs[0]); i++ {
		if string(myArgs[0][i]) == " " && len(res) <= 0 {
			continue
		}
		if i < len(myArgs[0])-1 && string(myArgs[0][i]) == " " && string(myArgs[0][i+1]) != " " {
			res += "   "
		}
  
		if string(myArgs[0][i]) != " " {
			res += string(myArgs[0][i])
		}
	}

	fmt.Println(res)
}
