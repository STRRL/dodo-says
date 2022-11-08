package gql

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/strrl/dodo-says/ent"
)

// CreateIdentity is the resolver for the createIdentity field.
func (r *mutationResolver) CreateIdentity(ctx context.Context, input ent.CreateIdentityInput) (*ent.Identity, error) {
	return r.client.Identity.Create().SetInput(input).Save(ctx)
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

type mutationResolver struct{ *Resolver }
