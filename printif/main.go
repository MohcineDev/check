package main

import "fmt"

func main() {
	fmt.Print(PrintIf("abcdefz"))
	fmt.Print(PrintIf("abc"))
	fmt.Print(PrintIf(""))
	fmt.Print(PrintIf("14"))
}

func PrintIf(str string) string {
	res := "Invalid Input"
	if len(str) >= 3 || len(str) == 0 {
		res = "G"
	}
	return res+"\n"
}
