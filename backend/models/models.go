package models

type User struct {
	ID          int    `json:"id"`
	Nickname    string `json:"nickname"`
	Email       string `json:"email"`
	Password    string `json:"password"`
	FirstName   string `json:"firstName"`
	LastName    string `json:"lastName"`
	DateOfBirth string `json:"dateOfBirth"`
	Avatar      []byte `json:"avatar"`
	AboutMe     string `json:"aboutMe"`
}

type Post struct {
	ID        int    `json:"id"`
	UserID    int    `json:"userID"`
	Content   string `json:"content"`
}

type Comment struct {}