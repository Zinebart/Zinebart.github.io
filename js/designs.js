    /*---------------
    References used:
        - jQuery API: https://api.jquery.com/
        - JavaScript Math Reference: https://www.w3schools.com/jsref/jsref_obj_math.asp
        - jQuery Event Methods: https://www.w3schools.com/Jquery/jquery_ref_events.asp
        - jQuery HTML / CSS Methods: https://www.w3schools.com/Jquery/jquery_ref_html.asp
    ----------------*/    

    $(document).ready(function(){
        // Calculate max grid width from current window width
        // and recalculate on window resize
        let max_width;
        $(window).resize(function() {
            let width_percent = 0.8;
            let window_width = $(this).width();
            if (window_width <= 680) {
                width_percent = 1;
            }
            max_width = Math.floor(window_width * width_percent / 13);
            $('#input_width').attr({'max': max_width});
        });
        $(window).resize();
    
        // Set the default height and width and make the initial grid
        let height = 25;
        let width = Math.floor(max_width / 1.25);
        makeGrid();
    
        // Prevent form submission to stop page refresh
        $('#sizePicker').submit(function() {
            return false;
        });
    
        // Bind a click event on the form submit button
        $('#button_submit').click(function() {
            // Grab the height and width input values
            height = $('#input_height').val();
            width = $('#input_width').val();
            // Check if the input values are in the right ranges
            // then proceed to make the grid
            if (height > 0 && width > 0 && width <= max_width) {
                makeGrid();
            }
        });
    
        // Bind a click event on the Clear button
        $('#button_clear').on('click', function() {
            // Clear the color of all grid cells
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