package main

import (
	"errors"
	"fmt"
	"log"
	"os"
	"regexp"
	"strconv"
	"strings"

	"lem-in/inter"
)

// //Graph represents an adjacency list graph
type Graph struct {
	start     string
	end       string
	totalAnts int
	rooms     []*Room
	adjacent  map[string][]string
	// vertices []*Vertex
}

// /Vertex represents a graph vertex
type Room struct {
	key string
}

// graph structure
// vertex structure

// add vertex / node / room : addds a vertex to the graph
func (g *Graph) AddRoom(key string) {
	g.rooms = append(g.rooms, &Room{key})
}

// /print will print the adjacent list for each vertex of the graph
func (g *Graph) Print() {
	for _, v := range g.rooms {
		fmt.Printf("\nRoom %v : ", v.key)
	}
}

// addEdge adds an edge to the graph
func (g *Graph) addEdge(from, to string) {
	////get vertex address
	fromRoom := g.checkRoom(from)
	toRoom := g.checkRoom(to)

	///check if one of the rooms is not exist
	if fromRoom == "_" || toRoom == "_" {
		err := fmt.Errorf("invalid edge (%v --==-------==-->>> %v)", from, to)
		fmt.Println(err.Error())

		///TODO : check if the edge is already added
	} else {

		// add the edge

		g.adjacent[from] = append(g.adjacent[from], toRoom)
		g.adjacent[toRoom] = append(g.adjacent[toRoom], from)

	}
}

func getEdges(edges []string) {
	for _, v := range edges {

		res := strings.Split(v, "-")
		fmt.Println(res)
		from := res[0]
		to := res[1]

		myGraph.addEdge(from, to)
	}
}

// check if the room is exist/////
func (g *Graph) checkRoom(k string) string {
	for _, v := range g.rooms {
		if v.key == k {
			return k
		}
	}
	return "_"
}

// ///read file & extract the start & end rooms / nodes / vertexes
var (
	myGraph = &Graph{}
	r, _    = regexp.Compile(`([0-9])+\s`)
	reg, _  = regexp.Compile(`[a-zA-Z0-9]+\s[0-9]+\s[0-9]+`)
)

func readFile(myFile string) {
	data, err := os.ReadFile(myFile)
	if err != nil {
		log.Fatalln(err)
	}

	////spli file data with new line
	lines := strings.Split(string(data), "\n")

	///get the fisrt line / num of ants
	num := lines[0]

	// convert to int
	totalAnts, err := strconv.Atoi(num)
	if err != nil {
		printError(err)
	}

	foundEnd := false
	foundStart := false

	for _, v := range lines {

		if v == "##start" {
			foundStart = true
			continue
		}
		if foundStart {
			myGraph.start = strings.Trim(r.FindString(v), " ")
			foundStart = false
		}

		if v == "##end" {
			foundEnd = true
			continue
		}
		if foundEnd {
			myGraph.end = strings.Trim(r.FindString(v), " ")
			foundEnd = false
			break
		}
	}

	getRooms(data)

	myGraph.totalAnts = totalAnts

	// get edges
	edges := strings.Split(strings.Split(string(data), "##start")[1], "##end")[1]

	onlyEdges := strings.Split(string(edges), "\n")[2:]
	roomDashRoom := []string{}
	for _, v := range onlyEdges {
		if strings.Contains(v, "-") {
			roomDashRoom = append(roomDashRoom, v)
		}
	}
	// fmt.Println(roomDashRoom)
	getEdges(roomDashRoom)
}

// /add rooms to graph
func getRooms(data []byte) {
	for _, v := range strings.Split(string(data), "\n") {
		if !strings.HasPrefix(v, "##start") && !strings.HasPrefix(v, "##end") {
			if reg.MatchString(v) {
				myGraph.AddRoom(strings.Split(v, " ")[0])
			}
		}
	}
}

func printError(msg error) {
	log.Fatalln(msg)
}

func (g *Graph) deepFirstSearch() [][]string {
	stack := [][]string{}

	visited := make(map[string]bool)

	var getPaths func(path []string, room string)

	getPaths = func(path []string, room string) {
		///if room eq end
		if room == g.end {
			M := []string{}

			M = append(M, path...)
			///append the path directly to the stack makes a prb removes 0 at the end...
			stack = append(stack, M)
			return
		}

		visited[room] = true
		for _, v := range g.adjacent[room] {
			if !visited[v] {
				getPaths(append(path, v), v)
			}
		}
		visited[room] = false
	}

	getPaths([]string{g.start}, g.start)
	return stack
}

var (
	validRoutes = [][]string{}
	scores      = []int{}
)
var routCombs = [][]string{}

func filterRoutes(routes [][]string) {
	// sort.Slice(routes, func(i, j int) bool {
	// 	return len(routes[i]) < len(routes[j])
	// })

	for i, v := range routes {
		// fmt.Println(v)
		compareRout(v, routes, i)
	}

	///sort the scores and routes slices cuz they have the same length
	for i := 0; i < len(scores)-1; i++ {
		for j := i + 1; j < len(scores); j++ {
			if scores[i] > scores[j] {
				scores[i], scores[j] = scores[j], scores[i]
				routes[i], routes[j] = routes[j], routes[i]
			}
		}
	}

	fmt.Println("")

	for _, v := range routes {
		fmt.Println(v)
	}
	fmt.Println(inter.FindNonIntersectingPaths(routes))
	// firstRoute := routes[0]
	// routCombs = append(routCombs, routes[0])

	// path := getRoutesComb(firstRoute, routes)

	// for i := 0; i < len(path); i++ {
	// 	routCombs = append(routCombs, path[i])
	// }

	// for _, v := range routCombs {
	// 	fmt.Println("++  : ", v)
	// }
}

func compareRout(route []string, routes [][]string, currentRouteIndex int) {
	count := 0

	for i, v := range routes {

		if i == currentRouteIndex {
			continue
		}
		///exclude the start and the end rooms from the comparaison
		for j := 1; j < len(route)-1; j++ {
			for k := 1; k < len(v)-1; k++ {
				if route[j] == v[k] {
					count++
				}
			}
		}
	}
	scores = append(scores, count)
}

// ///
func getRoutesComb(route []string, routes [][]string) [][]string {
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

func main() {
	myArgs := os.Args[1:]
	if len(myArgs) != 1 {
		printError(errors.New("please enter the file"))
	}
	myGraph.adjacent = make(map[string][]string)

	readFile(myArgs[0])

	paths := myGraph.deepFirstSearch()
	validRoutes := [][]string{}

	for _, v := range paths {
		fmt.Println(v)
		if v[len(v)-1] == "0" {
			/// only paths that end with 0
			validRoutes = append(validRoutes, v)
		}
	}
	fmt.Println("")
	filterRoutes(validRoutes)

	// 	//print adjacent
	// for i, v := range myGraph.adjacent {
	// fmt.Println("myGraph :", i, v)
	// }
	// fmt.Println("start : ", myGraph.start)
	// fmt.Println("end : ", myGraph.end)
	// fmt.Println("totalAnts : ", myGraph.totalAnts)
	// fmt.Println(myGraph.adjacent)
	//  fmt.Println(myGraph.rooms)
	myGraph.PrintRooms()
}

func (g *Graph) PrintRooms() {
	fmt.Println("Rooms in the graph : ")
	for roomName := range g.rooms {
		fmt.Println("roomName: ", roomName)
	}
}
