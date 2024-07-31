package repository

import (
	"social-network/models"
)

type UserRepository interface {
	FindAll() ([]models.User, error)
	FindByID(id int) (models.User, error)
	Create(user models.User) (models.User, error)
	Update(user models.User) (models.User, error)
	Delete(id int) error
}

type PostFilterFunc func(models.Post) bool

type PostRepository interface {
	FindAll() ([]models.Post, error)
	Create(post models.Post) (models.Post, error)
	Filter(f PostFilterFunc) ([]models.Post, error)
}

type CommentRepository interface {
	Create(comment models.Comment) (models.Comment, error)
	FindAll() ([]models.Comment, error)
}