package inter

func pathsIntersect(path1, path2 []string) bool {
	// Create a map to store rooms in path1 (ignoring start and end rooms)
	rooms := make(map[string]bool)
	for i := 1; i < len(path1)-1; i++ {
		rooms[path1[i]] = true
	}

	// Check if any room in path2 is in rooms map
	for i := 1; i < len(path2)-1; i++ {
		if rooms[path2[i]] {
			return true
		}
	}
	return false
}

func UniquePaths(paths [][]string) [][]string {
	// Result to store non-intersecting paths
	var uniquePaths [][]string

	// Loop over each path
	for i := 0; i < len(paths); i++ {
		unique := true

		// Check if this path intersects with any in uniquePaths
		for j := 0; j < len(uniquePaths); j++ {
			if pathsIntersect(paths[i], uniquePaths[j]) {
				unique = false
				break
			}
		}

		// If it doesn't intersect, add it to the result
		if unique {
			uniquePaths = append(uniquePaths, paths[i])
		}
	}
	return uniquePaths
}
