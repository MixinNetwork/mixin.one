deploy_staging:
	npm run build;
	tar -czf dist.tar.gz dist;
	scp dist.tar.gz staging1:~/mixin.zone/temp.tar.gz;
	ssh staging1 "tar -xzf ~/mixin.zone/temp.tar.gz -C ~/mixin.zone; rm -rf ~/mixin.zone/spa; mv ~/mixin.zone/dist ~/mixin.zone/spa; rm ~/mixin.zone/temp.tar.gz; exit";
	rm -rf build dist.tar.gz;