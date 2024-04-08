package tree

// Definition for Employee.
type Employee struct {
	Id           int
	Importance   int
	Subordinates []int
}

func GetImportance(employees []*Employee, id int) int {
	return 1
}
