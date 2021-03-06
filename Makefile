.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: package.json ## install dependencies
	@if [ "$(CI)" != "true" ]; then \
		echo "Full install..."; \
		yarn; \
	fi
	@if [ "$(CI)" = "true" ]; then \
		echo "Frozen install..."; \
		yarn --frozen-lockfile; \
	fi

run: ## Run the app in dev mode
	yarn dev 

build: ## Build for production
	yarn build

test: ## Run the test
	@if [ "$(CI)" != "true" ]; then \
		yarn test; \
	fi
	@if [ "$(CI)" = "true" ]; then \
		yarn test-ci; \
	fi
