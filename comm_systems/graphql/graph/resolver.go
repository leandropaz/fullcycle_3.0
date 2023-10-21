package graph

import "github.com/leandropaz/fullcycle_3.0/comm_systems/graphql/internal/database"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	CategoryDB *database.Category
	CourseDB   *database.Course
}
