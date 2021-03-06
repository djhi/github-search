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

test-unit: ## Run the unit test
	@if [ "$(CI)" != "true" ]; then \
		yarn test; \
	fi
	@if [ "$(CI)" = "true" ]; then \
		yarn test-ci; \
	fi

test-e2e: ## Run the e2e tests
	yarn start && yarn cypress run

test-e2e-local: ## Run the e2e tests on local env
	yarn cypress open

test: test-unit test-e2e
