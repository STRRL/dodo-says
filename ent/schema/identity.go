package schema

import (
	"entgo.io/contrib/entgql"
	"entgo.io/ent"
	"entgo.io/ent/schema"
	"entgo.io/ent/schema/field"
)

// Identity holds the schema definition for the Identity entity.
type Identity struct {
	ent.Schema
}

// Fields of the Identity.
func (Identity) Fields() []ent.Field {
	return []ent.Field{
		field.String("name"),
		field.Bool("anonymous"),
	}
}

// Edges of the Identity.
func (Identity) Edges() []ent.Edge {
	return nil
}

func (Identity) Annotations() []schema.Annotation {
	return []schema.Annotation{
		entgql.QueryField(),
		entgql.Mutations(entgql.MutationCreate()),
	}
}
