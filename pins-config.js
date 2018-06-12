var pins_config = {
	'default':{
		'pinShadow':'#000', //shadow color below the points
		'pinShadowOpacity':'50', //shadow opacity, value, 0-100"
	},
	'points':[
	//  {
	// 	'shape':'rectangle',//choose the shape of the pin circle or rectangle
	  	// 'hover':'<b><u>WASHINGTON DC</u></b><br><span style="color: yellow;">*Write text or load images*</span>',//the content of the hover ppup
	//  	'pos_X':587,//location of the pin on X axis
	// 	'pos_Y':182,//location of the pin on Y axis
	//  	'width':14,//width of the pin if rectangle (if circle use diameter)
 // 		'height':14,//height of the pin if rectangle (if circle delete this line)
	// 	'outline':'#FFF',//outline color of the pin
	// 	'thickness':1,//thickness of the line (0 to hide the line)
	//  	'upColor':'#0000FF',//color of the pin when map loads
	// 	'overColor':'#3399ff',//color of the pin when mouse hover
	// 	'downColor':'#00ffff',//color of the pin when clicked
	// 	//(trick, if you make this pin un-clickable > make the overColor and downColor the same)
	//  	'url':'#',//URL of this pin
	//  	'target':'new_window',//'new_window' opens URL in new window//'same_window' opens URL in the same window //'none' pin is not clickable
	//  	'enable':true,//true/false to enable/disable this pin
	//  },

// UTAH Salt Lake City Temple
	{
		'shape':'circle',
		'hover':'<b><u>Salt Lake City Temple</u></b><br><span style="color: yellow;"><img src="/images/SLC.jpg" alt="Salt Lake City UT Temple"></span>',
		'pos_X':163,
		'pos_Y':178,
		'diameter':3,
		'outline':'#FFF',
		'thickness':1,
		'upColor':'#FF0000',
		'overColor':'#FFEE88',
		'downColor':'#00ffff',
		'url':'https://www.google.com/maps/search/Salt+Lake+Temple+50+W+North+Temple+StSalt+Lake+City+UT++84150-9709/@40.7705943,-111.8936855,17z/data=!3m1!4b1',
		'target':'new_window',
		'enable':true,
	},

	// NEVADA Reno Temple
		{
			'shape':'circle',
			'hover':'<b><u>Reno Nevada Temple</u></b><br><span style="color: yellow;"><img src="/images" alt="Reno NV Temple"></span>',
			'pos_X':66,
			'pos_Y':172,
			'diameter':3,
			'outline':'#FFF',
			'thickness':1,
			'upColor':'#FF0000',
			'overColor':'#FFEE88',
			'downColor':'#00ffff',
			'url':'https://www.google.com/maps/place/Reno+Nevada+Temple/@39.5346442,-119.9010626,17z/data=!3m1!4b1!4m5!3m4!1s0x80994436bbb2934f:0x3fac1ba77665c6a1!8m2!3d39.5346442!4d-119.8988739',
			'target':'new_window',
			'enable':true,
		},

		// NEVADA Las Vegas Temple
			{
				'shape':'circle',
				'hover':'<b><u>Las Vegas Nevada Temple</u></b><br><span style="color: yellow;"><img src="/images/lasvegas-temple.jpg" alt="Las Vegas NV Temple"></span>',
				'pos_X':115,
				'pos_Y':235,
				'diameter':3,
				'outline':'#FFF',
				'thickness':1,
				'upColor':'#FF0000',
				'overColor':'#FFEE88',
				'downColor':'#00ffff',
				'url':'https://www.google.com/maps/place/Las+Vegas+Nevada+Temple/@36.1746273,-115.0221855,17z/data=!3m1!4b1!4m5!3m4!1s0x80c8dbf5016ecb4d:0x21f43e3941f7e1b8!8m2!3d36.1746273!4d-115.0199968',
				'target':'new_window',
				'enable':true,
			},

// MONTANA

//{
//	'shape':'circle',
//	'hover':'Butte',
//	'pos_Y':92.25,
//	'diameter':8,
//	'thickness':1,
//	'overColor':'#FFEE88',
//	'downColor':'#00ffff',
//	'url':'#',
//	'target':'same_window',
//	'enable':true,
//},

	// {
	// 	'shape':'circle',
	// 	'hover':'New York',
	// 	'pos_X':616,
	// 	'pos_Y':140,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'<b>Los Angeles</b><br><span style="color: yellow;">*Write text or load images*</span><br><span style="color: yellow;">*Link each pin to any webpage*</span>',
	// 	'pos_X':71,
	// 	'pos_Y':266,
	// 	'diameter':18,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Chicago',
	// 	'pos_X':448,
	// 	'pos_Y':156,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Houston',
	// 	'pos_X':369,
	// 	'pos_Y':353,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Phoenix',
	// 	'pos_X':142,
	// 	'pos_Y':284,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Seattle',
	// 	'pos_X':67,
	// 	'pos_Y':46,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Philadelphia',
	// 	'pos_X':605,
	// 	'pos_Y':159,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'San Antonio',
	// 	'pos_X':320,
	// 	'pos_Y':362,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'<b><u>Dallas</u></b><br><span style="color: #bcbcbc;">Street Address:</span><br>&nbsp;321 Example Road 9. County, State 54321<br><span style="color: #bcbcbc;">Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234',
	// 	'pos_X':354,
	// 	'pos_Y':314,
	// 	'diameter':18,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Indianapolis',
	// 	'pos_X':474,
	// 	'pos_Y':184,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Jacksonville',
	// 	'pos_X':554,
	// 	'pos_Y':328,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'San Francisco',
	// 	'pos_X':30,
	// 	'pos_Y':190,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Charlotte',
	// 	'pos_X':552,
	// 	'pos_Y':250,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Detroit',
	// 	'pos_X':501,
	// 	'pos_Y':145,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	// {
	// 	'shape':'circle',
	// 	'hover':'Juneau',
	// 	'pos_X':150,
	// 	'pos_Y':381,
	// 	'diameter':14,
	// 	'outline':'#FFF',
	// 	'thickness':1,
	// 	'upColor':'#FF0000',
	// 	'overColor':'#FFEE88',
	// 	'downColor':'#00ffff',
	// 	'url':'#',
	// 	'target':'same_window',
	// 	'enable':true,
	// },
	]
}
