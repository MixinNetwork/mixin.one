deploy_staging:
	npm run build;
	tar -czf build.tar.gz build;
	scp build.tar.gz staging:~/bond/temp.tar.gz;
	ssh staging "tar -xzf ~/bond/temp.tar.gz -C ~/bond; rm -rf ~/bond/web; mv ~/bond/build ~/bond/web; rm ~/bond/temp.tar.gz; exit";
	rm -rf build build.tar.gz;