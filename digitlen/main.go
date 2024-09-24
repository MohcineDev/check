package main

import "fmt"

func main() {
	fmt.Println(DigitLen(100, 10))
	fmt.Println(DigitLen(100, 2))
	fmt.Println(DigitLen(-100, 16))
	fmt.Println(DigitLen(100, -1))
}

func DigitLen(n, base int) int {
	count := 1

	if base < 2 || base > 36 {
		count = -1
	}
	if n < 0 {
		n *= -1
	}

	for n/base > 0 {
		count++
		n = n / base
	}
	return count
}
