package utils

import (
	"fmt"
	"testing"
)

func TestWarp(log string, f func()) {
	fmt.Println(log)
	f()
}

func TestCondition(t *testing.T, log string, successCondition bool) {
	fmt.Println(log)
	if successCondition {
		fmt.Println("    通过")
	} else {
		fmt.Println("    不通过")
		t.Error("不通过")
	}
}
