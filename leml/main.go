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
	vertices []*Vertex
}

// /Vertex represents a graph vertex
type Vertex struct {
	key      int
	adjacent []*Vertex
}

// graph structure
// vertex structure

// add vertex / node : addds a vertex to the graph
func (g *Graph) AddVertex(key int) {
	if contains(g.vertices, key) {
		err := fmt.Errorf("Vertex %v not added because it is an existing key", key)
		fmt.Println(err.Error())
	} else {
		g.vertices = append(g.vertices, &Vertex{key: key})
	}
}

// /contains
func contains(l []*Vertex, k int) bool {
	for _, v := range l {
		if k == v.key {
			return true
		}
	}
	return false
}

// /print will print the adjacent list for each vertex of the graph
func (g *Graph) Print() {
	for _, v := range g.vertices {
		fmt.Printf("\nVertex %v : ", v.key)
		for _, v := range v.adjacent {
			fmt.Printf(" %v ", v.key)
		}
	}
}

// addEdge adds an edge to the graph
func (g *Graph) addEdge(from, to int) {
	////get vertex address
	fromVertexAdd := g.getVertex(from)
	toVertexAdd := g.getVertex(to)
	///check errors
	if fromVertexAdd == nil || toVertexAdd == nil {
		err := fmt.Errorf("invalid edge (%v --==-------==-->>> %v)", from, to)
		fmt.Println(err.Error())
	} else if contains(fromVertexAdd.adjacent, to) {
		err := fmt.Errorf("edge already exist (%v --==-------==-->>> %v)", from, to)
		fmt.Println(err.Error())

	} else {
		// add the edge

		fromVertexAdd.adjacent = append(fromVertexAdd.adjacent, toVertexAdd)
	}
}

func (g *Graph) getVertex(k int) *Vertex {
	for i, v := range g.vertices {
		if v.key == k {
			return g.vertices[i]
		}
	}
	return nil
}

// ///read file & extract the start & end rooms / nodes / vertexes
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
	r, _ := regexp.Compile("([0-9])+\\s")

	foundEnd := false

	for _, v := range lines {
		// fmt.Println("v : ", v)
		if v == "##start" {

		}
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

	/////get rooms between ##start and ##end
	roomsSlice := strings.Split(strings.Split(string(data), "##start")[1], "##end")[0]

	///remove new lines in the beginning and the end
	roomsSlice = roomsSlice[1 : len(roomsSlice)-1]

	roomsWith := strings.Split(string(roomsSlice), "\n")

	// fmt.Println(len(strings.Split(roomsSlice, "\n")))
	rooms := []int{}

	for _, v := range roomsWith {
		room, err := strconv.Atoi(strings.Trim(r.FindString(v), " "))
		if err != nil {
			printError(err)
		}
		rooms = append(rooms, room)
	}

	fmt.Printf("Start : %v \nEnd : %v \n", start, end)
	fmt.Println("rooms :", rooms)
}

func printError(msg error) {
	log.Fatalln(msg)
}

func main() {
	// test := &Graph{}

	myArgs := os.Args[1:]
	if len(myArgs) != 1 {
		printError(errors.New("please enter the file."))
	}

	readFile(myArgs[0])

	// for i := 0; i < 5; i++ {
	// 	test.AddVertex((i))
	// }
	// test.addEdge(1, 2)
	// test.addEdge(1, 3)
	// test.addEdge(2, 3)
	// test.addEdge(2, 4)
	// test.addEdge(1, 2)
	// test.addEdge(6, 2)
	// test.addEdge(3, 2)
	// test.Print()
	// fmt.Println("")
}
