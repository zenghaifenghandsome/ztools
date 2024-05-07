package db

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var Zdb *gorm.DB
var zerror error

func init() {
	Zdb, zerror = gorm.Open(sqlite.Open("/home/zeng/ztools.db"), &gorm.Config{})
	if zerror != nil {
		panic("failed to connect database")
	}
	Zdb.AutoMigrate(&Zt_user{})
}
