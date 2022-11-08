package gql

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/strrl/dodo-says/ent"
)

// Node is the resolver for the node field.
func (r *queryResolver) Node(ctx context.Context, id int) (ent.Noder, error) {
	return r.client.Noder(ctx, id)
}

// Nodes is the resolver for the nodes field.
func (r *queryResolver) Nodes(ctx context.Context, ids []int) ([]ent.Noder, error) {
	return r.client.Noders(ctx, ids)
}

// Identities is the resolver for the identities field.
func (r *queryResolver) Identities(ctx context.Context) ([]*ent.Identity, error) {
	return r.client.Identity.Query().All(ctx)
}

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
