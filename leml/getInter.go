package main

// Sample paths (replace with actual paths)
// var paths = [][]string{
// 	{1, 3, 4, 0},
// 	{1, 2, 4, 0},
// 	{1, 3, 5, 6, 0},
// 	{1, 2, 7, 6, 0},
// }

// Function to check if two paths intersect
func pathsIntersect(path1, path2 []string) bool {
	// Create a map to store rooms in path1 (ignoring start and end rooms)
	rooms := make(map[string]bool)
	for i := 1; i < len(path1)-1; i++ { // skip start and end
		rooms[path1[i]] = true
	}

	// Check if any room in path2 is in rooms map
	for i := 1; i < len(path2)-1; i++ { // skip start and end
		if rooms[path2[i]] {
			return true // paths intersect
		}
	}
	return false // no intersection
}

// Function to find non-intersecting paths
func FindNonIntersectingPaths(paths [][]string) [][]string {
	// Result to store non-intersecting paths
	var nonIntersectingPaths [][]string

	// Loop over each path
	for i := 0; i < len(paths); i++ {
		isNonIntersecting := true

		// Check if this path intersects with any in nonIntersectingPaths
		for j := 0; j < len(nonIntersectingPaths); j++ {
			if pathsIntersect(paths[i], nonIntersectingPaths[j]) {
				isNonIntersecting = false
				break
			}
		}

		// If it doesn't intersect, add it to the result
		if isNonIntersecting {
			nonIntersectingPaths = append(nonIntersectingPaths, paths[i])
		}
	}
	return nonIntersectingPaths
}

// func mainx() {
// 	// Find and print non-intersecting paths
// 	result := findNonIntersectingPaths(paths)
// 	fmt.Println("Non-intersecting paths:", result)
// }
