var color-"any"
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX -canvas.offsetLeft
    current_position_of_touch_y = e.touches[0].clientY -canvas.offsetUp
    ctx.beginPath()
    ctx.strokeStroke-color
    ctx.lineWidth-width_of_line
    ctx.moveto(last_position_of_touch_x,last_position_of_touch_y);
    ctx.lineto(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_touch_x= current_position_of_touch_x
    last_position_of_touch_y= current_position_of_touch_y
}
canvas.addEventListner
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX -canvas.offsetLeft
    current_position_of_mouse_y = e.clientY -canvas.offsetUp
 if (mouseEvent == "mouseDown")
    ctx.beginPath()
    ctx.strokeStroke-color
    ctx.lineWidth-width_of_line
    ctx.moveto(last_position_of_touch_x,last_position_of_touch_y);
    ctx.lineto(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_touch_x= current_position_of_mouse_x
    last_position_of_touch_y= current_position_of_mouse_y
}