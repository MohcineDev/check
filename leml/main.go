package main

import (
	"fmt"
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
		err := fmt.Errorf("Invalid edge (%v --==-------==-->>> %v)", from, to)
		fmt.Println(err.Error())
	} else if contains(fromVertexAdd.adjacent, to) {
		err := fmt.Errorf("Edge already exist (%v --==-------==-->>> %v)", from, to)
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

func main() {
	test := &Graph{}

	for i := 0; i < 5; i++ {
		test.AddVertex((i))
	}
	test.addEdge(1, 2)
	test.addEdge(1, 3)
	test.addEdge(2, 3)
	test.addEdge(2, 4)
	test.addEdge(1, 2)
	test.addEdge(6, 2)
	test.addEdge(3, 2)
	test.Print()
	fmt.Println("")
}
