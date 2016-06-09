angular.module('cardillApp').factory('roster', [function(){
    var o = {
        roster: [	            
            {title: 'anthony-davis', imgPath: '/images/roster/anthony_davis.png'},
            {title: 'stephen-curry', imgPath: '/images/roster/stephen_curry.png'},
            {title: 'demarcus-cousins', imgPath: '/images/roster/demarcus_cousins.png'},
			{title: 'chris-paul', imgPath: '/images/roster/chris_paul.png'},	           	            	            	            	            
			{title: 'james-harden', imgPath: '/images/roster/james_harden.png'},		
            {title: 'russell-westbrook', imgPath: '/images/roster/russell_westbrook.png'},	            
            {title: 'kevin-durant', imgPath: '/images/roster/kevin_durant.png'},
            {title: 'lebron-james', imgPath: '/images/roster/lebron_james.png'},
			{title: 'damian-lillard', imgPath: '/images/roster/damian_lillard.png'},
			{title: 'kawhi-leonard', imgPath: '/images/roster/kawhi_leonard.png'},	            
            {title: 'jimmy-butler', imgPath: '/images/roster/jimmy_butler.png'},
            {title: 'klay-thompson', imgPath: '/images/roster/klay_thompson.png'}         
        ]
    };
    return o;
}]);