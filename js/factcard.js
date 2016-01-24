angular
	.module('factCardApp', ['ui.router', 'ngAnimate'])

	.config(function($stateProvider, $urlRouterProvider)
	{
		$stateProvider
			.state('tab1', {
				name: 'tab1',
				url: '/tab1',
				template: '<div class="tab tab1"><h5>VIRAL SPILLOVER</h5><p style="color:white">There are multiple ways viral spillover can happen and scientists are still exploring how and why this happens. They know there are two ways spillover happens: one it ‘jumps’ from one host to another, and the other it mutates to adapt itself to the new host. But what is necessary is that two (or more) species, who in nature would never (or rarely) come in contact with each other, meet.</p></div>'
			})

			.state('tab2', {
				name: 'tab2',
				url: '/tab2',
				template: '<div class="tab tab2"><p style="color:white;">For example, the Ebola virus lives in bats without making them sick (‘reservoir host’). Ebola spreads from bats to gorillas and then humans hunting in the pristine forest then killed those gorillas and were either infected from contact with gorilla fluids (blood) or when they ate the gorilla meat improperly cooked. The most recent outbreak of Ebola in 2014 may have even been spread by a bat biting a small boy, but this remains unproven.</p></div>'
			})

			.state('tab3', {
				name: 'tab3',
				url: '/tab3',
				template: '<div class="tab tab3"><p style="color:white;">There is no known cure for viruses in humans. It’s up to our own individual immune systems to fight them or succumb. Health workers in West Africa during the recent Ebola could only make sure patients were hydrated, fed and as comfortable as possible while they waited and hoped the person’s immune system would win against the virus. Vaccines are preventative and can’t help once someone has already contracted the illness. Furthermore, it takes time to develop vaccines, and even then they are only effective until the virus mutates enough that a new vaccine must be developed.</p></div>'
			})

			.state('tab4', {
				name: 'tab4',
				url: '/tab4',
				template: '<div class="tab tab4"><p>FACT CARD FOUR</p></div>'
			});
	})

	.controller('mainController', function( $scope, $window, $state )
	{
		$scope.transition = 'slide-left';
		$scope.tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
		$scope.currentIndex = -1;
		$scope.maxIndex = $scope.tabs.length;
		$scope.left = false;

		next();

		function next()
		{
			$scope.currentIndex = $scope.currentIndex+1 < $scope.maxIndex ? $scope.currentIndex+1 : 0;
			var name = $scope.tabs[$scope.currentIndex];
			$state.go( name );
		}

		$scope.left = function()
		{
			$scope.transition = 'slide-left';
			next();
		}

		
	})
;