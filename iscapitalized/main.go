package main

import (
	"fmt"
)

func main() {
	fmt.Println(IsCapitalized("Hello! How are you?"))
	fmt.Println(IsCapitalized("Hello How Are You"))
	fmt.Println(IsCapitalized("Whats 4this 100K?"))
	fmt.Println(IsCapitalized("Whatsthis4"))
	fmt.Println(IsCapitalized("!!!!Whatsthis4"))
	fmt.Println(IsCapitalized(""))
}
func IsCapitalized(s string) bool {

	res := true
	for i := 0; i < len(s); i++ {
		if string(s[0]) >= "a" && string(s[0]) <= "z" {
			res = false
		}
		if i < len(s)-1 && string(s[i]) == " " && string(s[i+1]) >= "a" && string(s[i+1]) <= "z" {
			res = false
		}
	}
	if s == "" {
		res = false
	}
	return res
}
