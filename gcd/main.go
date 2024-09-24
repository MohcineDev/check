package main

import (
	"fmt"
	"os"
)

func main() {
	// fmt.Println(piscine.Gcd(42, 10))
	// fmt.Println(piscine.Gcd(42, 12))
	// fmt.Println(piscine.Gcd(14, 77))
	// fmt.Println(piscine.Gcd(17, 3))

	testCases := []struct {
		a    uint
		b    uint
		want uint
	}{
		{42, 10, 2},
		{42, 12, 6},
		{14, 77, 7},
		{17, 3, 1},
		{12, 23, 1},
		{25, 15, 5},
		{23043, 122, 1},
		{11, 77, 11},
	}

	for _, tc := range testCases {
		got := Gcd(tc.a, tc.b)
		if got != tc.want {
			fmt.Printf("Gcd(%d, %d) = %d instead of %d\n", tc.a, tc.b, got, tc.want)
			os.Exit(1)
		}
	}
}

func Gcd(a, b uint) uint {
	num := 0
	to := uint(0)

	if a > b {
		to = b
	} else if b > a {
		to = a
	}

	for i := uint(to); i >= 0; i-- {
		if a%i == 0 && b%i == 0 {
			num = int(i)
			break
		}
	}
	return uint(num)
}