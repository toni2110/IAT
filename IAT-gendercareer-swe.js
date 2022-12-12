define(['pipAPI', 'https://cdn.jsdelivr.net/gh/toni2110/IAT/quiat10-swe-debrief.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Karriär', //Will appear in the data.
			title : {
				media : {word : 'Karriär'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {word: 'Karriär'},
				{word: 'Bolag'},
				{word: 'Lön'},
				{word: 'Kontor'},
				{word: 'Professionell'},
				{word: 'Ledarskap'},
				{word: 'Företag'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Familj', //Will appear in the data.
			title : {
				media : {word : 'Familj'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           	{word: 'Bröllop'},
				{word: 'Äktenskap'},
				{word: 'Föräldrar'},
				{word: 'Släktingar'},
				{word: 'Familj'},
				{word: 'Hem'}, 
				{word: 'Barn'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Man',
			title : {
				media : {word : 'Man'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'Magnus'},
				{word: 'Mats'},
				{word: 'Lars'},
				{word: 'Peter'},
				{word: 'Hans'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Kvinna',
			title : {
				media : {word : 'Kvinna'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'Lena'},
				{word: 'Anna'},
				{word: 'Katarina'},
				{word: 'Susanne'},
				{word: 'Maria'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
