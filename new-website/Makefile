deploy_staging:
	npm run build;
	scp -r build staging:~/bond/temp;
	ssh staging "rm -rf ~/bond/web; mv ~/bond/temp ~/bond/web; exit";
	rm -rf build;