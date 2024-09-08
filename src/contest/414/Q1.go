package c_414

import (
	"strconv"
	"strings"
)

func ConvertDateToBinary(date string) string {
	list := strings.Split(date, "-")

	for i, v := range list {
		d, _ := strconv.Atoi(v)
		list[i] = strconv.FormatInt(int64(d), 2)
	}

	return strings.Join(list, "-")
}
