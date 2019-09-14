deploy-frontend: build-frontend
	@cd frontend && yarn deploy

build-frontend:
	@cd frontend && yarn build
