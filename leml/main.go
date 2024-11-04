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

	var mm func(path []string, room string)
	mm = func(path []string, room string) {
		///if room eq end

		if room == g.end {
			stack = append(stack, path)
			return
		}

		visited[room] = true

		for _, v := range g.adjacent[room] {
			if !visited[v] {
				mm(append(path, v), v)
			}
		}
		visited[room] = false
	}

	mm([]string{g.start}, g.start)
	return stack
}

func main() {
	myArgs := os.Args[1:]
	if len(myArgs) != 1 {
		printError(errors.New("please enter the file"))
	}
	myGraph.adjacent = make(map[string][]string)

	readFile(myArgs[0])
	paths := myGraph.deepFirstSearch()
	for _, v := range paths {
		if v[len(v)-1] == "0" {
			
			fmt.Println(v)
		}
	}
	fmt.Println("")

	// fmt.Println("myGraph.start :", myGraph.start)
	// fmt.Println("myGraph.end :", myGraph.end)

	// fmt.Println("myGraph.totalAnts :", myGraph.totalAnts)
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
