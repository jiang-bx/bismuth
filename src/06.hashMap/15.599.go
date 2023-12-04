package hashmap

type restaurantMapItem struct {
	isPublic bool
	index    int
}

func FindRestaurantMethod1(list1 []string, list2 []string) []string {
	restaurantMap := map[string]*restaurantMapItem{}
	minIndex := 2000

	for i, v := range list1 {
		restaurantMap[v] = &restaurantMapItem{
			isPublic: false,
			index:    i,
		}
	}

	for i, v := range list2 {
		if value, ok := restaurantMap[v]; ok {
			totalIndex := value.index + i

			restaurantMap[v].isPublic = true
			restaurantMap[v].index = totalIndex

			if totalIndex <= minIndex {
				minIndex = totalIndex
			}
		}
	}

	res := []string{}

	for i, v := range restaurantMap {
		if v.isPublic && v.index == minIndex {
			res = append(res, i)
		}
	}

	return res
}

func FindRestaurant(list1 []string, list2 []string) []string {
	restaurantMap := map[string]int{}
	minIndex := 2000
	res := []string{}

	for i, v := range list1 {
		restaurantMap[v] = i
	}

	for i, v := range list2 {
		if value, ok := restaurantMap[v]; ok {
			totalIndex := value + i

			if totalIndex < minIndex {
				minIndex = totalIndex
				res = []string{v}
			} else if totalIndex == minIndex {
				res = append(res, v)
			}

		}
	}

	return res
}
