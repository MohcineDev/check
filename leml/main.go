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

var (
	myGraph   = &Graph{}
	r, _      = regexp.Compile(`([0-9])+\s`)
	dataLines = []string{}
)

// ///read file & extract the start & end rooms / nodes / vertexes
func readFile(myFile string) {
	data, err := os.ReadFile(myFile)
	if err != nil {
		log.Fatalln(err)
	}

	////split file data with new line
	dataLines = strings.Split(string(data), "\n")

	///get the fisrt line / total of ants  // convert it to int
	totalAnts, err := strconv.Atoi(dataLines[0])
	if err != nil {
		printError(errors.New("invalid Ants count"))
	}
	myGraph.totalAnts = totalAnts

	///get start and end rooms
	foundEnd := false
	foundStart := false

	for _, value := range dataLines {
		room := strings.Trim(r.FindString(value), " ")

		if value == "##start" {
			foundStart = true
			continue
		}

		if foundStart {
			myGraph.start = room
			foundStart = false
			if len(myGraph.start) < 1 {
				printError(errors.New("starting room not found"))
			}
		}

		if value == "##end" {
			foundEnd = true
			continue
		}

		if foundEnd {
			myGraph.end = room
			foundEnd = false
			if len(myGraph.end) < 1 {
				printError(errors.New("ending room not found"))
			}
			break
		}
	}

	// get edges after ##end flag
	edges := strings.Split(string(data), "##end")[1]

	onlyEdges := []string{}

	for _, v := range strings.Split(edges, "\n") {
		if strings.Contains(v, "-") {
			onlyEdges = append(onlyEdges, v)
		}
	}
	// fmt.Println(onlyEdges)
	getEdges(onlyEdges)
}

func getEdges(edges []string) {
	for _, v := range edges {

		res := strings.Split(v, "-")

		from := res[0]
		to := res[1]

		myGraph.addEdge(from, to)
	}
}

// addEdge adds an edge to the graph
func (g *Graph) addEdge(from, to string) {
	///TODO : check if one of the rooms is not exist
	/// check if the edge is already added

	// add the edge for both sides / rooms
	g.adjacent[from] = append(g.adjacent[from], to)
	g.adjacent[to] = append(g.adjacent[to], from)
}

// /add rooms to graph
func getRooms(dataLines []string) {
	reg, _ := regexp.Compile(`[a-zA-Z0-9]+\s[0-9]+\s[0-9]+`)

	for _, v := range dataLines {
		if !strings.HasPrefix(v, "##start") && !strings.HasPrefix(v, "##end") {
			if reg.MatchString(v) {
				myGraph.AddRoom(strings.Split(v, " ")[0])
			}
		}
	}
}

// add vertex / node / room : addds a vertex to the graph
func (g *Graph) AddRoom(key string) {
	g.rooms = append(g.rooms, &Room{key})
}

func printError(msg error) {
	log.Fatalln(msg)
}

// /find available routes
func (g *Graph) deepFirstSearch() [][]string {
	stack := [][]string{}

	// track visited rooms
	visited := make(map[string]bool)

	var getPaths func(path []string, room string)

	getPaths = func(path []string, room string) {
		///if room eq end
		if room == g.end {
			M := []string{}
			M = append(M, path...)

			///append the path directly to the stack makes a prb removes end room from the end...
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

var scores = []int{}
var routCombs = [][]string{}

func filterRoutes(routes [][]string) {
	for i, v := range routes {
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

	for i, v := range routes {
		fmt.Println("route", i, ":", v)
	}
	fmt.Println("")
	fmt.Println(inter.FindUniquePaths(routes))
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

	// why
	myGraph.adjacent = make(map[string][]string)

	readFile(myArgs[0])
	getRooms(dataLines)

	// print adjacent
	for i, v := range myGraph.adjacent {
		fmt.Println("adjacents of :", i, "are : ", v)
	}

	paths := myGraph.deepFirstSearch()
	fmt.Println("DFS : ", paths)

	validRoutes := [][]string{}

	for _, v := range paths {
		if v[len(v)-1] == myGraph.end {
			/// only paths that end with myGraph.end room
			validRoutes = append(validRoutes, v)
		}
	}
	fmt.Println("")
	filterRoutes(validRoutes)

	//   fmt.Println(myGraph.adjacent)
	myGraph.PrintRooms()
}

func (g *Graph) PrintRooms() {
	fmt.Println("totalAnts : ", myGraph.totalAnts)
	fmt.Println("start : ", myGraph.start)
	fmt.Println("end : ", myGraph.end)
	fmt.Println("Rooms in the graph : ")
	for roomName := range g.rooms {
		fmt.Println("roomName: ", roomName)
	}
}

func sendAnts() {
}
