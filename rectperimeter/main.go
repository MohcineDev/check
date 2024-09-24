package main

import "fmt"

func main() {
	fmt.Println(RectPerimeter(10, 2))
	fmt.Println(RectPerimeter(434343, 898989))
	fmt.Println(RectPerimeter(10, -2))
}

func RectPerimeter(w, h int) int {
	num := 0

	if w < 0 || h < 0 {
		num = -1
	} else {
		num = (w + h) * 2
	}

	return num
}
