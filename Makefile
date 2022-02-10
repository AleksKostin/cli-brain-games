install:
	npm ci

barain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
