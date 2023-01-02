define(['pipAPI', 'https://cdn.jsdelivr.net/gh/toni2110/IAT/Qualtrics/quiat10-swe.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
var posWords = API.shuffle([
            'Kärlek', 'Glädje', 'Vän',  
            'Vänskap', 'Lycka', 
            'Leende']);
  var negWords = API.shuffle([
            'Sorg', 'Giftig', 'Nedstämd', 
            'Smärta', 'Misslyckande', 'Negativ', 
            'Ond']);
	return iatExtension({
    
    /*showDebriefing is true witch mean that the user will see his feeadback at the end of the test.
		If you don't want the feedback to be shown to the user change this value to be false, the score of the test will be save at both cases
		*/
		showDebriefing:true,
    
		category1 : {
			name : 'äldre personer', //Will appear in the data.
			title : {
				media : {word : 'Äldre personer'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image: 'om1.jpg'},
                {image: 'om2.jpg'},
                {image: 'om3.jpg'},
                {image: 'of1.jpg'},
                {image: 'of2.jpg'},                 
                {image: 'of3.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'yngre personer', //Will appear in the data.
			title : {
				media : {word : 'Yngre personer'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		        {image: 'ym1.jpg'},
                {image: 'ym2.jpg'},
                {image: 'ym3.jpg'},
                {image: 'yf1.jpg'},
                {image: 'yf2.jpg'},
                {image: 'yf3.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
	attribute1 :
		{
			name : 'Dåligt',
			title : {
				media : {word : 'Dåligt'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: negWords[0]},
				{word: negWords[1]},
				{word: negWords[2]},
				{word: negWords[3]},
				{word: negWords[4]},
				{word: negWords[5]},
				{word: negWords[6]},
				{word: posWords[7]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Bra',
			title : {
				media : {word : 'Bra'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: posWords[0]},
				{word: posWords[1]},
				{word: posWords[2]},
				{word: posWords[3]},
				{word: posWords[4]},
				{word: posWords[5]},
				{word: posWords[6]}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
