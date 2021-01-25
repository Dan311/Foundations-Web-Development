let taskInput = document.getElementById("new-task"); //Add a new task.

$(function () {
    function addTask() {
		//check what task list user selected
		const selectedListName = $("#task").val();
		console.log("Task is:", selectedListName)

		//use task to create task list name ID
		const targetListId = selectedListName + "List"
		console.log(targetListId)

		//use task to create task list name
		const targetList = $(`#${selectedListName}List`)
		console.log(targetList)

		//grab text from text box
		const inputValue = $("#newTask").val()
		console.log(inputValue)

		//create html structure for lists
		const listItem = $("<li class='added'></li>").text(inputValue)
		const checkBox = $(`<input type="checkbox"></input>`)
		listItem.append(checkBox) 

		console.log(listItem)

		targetList.append(listItem)	
	}

	$("#addButton").click(function () {
		//check text box for text, if empty alert user to enter task
		if (!$("#newTask").val()) {
			console.log("No New Task Value found")
			const addButtonValue = $("#addButton").val()
			alert("Please enter a Task!")

		} else {
			console.log("New Task Value found")
			addTask() 
		}
	

	})

		$("#clearButton").click(function(){
			$('#homeList').find('*').not('h1').remove()
			$('#workList').find('*').not('h1').remove()
	})

	$('body').on("click", ".added", function(){
        $(this).remove();
    });

});


// To Do List assignment:
// Done: You must have two separate to-do lists: one for home and one for work.
// Done: You must have an input box to enter a task.
// Done: You must have a way of selecting whether the task goes into the home list or the work list.
// Done: You must have a way of actually adding the task to the chosen list (button, enter key, etc)
// In progress: If a person attempts to submit (click the button etc) without entering a task, you must display a
// message saying they must enter a task to add.
// In progress: If the person tries to do that multiple times, the message should still display only once, not
// repeatedly.
// Once a person actually enters a task again, the message should disappear.
// There must be a way to delete a task that has been added.
// There must be a way to clear all tasks that have been added.

// clicking Add button adds 
// task to div class specific of lists, Home and Work


// 1. create click Add button function
// 2. ID which list is selected
// 3. Get element for selected list
// 4. Add to selected list by creating list item (li)
// 5. Append it as a child to the ul
// //

