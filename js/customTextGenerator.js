/**
 * Created by kaustubhmungale on 03/12/17.
 */

Blockly.JavaScript['move_to_right'] = function(block) {
    // Search the text for a substring.
    var movBy = block.getFieldValue('FIELDNAME');
    var input = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.turn_clockwise);
    var text = "move object to right by ";
    var code = "\n" + text + movBy + " px";
    return code;
};

Blockly.JavaScript['turn_clockwise'] = function(block) {
    // Search the text for a substring.
    var degRot = block.getFieldValue('FIELDNAME');
    var input = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.move_to_right);
    var text = "rotate object clockwise by ";
    var code = "\n" + text + degRot + " degrees";
    return code;
};