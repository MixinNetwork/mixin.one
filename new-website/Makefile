deploy_staging:
	npm run build;
	tar -czf build.tar.gz build;
	scp build.tar.gz staging1:~/mixin.zone/temp.tar.gz;
	ssh staging1 "tar -xzf ~/mixin.zone/temp.tar.gz -C ~/mixin.zone; rm -rf ~/mixin.zone/html; mv ~/mixin.zone/build ~/mixin.zone/html; rm ~/mixin.zone/temp.tar.gz; exit";
	rm -rf build build.tar.gz;