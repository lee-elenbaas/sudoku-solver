define(['plugins/router', 'durandal/app'], function (router, app) {
	function Shell(){
		this.router = router;
		this.searchPhrase = '';
	}
	
	function search() {
		//It's really easy to show a message box.
		//You can add custom options too. Also, it returns a promise for the user's response.
		app.showMessage('Search not yet implemented... ' + this.searchPhrase); // Will provide a way to search trhou the views, and through the predefined games
	}
	
	function activate(){
		this.router.map([
			{ route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
			{ route: 'flickr', moduleId: 'viewmodels/flickr', nav: true }
		]).buildNavigationModel();
		
		return this.router.activate();
	}

	Shell.prototype.search = search;
	Shell.prototype.activate = activate;
	
    return Shell;
});
