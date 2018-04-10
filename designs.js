// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
//Creates the grid upon clicking the submit button
var height, width, color;

$("#sizePicker").submit(function(event) {
  event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWeight").val();
  makeGrid(height, width);
});

function makeGrid(x, y) {
  //Clear the grid when clicked on Submit
  $("tr").remove();

  for (var i = 1; i <= x; i++) {
    //Loop creates a row of cells
    $("table").append("<tr></tr>");
    for (var j = 1; j <= y; j++) {
      //Loop adds a cell after every row
      $("tr:last").append("<td></td>");
      // For every 'td', a class of 'cells' is created
      $("td").attr("class", "cells");
    }
  }

  //Add color to cell

  $("td").click(function addColor() {
    color = $("#colorPicker").val();

    if ($(this).attr("style")) {
      $(this).removeAttr("style");
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  });

  // click and drag paintbrush
  $("table").on("mousemove mouseenter mouseleave mouseover", "td", function(
    event
  ) {
    if (event.which === 1) {
      myCol = $("#colorPicker").val();
      $(this).css("background-color", myCol);
    }
  });

  function removeColor() {
    $("td").removeAttr("style");
  }

  $("#clearGrid").on("click", function() {
    removeColor();
  });
}
