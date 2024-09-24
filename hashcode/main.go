package main

import (
	"fmt"
)

func main() {
	fmt.Println(HashCode("A"))
	fmt.Println(HashCode("AB"))
	fmt.Println(HashCode("BAC"))
	fmt.Println(HashCode("Hello World"))
}

func HashCode(dec string) string {
	res := ""

	for i := 0; i < len(dec); i++ {
		total := (int(dec[i]) + len(dec)) % 127
		if total >= 0 && total <= 127 {
			res += string(total)
		} else{
			res += string(total + 33)
		}
	}
	return res
}
