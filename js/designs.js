// References used:
    // *jQuery API: https://api.jquery.com/
    // *jQuery Event Methods: https://www.w3schools.com/Jquery/jquery_ref_events.asp
    // *jQuery HTML / CSS Methods: https://www.w3schools.com/Jquery/jquery_ref_html.asp

$(document).ready(function(){
    // Set the default height and width and make the initial grid
    let height = 20;
    let width = 20;
    makeGrid();

    // Bind a click event on the form submit button
    $('#button_submit').click(function(event) {
        // Prevent form submission to stop page refresh
        event.preventDefault();
        // Grab the height and width input values
        height = $('#input_height').val();
        width = $('#input_width').val();
        // Check if the input values are in the right ranges
        // then proceed to make the grid
        if ((height > 0 && height <= 60)
            && (width > 0 && width <= 80)) {
            makeGrid();
        }
    });

    // Bind a click event on the Clear button
    $('#button_reset').on('click', function() {
        // Reset the color of all grid cells
        $('td').css('background-color', "white");
    });

    // Define makeGrid() function that creates grid cells
    function makeGrid() {
        // Empty the canvas
        $('#pixel_canvas').empty();
        // Canvas Constructor Loops
        // Outer loop to create grid rows based on height
        for (let i = 0; i < height; i++) {
            let gridColumns = "";
            // Inner loop to create grid cells based on width
            for (let j = 0; j < width; j++) {
                gridColumns += '<td></td>';
            }
            // Add new row to the grid at the end of each outer loop
            $('#pixel_canvas').append('<tr>' + gridColumns + '</tr>');
        }
    }

    $('#pixel_canvas').on("mousedown", "tr td", function () {
        // Grab the selected color
        let paintColor = $('#colorPicker').val();
        // Fill cell with the color input
        $(this).css('background-color', paintColor);
        // Fill other cells on mouse over while mouse button is clicked
        // and stop when it's not
        $('tr td').bind("mousemove", function () {
            $(this).css('background-color', paintColor);
        }).mouseup(function() {
            $('td').unbind('mousemove');
        });
    });

    // Removes color from cell upon double-click
    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "white");
    });
});  