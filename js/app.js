document.addEventListener("DOMContentLoaded", function() {
  var submitButton = document.querySelector("#addTaskButton");
  var input = document.querySelector("input");
  var withCounter=document.createElement('div');
  var counter=0;
  withCounter.innerHTML="My tasks: "+counter;
  var body = document.querySelector(".container");
  body.insertBefore(withCounter, input);

  submitButton.addEventListener('click', function (e) {
      text = input.value;
      var taskList = document.querySelector("#taskList");
      if (text.length > 5 && text.length < 100) {
        //add new task
        counter++;
        withCounter.innerHTML="Task to do: "+counter;
        var newTask=document.createElement('li');
        var tempLi=taskList.appendChild(newTask);
        var newH1 = document.createElement("h1");
        newH1.innerHTML = text;
        input.value = " ";
        var textH1=tempLi.appendChild(newH1);
        var btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Delete";
        var buttonDelete=tempLi.appendChild(btnDelete);
        var btnComplete = document.createElement("button");
        btnComplete.innerHTML = "Complete";
        var buttonComplete=tempLi.appendChild(btnComplete);
        var buttonComplete=tempLi.appendChild(btnComplete);
        buttonComplete.addEventListener("click", function() {
            textH1.classList.toggle("complete");
        });

        // delete one task
        buttonDelete.addEventListener("click", function() {
          counter--;
          withCounter.innerHTML="Task to do: "+counter;
          newTask.parentNode.removeChild(newTask);
        });
        // Remove finished tasks
        var btnRemoveFinishedTasks = document.querySelector("#removeFinishedTasksButton");
            btnRemoveFinishedTasks.addEventListener("click", function() {
              for(var i=0;i<counter;i++){
                if(textH1.classList == "complete"){
                 newTask.parentNode.removeChild(newTask);
                 counter--;
                 withCounter.innerHTML="Task to do: "+counter;
               }
             }
           });

      } else{
        alert('Your task is too short. It should has min 6 letters but less than 100.');
      }
    });

    submitButton.addEventListener('mouseover',function(){
      this.style.opacity = '0.8';
    });
    submitButton.addEventListener('mouseout',function(){
      this.style.opacity = '1';
    });

});
