let taskInput = document.getElementById("new-task"); //Add a new task.

$(function () {
    function addTask() {
    const selectedListName = $("#task").val();
    console.log("Task is:", selectedListName)

    const targetListId = selectedListName + "List"
    console.log(targetListId)

    const targetList = $(`#${selectedListName}List`)
    console.log(targetList)

    const inputValue = $("#newTask").val()
    console.log(inputValue)

    const listItem = $("<li></li>").text(inputValue)
    const checkBox = $(`<input type="checkbox"></input>`)
    listItem.append(checkBox) 
      
    console.log(listItem)

    targetList.append(listItem)
  }

  $('#addButton').click(addTask)

  // // let addTask = function () {
  //   console.log("Add Task...", taskInput);
  //   //Create a new list item with the text from the #new-task:
  //   var listItem = createNewTaskElement(taskInput.value);

  //   //Append listItem to incompleteTaskHolder
  //   incompleteTaskHolder.appendChild(listItem);
  //   bindTaskEvents(listItem, taskCompleted);

  //   taskInput.value = "";
  // };
});

// clicking Add button adds 
// task to div class specific of lists, Home and Work


// 1. create click Add button function
// 2. ID which list is selected
// 3. Get element for selected list
// 4. Add to selected list by creating list item (li)
// 5. Append it as a child to the ul
// //

// $(function() {
//     let colorPicker;

//     function selectCell(cell) {
//       cell.addClass('selected')
//     }

//     function deselectCell(cell) {
//       cell.removeClass('selected')
//     }

//     function toggleSelectedCell(cell) {
//       cell.hasClass('selected')
//         ? deselectCell(cell)
//         : selectCell(cell)
//     }

//     function buildCell(suit, rank) {
//       const cell = $('<td></td>').html(`${rank.character} <span class="icon">${suit.icon}</span>`)
//       cell.on('click', () => toggleSelectedCell(cell))
//       return cell
//     }
