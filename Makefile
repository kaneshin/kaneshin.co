deploy-frontend:
	@gcloud app deploy app.yaml --project kaneshin-co

build-frontend:
	@cd frontend && yarn build
