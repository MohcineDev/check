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
	// if contains(g.rooms, key) {
	// 	err := fmt.Errorf("Vertex %v not added because it is an existing key", key)
	// 	fmt.Println(err.Error())
	// } else {
	g.rooms = append(g.rooms, &Room{key})
	// }
}

// /print will print the adjacent list for each vertex of the graph
func (g *Graph) Print() {
	for _, v := range g.rooms {
		fmt.Printf("\nRoom %v : ", v.key)
		// for _, v := range v.adjacent {
		// 	fmt.Printf(" %v ", v.key)
		// }
	}
}

// addEdge adds an edge to the graph
func (g *Graph) addEdge(from, to string, myMap map[string][]string) {
	////get vertex address
	fromRoom := g.checkRoom(from)
	toRoom := g.checkRoom(to)

	///check if one of the rooms is not exist
	if fromRoom == "_" || toRoom == "_" {
		err := fmt.Errorf("invalid edge (%v --==-------==-->>> %v)", from, to)
		fmt.Println(err.Error())

		///TODO : check if the edge is already added
	} else {
		// eedges := []string{}
		// eedges = append(eedges, toRoom)
		// add the edge

		// m[from] = eedges

		// myMap[from] = append(myMap[from], toRoom)
		g.adjacent[from] = append(g.adjacent[from], toRoom)
		// g.adjacent[from] = myMap[from]
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
	myGraph.end = end
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
			myGraph.start = room
		}

		myGraph.AddRoom(strings.Trim(room, " "))
	}
}

// /split rooms
func getEdges(edges []string) {
	m := make(map[string][]string)

	for _, v := range edges {
		from := strings.Split(v, "-")[0]

		to := strings.Split(v, "-")[1]

		// fmt.Println(from, to)
		myGraph.addEdge(from, to, m)
	}
}

func printError(msg error) {
	log.Fatalln(msg)
}

func deepFirstSearch(g *Graph, s string) {
	stack := []string{}
	stack = append(stack, s)
	a := []string{}

	for {
		if len(stack) == 0 {
			break
		}

		// fmt.Println("stack : ", stack)
		room := stack[len(stack)-1]
		fmt.Println("room : ", room)

		stack = stack[:len(stack)-1]
		// fmt.Println("stack : ", stack)
		// fmt.Println("v : ", room, g.adjacent[room])
		already := false
		for _, v := range a {
			if v == room {
				already = true
			}
		}
		if !already {
			for _, v := range g.adjacent[room] {
				stack = append(stack, v)
				// fmt.Println("stack 2 : ", len(v))
			}
		}
		a = append(a, room)
	}
}

func main() {
	// test := &Graph{}

	myArgs := os.Args[1:]
	if len(myArgs) != 1 {
		printError(errors.New("please enter the file."))
	}
	myGraph.adjacent = make(map[string][]string)

	readFile(myArgs[0])

	fmt.Println("")
	deepFirstSearch(myGraph, "3")

	// fmt.Printf("Start / End : %+v \n", myGraph)
	// fmt.Println("myGraph.start :", myGraph.start)
	// fmt.Println("myGraph.end :", myGraph.end)

	// fmt.Println("myGraph.totalAnts :", myGraph.totalAnts)
	// for _, v := range myGraph.adjacent {
	// 	fmt.Println("myGraph :", v)
	// }
	fmt.Println(myGraph.adjacent)
	// fmt.Println(myGraph.rooms)
	// myGraph.PrintRooms()
}

func (g *Graph) PrintRooms() {
	fmt.Println("Rooms in the graph : ")
	for roomName := range g.rooms {
		fmt.Println(roomName)
	}
}
