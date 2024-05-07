package db

type Zt_user struct {
	Id           string
	User_name    string
	Pass_word    string
	Nick_name    string
	Created_time string
	Update_time  string
	Deleted_time string
	Is_deleted   int
}

func (Zt_user) TableName() string {
	return "zt_user"
}
