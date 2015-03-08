(function() {
	'use strict';

	angular.module('playground.service', [])

	.factory( 'PlaygroundService', function() {
		/* Defaults for initialisation as this is currently root widget
		This will either come from data storage or from default settings (as now)
		*/
		/*jshint multistr: true */
		this.letterOfApplication = 'Recipient\'s name\n\
Recipient\'s title\n\
Recipient\'s company\n\
Recipient\'s company address\n\
\n\
Recipient\'s Name:\n\
\n\
People read business letters quickly. Therefore, get to the point in the first paragraph--the first sentence, if possible. In other words, state what you want up front.\n\
\n\
Single space your letters and use a serif typeface. Skip a line between paragraphs. Because people read business letters quickly, use shorter sentences and paragraphs than you would in a longer document. Sentences should average fewer than twenty words, and paragraphs should average fewer than seven lines.\n\
\n\
Space your letter on the page so that it does not crowd the top. However, if possible, keep your letter to one page. Second pages often are not read. Send copies to anyone whose name you mention in the letter or who would be directly affected by the letter.\n\
\n\
Final paragraphs should tell readers what you want them to do or what you will do for them.\n\
\n\
Best wishes,\n\
\n\
{your name}\n\
\n\
Enclosure\n';

		this.salesOffer = 'Recipient\'s name\n\
Recipient\'s title\n\
Salg';


		this.letterOfApplicationReplacements = [
			{
				enabled: true,
				from: 'Recipient\'s name',
				to: 'Woo'
			}, {
				enabled: true,
				from: 'Recipient\'s title',
				to: 'Overwoo'
			}, {
				enabled: false,
				from: 'Best',
				to: 'The best, the best, the best, the best, the best, the best'
			}, {
				enabled: false,
				from: '{your name}',
				to: 'W'
			}
		];


		this.salesOfferReplacements = [
			{
				enabled: true,
				from: 'Recipient\'s name',
				to: 'Hr'
			}, {
				enabled: true,
				from: 'Recipient\'s title',
				to: 'Overlord'
			}
		];

		var contents = [
			{
				paper: {
					rawText: this.letterOfApplication
				},
				transformation: {
					replacements: this.letterOfApplicationReplacements,
					highlight: ''
				},
				candidate: {
					current: {
						from: '',
						to: ''
					}
				}
			}, {
				paper: {
					rawText: this.salesOffer
				},
				transformation: {
					replacements: this.salesOfferReplacements,
					highlight: ''
				},
				candidate: {
					current: {
						from: '',
						to: ''
					}
				}
			}, {

			}
		];




		// TODO when laying out, use whether area or <other container name> is set
		// So an area is always something flowing, a cell might be fixed in a grid,
		// a dock might be attached to a side

		var woos = [
			{
				areas: [
					{
						woo: 'Paper',
						layout: {
							style: {
								left: 740,
								top: 15,
								width: 800,
								height: 575
							}
						}
					}, {
						woo: 'Transformation',
						layout: {
							style: {
								left: 300,
								top: 15,
								width: 390,
								height: 270
							}
						}
					}
				],
				docks: [], // TODO add docks and cells
				cells: []
			},
			{
				areas: [
					{
						woo: 'Paper',
						layout: {
							style: {
								left: 270, // FIXME offsets not working between files
								top: 15,
								width: 200,
								height: 575
							}
						}
					},
					{
						woo: 'Transformation',
						layout: {
							style: {
								left: 1075,
								top: 15,
								width: 200,
								height: 290
							}
						}
					}
				]
			},
			{
				cells: []
			}
		];

		var files = [
			{
				name: 'Letter of application',
				type: 'paper',
				woo: woos[0],
				payload: contents[0]
			},
			{
				name: 'Sales offer',
				type: 'paper',
				woo: woos[1],
				payload: contents[1]
			},
			{
				name: 'Pythagoras',
				type: 'logic',
				woo: woos[2],
				payload: contents[2]
			}
			// ,
			// {
			// 	name: 'F4',
			// 	type: 'tabs',
			// 	woo: woos[2],
			// 	payload: contents[2]
			// }
		];


		var playground = {
			browser: {
				layout: {
					style: {
						left: 40,
						top: 15
					}
				},
				files: files,
				currentFile: files[0]
			}
		};

		return playground;

	})
	;

}());
