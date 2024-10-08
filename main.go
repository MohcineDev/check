package piscine

import (
	"fmt"

	"github.com/01-edu/z01"
)

func FirstWord(s string) string {
	res := ""

	for i := 0; i < len(s); i++ {
		if string(s[i]) != " " {
			res += string(s[i])
		} else if len(res) >= 1 {
			break
		}
	}
	return res + "\n"
}

func FishAndChips(n int) string {
	res := "error: non divisible"
	if n < 0 {
		res = "error: number is negative"
	}
	if n%2 == 0 && n%3 == 0 {
		res = "fish and chips"
	} else if n%2 == 0 {
		res = "fish"
	} else if n%3 == 0 {
		res = "chips"
	}

	return res
}

func Gcd(a, b uint) uint {
	num := 0
	to := uint(0)

	if a > b {
		to = b
	} else if b > a {
		to = a
	}
	for i := uint(to) - 1; i >= 0; i-- {
		if a%i == 0 && b%i == 0 {
			num = int(i)
			break
		}
	}
	return uint(num)
}

func RepeatAlpha(s string) string {
	res := ""

	for i := 0; i < len(s); i++ {
		index := 0
		if s[i] >= 'a' && s[i] <= 'z' {
			for j := 'a'; j <= 'z'; j++ {
				index++
				if rune(s[i]) == j {
					break
				}
			}
		} else if s[i] >= 'A' && s[i] <= 'Z' {
			for j := 'A'; j <= 'Z'; j++ {
				index++
				if rune(s[i]) == j {
					break
				}
			}
		}

		for j := 0; j < index; j++ {
			res += string(s[i])
		}
		res += string(s[i])

	}
	return res
}

func FromTo(from int, to int) string {
	res := ""
	if from > 99 || from < 0 || to > 99 || to < 0 {
		return "Invalid\n"
	}

	if from <= to {
		for i := from; i <= to; i++ {
			if i < 10 {
				res += fmt.Sprintf("0%d ", i)
			} else {
				res += fmt.Sprintf("%d", i)
			}
		}
	} else if from > to {
		for i := from; i >= to; i-- {
			if i == 1 {
				res += fmt.Sprintf("0%d", i)
			} else if i < 10 {
				res += fmt.Sprintf("0%d ", i)
			} else {
				res += fmt.Sprintf("%d ", i)
			}
		}
	}
	return res + "\n"
}

func Itoa(n int) string {
	res := ""
	num := 0
	sign := ""
	if n < 0 {
		sign = "-"
		n *= -1
	}
	if n == 0 {
		return "0"
	}

	for n > 0 {
		num = n % 10
		n = n / 10
		res = string(rune(num)+'0') + res
	}

	return sign + res
}

func PrintMemory(arr [10]byte) {
	base := "0123456789abcdef"
	fmt.Println("")
	z01.PrintRune(71)
	z01.PrintRune(rune(71))
	fmt.Println("")
	for i := 0; i < len(arr); i++ {
		div := int(arr[i]) / len(base)
		mod := int(arr[i]) % len(base)
		z01.PrintRune(rune(base[div]))
		z01.PrintRune(rune(base[mod]))
		z01.PrintRune(' ')

		if i == 3 || i == 7 {
			z01.PrintRune('\n')
		}
	}
	z01.PrintRune('\n')

	for i := 0; i < len(arr); i++ {
		z01.PrintRune(rune(arr[i]))
		if arr[i] < 32 || arr[i] > 127 {
			z01.PrintRune('.')
		}
	}
	fmt.Println("")
}
