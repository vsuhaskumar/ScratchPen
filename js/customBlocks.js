/**
 * Created by kaustubhmungale on 28/10/17.
 */

var tools = {};

var toolbox = '<xml>';
toolbox += '  <category name="Logic" colour="210">';
toolbox += '    <block type="controls_if"></block>';
toolbox += '    <block type="controls_ifelse"></block>';
toolbox += '    <block type="logic_compare"></block>';
toolbox += '    <block type="logic_operation"></block>';
toolbox += '    <block type="logic_negate"></block>';
toolbox += '    <block type="logic_null"></block>';
toolbox += '    <block type="logic_ternary"></block>';
toolbox += '    <block type="logic_boolean"></block>';
toolbox += '    <block type="controls_if_if"></block>';
toolbox += '    <block type="controls_if_elseif"></block>';
toolbox += '    <block type="controls_if_else"></block>';
toolbox += '  </category>';
toolbox += '  <category name="Loops" colour="120">';
toolbox += '    <block type="controls_repeat_ext"></block>';
toolbox += '    <block type="controls_repeat"></block>';
toolbox += '    <block type="controls_whileUntil"></block>';
toolbox += '    <block type="controls_for"></block>';
toolbox += '    <block type="controls_forEach"></block>';
toolbox += '    <block type="controls_flow_statements"></block>';
toolbox += '  </category>';
toolbox += '  <category name="Math" colour="230">';
toolbox += '    <block type="math_number"></block>';
toolbox += '    <block type="math_arithmetic"></block>';
toolbox += '    <block type="math_single"></block>';
toolbox += '    <block type="math_trig"></block>';
toolbox += '    <block type="math_constant"></block>';
toolbox += '    <block type="math_number_property"></block>';
toolbox += '    <block type="math_change"></block>';
toolbox += '    <block type="math_round"></block>';
toolbox += '    <block type="math_on_list"></block>';
toolbox += '    <block type="math_modulo"></block>';
toolbox += '    <block type="math_constrain"></block>';
toolbox += '    <block type="math_random_int"></block>';
toolbox += '    <block type="math_random_float"></block>';
toolbox += '  </category>';
toolbox += '  <category name="Colour" colour="20">';
toolbox += '    <block type="colour_picker"></block>';
toolbox += '    <block type="colour_random"></block>';
toolbox += '    <block type="colour_rgb"></block>';
toolbox += '    <block type="colour_blend"></block>';
toolbox += '  </category>';
toolbox += '  <category name="Text" colour="400">';
toolbox += '    <block type="text"></block>';
toolbox += '    <block type="text_join"></block>';
toolbox += '    <block type="text_create_join_container"></block>';
toolbox += '    <block type="text_create_join_item"></block>';
toolbox += '    <block type="text_append"></block>';
toolbox += '    <block type="text_length"></block>';
toolbox += '    <block type="text_isEmpty"></block>';
toolbox += '    <block type="text_indexOf"></block>';
toolbox += '    <block type="text_charAt"></block>';
toolbox += '  </category>';
toolbox += '  <category name="Lists" colour="360">';
toolbox += '    <block type="lists_create_empty"></block>';
toolbox += '    <block type="lists_repeat"></block>';
toolbox += '    <block type="lists_reverse"></block>';
toolbox += '    <block type="lists_isEmpty"></block>';
toolbox += '    <block type="lists_length"></block>';
toolbox += '  </category>';
toolbox += '  <category name="Variables" colour="330" custom="VARIABLE"></category>';
toolbox += '  <category name="Functions" colour="290" custom="PROCEDURE"></category>';
toolbox += '<category name="Motion" colour="360">';
toolbox += '  <block type="move_to_right"></block>';
toolbox += '  <block type="move_to_left"></block>';
toolbox += '  <block type="move_up"></block>';
toolbox += '  <block type="move_down"></block>';
toolbox += '  <block type="turn_clockwise"></block>';
toolbox += '  <block type="turn_anticlockwise"></block>';
toolbox += '</category>';
/*toolbox += '  <block type="controls_if"></block>';
       toolbox += '  <block type="controls_whileUntil"></block>';*/
toolbox += '</xml>';


var animTools = '<xml>';
animTools += '<category name="Motion" colour="360">';
animTools += '  <block type="move_to_right"></block>';
animTools += '  <block type="turn_clockwise"></block>';
animTools += '</category>';
animTools += '</xml>';


tools['toolbox'] = toolbox;
tools['animTools'] = animTools;

