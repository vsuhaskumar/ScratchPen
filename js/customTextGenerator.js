/**
 * Created by kaustubhmungale on 03/12/17.
 */

Blockly.JavaScript['move_to_right'] = function(block) {
    // Search the text for a substring.
    var movBy = block.getFieldValue('FIELDNAME');
    var input = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.turn_clockwise);
    var text = "!move object to right by ";
    var code = text + movBy + " px" + "\n";
    return code;
};

Blockly.JavaScript['move_to_left'] = function(block) {
    // Search the text for a substring.
    var movBy = block.getFieldValue('FIELDNAME');
    var input = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.turn_clockwise);
    var text = "!move object to left by ";
    var code = text + movBy + " px" + "\n";
    return code;
};

Blockly.JavaScript['move_up'] = function(block) {
    // Search the text for a substring.
    var movBy = block.getFieldValue('FIELDNAME');
    var input = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.turn_clockwise);
    var text = "!move object up by ";
    var code = text + movBy + " px" + "\n";
    return code;
};

Blockly.JavaScript['move_down'] = function(block) {
    // Search the text for a substring.
    var movBy = block.getFieldValue('FIELDNAME');
    var input = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.turn_clockwise);
    var text = "!move object down by ";
    var code = text + movBy + " px" + "\n";
    return code;
};

Blockly.JavaScript['turn_clockwise'] = function(block) {
    // Search the text for a substring.
    var degRot = block.getFieldValue('FIELDNAME');
    var input = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.move_to_right);
    var text = "!rotate object clockwise by "; //! at beginning allows to identify that this is animation
    var code = text + degRot + " degrees" + "\n";
    return code;
};

Blockly.JavaScript['turn_anticlockwise'] = function(block) {
    // Search the text for a substring.
    var degRot = block.getFieldValue('FIELDNAME');
    var input = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.move_to_right);
    var text = "!rotate object anti-clockwise by "; //! at beginning allows to identify that this is animation
    var code = text + degRot + " degrees" + "\n";
    return code;
};