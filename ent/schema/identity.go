package schema

import "entgo.io/ent"

// Identity holds the schema definition for the Identity entity.
type Identity struct {
	ent.Schema
}

// Fields of the Identity.
func (Identity) Fields() []ent.Field {
	return nil
}

// Edges of the Identity.
func (Identity) Edges() []ent.Edge {
	return nil
}
