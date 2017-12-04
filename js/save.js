/**
 * Created by kaustubhmungale on 20/11/17.
 */
var saveObj = {};
saveObj["blockToXml"] = function blockToXml(XMLFormat, projectType) {
            var workSpace = saveObj.globarVar.workspace;
	        if (projectType === 'animation') {
                workSpace = saveObj.globarVar.animWorkSpace;
            }
            var xml = Blockly.Xml.workspaceToDom(workSpace);
            var xml_text = Blockly.Xml.domToText(xml);
            console.log(xml_text);
            if (XMLFormat) {
                return xml_text;
            }
            else {
                var json_obj =  xmlToJson(xml);
			    var json_text = JSON.stringify(json_obj);
			    console.log(json_text);
			    return json_text;
            }
        };

saveObj["xmlToJson"] = function xmlToJson(xml) {
			var obj = {};
			if (xml.nodeType == 1) {
				if (xml.attributes.length > 0) {
					obj["@attributes"] = {};
					for (var j = 0; j < xml.attributes.length; j++) {
						var attribute = xml.attributes.item(j);
						obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
					}
				}
			}
			else if (xml.nodeType == 3) {
				obj = xml.nodeValue;
			}

			if (xml.hasChildNodes()) {
				for(var i = 0; i < xml.childNodes.length; i++) {
					var item = xml.childNodes.item(i);
					var nodeName = item.nodeName;
					if (typeof(obj[nodeName]) == "undefined") {
						obj[nodeName] = xmlToJson(item);
					}
					else {
						if (typeof(obj[nodeName].push) == "undefined") {
							var old = obj[nodeName];
							obj[nodeName] = [];
							obj[nodeName].push(old);
						}
						obj[nodeName].push(xmlToJson(item));
					}
				}
			}
			return obj;
		};