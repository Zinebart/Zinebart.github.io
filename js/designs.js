$(document).ready(function(){

    // Select size input
    
        $('#sizePicker').submit(function() {
            return false;
        });
    
        let height = 20;
        let width = 20;
        makeGrid(height, width)
    
        $('#button_submit').click(function() {
            height = parseInt($('#input_height').val());
            width = parseInt($('#input_width').val());
            
            if (height && width) {
                makeGrid(height, width)
            }
        });
    
    // When size is submitted by the user, call makeGrid()
    
    
        $('#button_reset').on('click', function() {
            if (height && width) {
                makeGrid(height, width)
            }
        })
    
        function makeGrid(h, w) {
            $('#pixel_canvas').empty();
            for (let i = 0; i < h; i++) {
                let gridColumns = "";
                for (let j = 0; j < w; j++) {
                    gridColumns += '<td></td>';
                }
                $('#pixel_canvas').append('<tr>' + gridColumns + '</tr>');
            }
        }
    
    
    // Select color input    
    
        let color = $('#colorPicker');
    
        $(document).on("mousedown", "tr td", function () {
            let paintColor = color.val();
            $(this).css('background-color', paintColor);
            $('tr td').bind("mousemove", function () {
                let paintColor = color.val();
                $(this).css('background-color', paintColor);
            }).mouseup(function() {
                $('td').unbind('mousemove');
            });
            $('tr td').on('dblclick',function () {
                $(this).css('background-color', "#FFFFFF")
            })
        });
    });
    