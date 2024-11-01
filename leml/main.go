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
	start int
	end   int
	rooms []*Room
	// vertices []*Vertex
}

// /Vertex represents a graph vertex
type Room struct {
	key      int
	adjacent []*Room
}

// graph structure
// vertex structure

// add vertex / node / room : addds a vertex to the graph
func (g *Graph) AddRoom(key int) {
	if contains(g.rooms, key) {
		err := fmt.Errorf("Vertex %v not added because it is an existing key", key)
		fmt.Println(err.Error())
	} else {
		g.rooms = append(g.rooms, &Room{key: key})
	}
}

// /contains
func contains(l []*Room, k int) bool {
	for _, v := range l {
		if k == v.key {
			return true
		}
	}
	return false
}

// /print will print the adjacent list for each vertex of the graph
func (g *Graph) Print() {

	for _, v := range g.rooms {
		fmt.Printf("\nRoom %v : ", v.key)
		for _, v := range v.adjacent {
			fmt.Printf(" %v ", v.key)
		}
	}
}

// addEdge adds an edge to the graph
func (g *Graph) addEdge(from, to int) {
	////get vertex address
	fromRoom := g.checkRoom(from)
	toRoom := g.checkRoom(to)

	///check if one of the rooms is not exist

	if fromRoom == nil || toRoom == nil {
		err := fmt.Errorf("invalid edge (%v --==-------==-->>> %v)", from, to)
		fmt.Println(err.Error())
		///check if the edge is already added
	} else if contains(fromRoom.adjacent, to) {
		err := fmt.Errorf("edge already exist (%v --==-------==-->>> %v)", from, to)
		fmt.Println(err.Error())

	} else {
		// add the edge
		fromRoom.adjacent = append(fromRoom.adjacent, toRoom)
	}
}

// /check if room is exist
func (g *Graph) checkRoom(k int) *Room {
	for i, v := range g.rooms {
		if v.key == k {
			return g.rooms[i]
		}
	}
	return nil
}

// ///read file & extract the start & end rooms / nodes / vertexes
var myGraph = &Graph{}
var r, _ = regexp.Compile("([0-9])+\\s")

func readFile(myFile string) {

	data, err := os.ReadFile(myFile)
	if err != nil {
		log.Fatalln(err)
	}

	// fmt.Println(string(data))
	////spli file data with new line
	lines := strings.Split(string(data), "\n")
	///get the fisrt line / num of ants
	num := lines[0]

	// convert to int
	start, err := strconv.Atoi(num)
	if err != nil {
		log.Fatalln(err)
	}

	end := 0
	foundEnd := false

	for _, v := range lines {

		if v == "##end" {
			foundEnd = true
			continue
		}
		if foundEnd {
			///if end is found trmi spaces and convert it to int
			end, err = strconv.Atoi(strings.Trim(r.FindString(v), " "))
			if err != nil {
				printError(err)
			}
			break
		} //	end = v
	}

	getRooms(data)

	myGraph.start = start
	myGraph.end = end

	// fmt.Printf("Start / End : %+v \n", myGraph)
	fmt.Println("myGraph.start :", myGraph.start)
	fmt.Println("myGraph.end :", myGraph.end)

	// get edges
	edges := strings.Split(strings.Split(string(data), "##start")[1], "##end")[1]

	onlyEdges := strings.Split(string(edges), "\n")[2:]
	getEdges(onlyEdges)
	// fmt.Println(strings.Split(string(edges), "\n"))

}

// /add rooms to graph
func getRooms(data []byte) {
	// ///get rooms between the ##start and the ##end
	roomsSlice := strings.Split(strings.Split(string(data), "##start")[1], "##end")[0]

	// /remove new lines at the beginning and at the end of the slice
	roomsSlice = roomsSlice[1 : len(roomsSlice)-1]

	///convert it to string then split it by \n
	roomsLine := strings.Split(string(roomsSlice), "\n")

	// fmt.Println(len(strings.Split(roomsSlice, "\n")))
	// rooms := []int{}
	myGraph.AddRoom(myGraph.start)

	for _, v := range roomsLine {
		room, err := strconv.Atoi(strings.Trim(r.FindString(v), " "))
		if err != nil {
			printError(err)
		}
		// rooms = append(rooms, room)
		myGraph.AddRoom(room)
	}

}

// /
func getEdges(edges []string) {
	for _, v := range edges {
		from, err := strconv.Atoi(strings.Split(v, "-")[0])
		if err != nil {
			printError(err)
		}
		to, err := strconv.Atoi(strings.Split(v, "-")[1])
		if err != nil {
			printError(err)
		}
		// fmt.Println(from, to)
		myGraph.addEdge(from, to)
	}
}

func printError(msg error) {
	log.Fatalln(msg)
}

func deepFirstSearch(g *Graph, s int) {
	stack := []int{}
	stack = append(stack, s)
	// for {
	if len(stack) < 0 {
		// break
	}
	room := stack[len(stack)-1]
	fmt.Println(room)
	for _, v := range g.rooms {
		fmt.Println("v : ", len(v.adjacent))
	}
	// }

}
func main() {
	// test := &Graph{}

	myArgs := os.Args[1:]
	if len(myArgs) != 1 {
		printError(errors.New("please enter the file."))
	}

	readFile(myArgs[0])
	// test.addEdge(1, 2)
	// test.addEdge(1, 3)
	// test.addEdge(2, 3)
	// test.addEdge(2, 4)
	// test.addEdge(1, 2)
	// test.addEdge(6, 2)
	// test.addEdge(3, 2)
	myGraph.Print()
	fmt.Println("")
	deepFirstSearch(myGraph, 0)

}
