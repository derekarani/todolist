// business logic of the code begins here



// User logic code begins here
 $(document).ready(function(){
  $("form#todo").submit(function(event){
    event.preventDefault();


  })
  $("button#add").click(function(){
    var inputtedtask = $("input#inputtask").val();
    $("ul#lists").append("<li>"+ inputtedtask + "        "+ "<button type='submit' id='done' class='btn btn-info'>Done</button>"+"</li>")
    $("div .list").show();
  })
})
