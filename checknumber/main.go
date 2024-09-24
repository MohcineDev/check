package main

import "fmt"

func main() {
	fmt.Println(CheckNumber("Hello"))
	fmt.Println(CheckNumber("Hel8lo"))
	fmt.Println(CheckNumber("Hel97lo"))
	fmt.Println(CheckNumber("Helsd dd slo"))
	fmt.Println(CheckNumber("Hello1"))
}

func CheckNumber(arg string) bool {
	res := false
	for i := 0; i < len(arg); i++ {
		if arg[i] >= '0' && arg[i] <= '9' {
			res = true
			break
		}
	}
	return res
}
