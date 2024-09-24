package piscine

import "fmt"

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
			}else if i < 10 {
				res += fmt.Sprintf("0%d ", i)
			} else {
				res += fmt.Sprintf("%d ", i)
			}
		}
	
	}
	return res + "\n"
}
