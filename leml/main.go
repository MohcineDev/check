package main

import (
	"errors"
	"fmt"
	"log"
	"os"
	"regexp"
	"strconv"
	"strings"
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
	r, _    = regexp.Compile("([0-9])+\\s")
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
	var end string
	foundEnd := false

	for _, v := range lines {

		if v == "##end" {
			foundEnd = true
			continue
		}
		if foundEnd {

			///if end is found and TODO: trim spaces
			end = r.FindString(v)
			break
		}
	}

	getRooms(data)

	myGraph.totalAnts = totalAnts
	myGraph.end = strings.Trim(end, " ")
	myGraph.AddRoom(strings.Trim(end, " "))

	// get edges
	edges := strings.Split(strings.Split(string(data), "##start")[1], "##end")[1]

	onlyEdges := strings.Split(string(edges), "\n")[2:]
	getEdges(onlyEdges)
}

// /add rooms to graph
func getRooms(data []byte) {
	// ///get rooms between the ##start and the ##end
	roomsSlice := strings.Split(strings.Split(string(data), "##start")[1], "##end")[0]

	// /remove new lines at the beginning and at the end of the slice
	roomsSlice = roomsSlice[1 : len(roomsSlice)-1]

	///convert it to string then split it by \n
	roomsLine := strings.Split(string(roomsSlice), "\n")

	for i, v := range roomsLine {
		room := r.FindString(v)
		if i == 0 {
			myGraph.start = strings.Trim(room, " ")
		}

		myGraph.AddRoom(strings.Trim(room, " "))
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
			///append the path directly to the slice makes a prb removes 0 at the end...
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
	// for _, v := range routes {
	// 	//fmt.Println(v)
	// }
	for i, v := range routes {
		compareRout(v, routes, i)
		// fmt.Println(v)
	}

	for i := 0; i < len(scores)-1; i++ {
		for j := i + 1; j < len(scores); j++ {
			if scores[i] > scores[j] {
				scores[i], scores[j] = scores[j], scores[i]
				routes[i], routes[j] = routes[j], routes[i]
			}
		}
	}

	fmt.Println("")

	// for _, v := range routes {
	// 	fmt.Println(v)
	// }
	firstRoute := routes[0]
	routCombs = append(routCombs, routes[0])
	// for i := 0; i < len()
	b, path := getRoutesComb(firstRoute, routes)
	if b {
		// fmt.Println("ddwed")
		for i := 0; i < len(path); i++ {
			routCombs = append(routCombs, path[i])
		}
	}
	// for _, v := range routCombs {
	// 	  fmt.Println("--  : ", v)
	// }
}

func compareRout(route []string, routes [][]string, currentRouteIndex int) {
	count := 0
	for i, v := range routes {

		if i == currentRouteIndex {
			continue
		}

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
func getRoutesComb(route []string, routes [][]string) (bool, [][]string) {
	var path [][]string
	// path := make([][]string)
	for i := 1; i < len(routes); i++ {
		a := false

		for j := 1; j < len(route)-1; j++ {
			for k := 0; k < len(routes[i]); k++ {
				if routes[i][k] == route[j] {
					a = true
				}
			}
		}
		if !a {
			path = append(path, routes[i])
		}
	}
	return true, path
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
			 fmt.Println(v)
		}
	}
	fmt.Println("")
	filterRoutes(validRoutes)
	// fmt.Println("myGraph.start :", myGraph.start)
	// fmt.Println("myGraph.end :", myGraph.end)
	// fmt.Println("myGraph.totalAnts :", myGraph.totalAnts)

	// 	//print adjacent
	for i, v := range myGraph.adjacent {
		fmt.Println("myGraph :", i, v)
	}
	// fmt.Println(myGraph.adjacent)
	// fmt.Println(myGraph.rooms)
	//	myGraph.PrintRooms()
}

func (g *Graph) PrintRooms() {
	fmt.Println("Rooms in the graph : ")
	for roomName := range g.rooms {
		fmt.Println(roomName)
	}
}
