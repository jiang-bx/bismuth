package count

import (
	"math/rand"
)

type Codec struct {
	originToTiny map[string]string
	tinyToOrigin map[string]string
	str          string
	prefix       string
	k            int
}

func ConstructorCodec() Codec {
	return Codec{
		originToTiny: map[string]string{},
		tinyToOrigin: map[string]string{},
		str:          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
		prefix:       "https://leetcode.com/",
		k:            6,
	}
}

func (c *Codec) encode(longUrl string) string {
	_, isExist := c.originToTiny[longUrl]
	for !isExist {
		tinyStrList := make([]byte, 6)
		for i := 0; i < c.k; i++ {
			tinyStrList[i] = c.str[rand.Intn(len(c.str))]
		}
		curTiny := c.prefix + string(tinyStrList)
		if _, ok1 := c.tinyToOrigin[curTiny]; ok1 {
			continue
		}
		c.tinyToOrigin[curTiny] = longUrl
		c.originToTiny[longUrl] = curTiny
		isExist = true
	}
	return c.originToTiny[longUrl]
}

func (c *Codec) decode(shortUrl string) string {
	return c.tinyToOrigin[shortUrl]
}
