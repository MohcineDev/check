package comb


func GetRoutesComb(route []string, routes [][]string) [][]string {
	var path [][]string

	for i := 1; i < len(routes); i++ {
		a := false

		for j := 1; j < len(route)-1; j++ {
			for k := 1; k < len(routes[i])-1; k++ {
				if routes[i][k] == route[j] {
					a = true
				}
			}
		}

		if !a {
			path = append(path, routes[i])
		}
	}
	return path
}
