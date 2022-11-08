.PHONY: help
help:
	@echo "make help under construction"

.PHONY: generate
generate:
	go generate ./... && go mod tidy
