.PHONY: shell
shell:
	nix develop

.PHONY: build
build:
	npm run build

.PHONY: server
server:
	npm start

.PHONY: clean
clean:
	rm -rf dist
