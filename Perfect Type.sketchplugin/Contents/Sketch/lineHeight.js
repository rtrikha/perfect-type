const  lineHeightRoot  = require('./constants');

var onRun = function (context) {
	var layersArray = [];

	if (context.selection.count() > 0) {
		for (var i = 0; i < context.selection.count(); i++) {
			var multipleSelect = context.selection[i];

			if (multipleSelect.className() == 'MSTextLayer') {
				layersArray.push(multipleSelect);
			}
		}

		if (layersArray.length > 0) {
			for (var j = 0; j < layersArray.length; j++) {
                var typeArray = layersArray[j];
                
				var fontSize = typeArray.fontSize();
				var lineHeight = Math.round(fontSize * lineHeightRoot.lineHeight());
				var textHeight = typeArray.frame().height();
				
				
				if(textHeight>=lineHeight){
					typeArray.setLineHeight(lineHeight);
				}
				else{
					context.document.showMessage("Err! Not a good idea on single line string");
				}
			}
		} else {
			context.document.showMessage('Action can only be performed on a layer');
		}
	} else {
		context.document.showMessage('Action can only be performed on a layer');
	}
};
