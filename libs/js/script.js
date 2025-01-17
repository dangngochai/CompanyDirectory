var department_list, location_list;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myHeader()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//function to get employee detail by ID
function getEmployeeDetailByID(id) {
  var employee_detail= {};
   $.ajax({
    url: "libs/php/getDetailByID.php",
    type: 'POST',
    data:{id:id},
    dataType: 'json',
    async: false,
    success: function(result) {
        employee_detail['id'] = id;
        employee_detail['firstName'] = result['data'][0]['firstName'];
        employee_detail['lastName'] = result['data'][0]['lastName'];
        employee_detail['jobTitle'] = result['data'][0]['jobTitle'];
        employee_detail['email'] = result['data'][0]['email'];
        employee_detail['departmentID'] = result['data'][0]['departmentID'];
    },
    error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
    }
  })
  return employee_detail;
};

//function to get department detail by ID
function getDepartmentDetailByID(id) {
  var department_detail= {};
   $.ajax({
    url: "libs/php/getDepartmentByID.php",
    type: 'POST',
    data:{id:id},
    dataType: 'json',
    async: false,
    success: function(result) {
        department_detail['id'] = id;
        department_detail['name'] = result['data'][0]['name'];
        department_detail['locationID'] = result['data'][0]['locationID'];
    },
    error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
    }
  })
  return department_detail;
};

//function to get location detail by ID
function getLocationDetailByID(id) {
  var location_detail= {};
   $.ajax({
    url: "libs/php/getLocationByID.php",
    type: 'POST',
    data:{id:id},
    dataType: 'json',
    async: false,
    success: function(result) {
        location_detail['id'] = id;
        location_detail['name'] = result['data'][0]['name'];
    },
    error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
    }
  })
  return location_detail;
};

//function to get employees in a department
function getEmployeesByDepartment(departmentID) {
  var employees = [];
  $.ajax({
    url: "libs/php/getAllEmployeesByDepartment.php",
    type: 'POST',
    dataType: 'json',
    data: {
      departmentID: departmentID
    },
    async: false,
    success: function(result) {
      for (i = 0; i < result['data'].length; i++) {
          employees.push(result['data'][i]['id']);
      }
                    
    },
    error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
    }
  })
  return employees;
};

//function to get employees in a location
function getEmployeesByLocation(locationID) {
  var employees = [];
  $.ajax({
    url: "libs/php/getAllEmployeesByLocation.php",
    type: 'POST',
    dataType: 'json',
    data: {
      locationID: locationID
    },
    async: false,
    success: function(result) {
      for (i = 0; i < result['data'].length; i++) {
          employees.push(result['data'][i]['id']);
      }
                    
    },
    error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
    }
  })
  return employees;
};

//function to get all the departments
function getAllDepartments() {
  var department_list = [];
      department_list['name']=[];
      department_list['id']=[];
  $.ajax({
    url: "libs/php/getAllDepartments.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    success: function(result) {
        for (i = 0; i < result['data'].length; i++) {
          if (!department_list['name'].includes(result['data'][i]['name'])) {
            department_list['name'].push(result['data'][i]['name']);
            department_list['id'].push(result['data'][i]['id']);
          }
        }
        
        department_list.sort(function(a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
    }
  });
  return department_list;
}

//function to get all the locations
function getAllLocations() {
  var location_list = [];
      location_list['name']=[];
      location_list['id']=[];

  $.ajax({
    url: "libs/php/getAllLocations.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    success: function(result) {
        for (i = 0; i < result['data'].length; i++) {
          if (!location_list['name'].includes(result['data'][i]['name'])) {
            location_list['name'].push(result['data'][i]['name']);
            location_list['id'].push(result['data'][i]['id']);
          }
        }
        
        location_list.sort(function(a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
    }
  });
  return location_list;
}

//function to get all the employees
function getAllEmployees() {
  var employee_list = [];
      employee_list['name']=[];
      employee_list['id']=[];

  $.ajax({
    url: "libs/php/getAllEmployees.php",
    type: 'POST',
    dataType: 'json',
    async: false,
    success: function(result) {
        for (i = 0; i < result['data'].length; i++) {
          if (!employee_list['id'].includes(result['data'][i]['id'])) {
            employee_list['name'].push(result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName']);
            employee_list['id'].push(result['data'][i]['id']);
          }
        }
        
        employee_list.sort(function(a, b) {
          var textA = a.name.toUpperCase();
          var textB = b.name.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
    }
  });
  return employee_list;
}



//function to trigger when click filter button
function myFunction() {
    $("#department").html('');
    $("#location").html('');
    var department_list = getAllDepartments();
    var $dropdown = $("#department");
    //add all the departments into the filter list
    for (i = 0; i < department_list['id'].length; i++) {
      $dropdown.append($('<a data-id="' + (department_list['id'][i]) + '" class="department" href="javascript:void(0)"/>').val(department_list['id'][i]).text(department_list['name'][i]));
    }                       
    var location_list = getAllLocations();
    var $dropdown = $("#location");
    //add all the locations into the filter list
    for (i = 0; i < location_list['id'].length; i++) {
      $dropdown.append($('<a data-id="' + (location_list['id'][i]) + '" class="location" href="javascript:void(0)"/>').val(location_list['id'][i]).text(location_list['name'][i]));
    }                        
 

    $('#myDropdown').toggle('show');
    $('.department').click(function(e){
    var id = $(this).data('id');
    var employeesDepartmentID = [];
    employeesDepartmentID = getEmployeesByDepartment(id);
    $('#cards li').hide();
    //show all the user cards from selected department
    for (i = 0; i < employeesDepartmentID .length; i++) {
      $('#'+ employeesDepartmentID [i] + '.usercard').show();
    }
    $('span ').hide();
    $('#myDropdown').hide();
    });

    $('.location').click(function(e){
    var id = $(this).data('id');
    var employeesLocationID = [];
    employeesLocationID = getEmployeesByLocation(id);
    $('#cards li').hide();
     //show all the user cards from selected location
    for (i = 0; i < employeesLocationID.length; i++) {
      $('#'+ employeesLocationID[i] + '.usercard').show();
    }
    $('span ').hide();
    $('#myDropdown').hide();
    });
}
  //function to auto search for department or location name from filter list
  function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  

$(document).ready(function() {
    $("#employee-record").hide();
    $("#department-record").hide();
    $("#location-record").hide();
    $.ajax({
      url: "libs/php/getAll.php",
      type: 'POST',
      dataType: 'json',
      data: {
      },
      success: function(result) {
        html='';
        var $employees = $("#employees");
        //add all the user cards 
        for (i = 0; i < result['data'].length; i++) {         
          $employees.append($("<option>").attr('data-value', result['data'][i]['id']).val(result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName']));
          if (!result['data'][i]['photo']) {
            photo = 'user.png';
          };
          html += `<li class="usercard" id="${result['data'][i]['id']}">
                      <div class="photo">
                          <img src="${photo}" alt="avatar" width="50" height="50">
                      </div>
                      <div class="card-info">
                        <small class="card-name">${result['data'][i]['firstName']} ${result['data'][i]['lastName']}</small>
                        <button class="detail-button" data-toggle="modal" data-target="#modalQuickView${i}"><i class="fa fa-info"></i></button>

                        <div class="modal fade" id="modalQuickView${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                          aria-hidden="true">
                          <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                              <div class="modal-body">
                                <div class="row">
                                  <div class="col-lg-5">
                                          <img class="d-block w-100" id="user-image"
                                            src="${photo}"
                                            alt="User Photo">
                                  </div>
                                  <div class="col-lg-7">
                                    <h2 class="h2-responsive" id="user-name">
                                      <strong>${result['data'][i]['firstName']} ${result['data'][i]['lastName']}</strong>
                                    </h2>
                                    <h4 class="text-primary">
                                        <strong>${result['data'][i]['jobTitle']}</strong>
                                        <br>
                                        ${result['data'][i]['department']}
                                    </h4>
                        
                                    <!--Accordion wrapper-->
                                    <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                        
                                      <!-- Accordion card -->
                                      <div class="card">
                        
                                        <!-- Card header -->
                                        <div class="card-header" role="tab" id="headingOne1">
                                          <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                            aria-controls="collapseOne1">
                                            <h5 class="mb-0">
                                              Personal Info<i class="fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                          </a>
                                        </div>
                        
                                        <!-- Card body -->
                                        <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                          data-parent="#accordionEx">
                                          <div class="card-body">
                                            First Name: ${result['data'][i]['firstName']} <br>
                                            Last Name: ${result['data'][i]['lastName']} <br>
                                            Email Address: ${result['data'][i]['email']} <br>
                                            Phone Number: <br>
                                            Date of Birth: <br>
                                            Address:
                                          </div>
                                        </div>
                        
                                      </div>
                                      <!-- Accordion card -->
                        
                                      <!-- Accordion card -->
                                      <div class="card">
                        
                                        <!-- Card header -->
                                        <div class="card-header" role="tab" id="headingTwo2">
                                          <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                            aria-expanded="false" aria-controls="collapseTwo2">
                                            <h5 class="mb-0">
                                              Work Info<i class="fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                          </a>
                                        </div>
                        
                                        <!-- Card body -->
                                        <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                                          data-parent="#accordionEx">
                                          <div class="card-body">
                                            Department: ${result['data'][i]['department']} <br>
                                            Report to: <br>
                                            Location: ${result['data'][i]['location']}
                                          </div>
                                        </div>
                        
                                      </div>
                                      <!-- Accordion card -->
                        
                                  
                                      <div class="text-center">
                        
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button class="btn btn-primary" value="${result['data'][i]['id']}" onClick="edit_detail(this)">Edit detail
                                          <i class="fas fa-edit ml-2" aria-hidden="true"></i>
                                        </button>
                                      </div>
                                    </div>
                                    <!-- /.Add to Cart -->
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p class="card-title" >
                          <small>
                            <strong>${result['data'][i]['jobTitle']}</strong>
                          </small>
                        </p>
                      </div>
                    </li>
                `; 
        }
        $('#cards').append(html);    
      },
      error: function(jqXHR, textStatus, errorThrown) {
        //error code
        alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

        $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
        console.log('jqXHR:');
        console.log(jqXHR);
        console.log('textStatus:');
        console.log(textStatus);
        console.log('errorThrown:');
        console.log(errorThrown);
      }
    }); 		
});

/*
//to show all the user cards when click show more
$(function () {
  $('span').click(function () {
      $('#cards li:hidden').show();
      if ($('#cards li').length == $('#cards li:visible').length) {
          $('span ').hide();
      }
  });
});*/

//function for search box to search for a user card
$('#searchBox').on('change', function (e) {
  var shownVal = document.getElementById("searchBox").value;
  var employeeID = document.querySelector("#employees option[value='"+shownVal+"']").dataset.value;
  $('#cards li').hide();
  $('#'+ employeeID + '.usercard').show();
  $('span ').hide();

});

$('#action-employee').on('change', function (e) {
  $("#employee-record").empty();
  var shownVal = document.getElementById("action-employee").value;
  var $dropdown = $("#employee-record");
  if (shownVal == "edit-employee" || shownVal == "delete-employee" ) {
    var employee_list = getAllEmployees();
    for (i = 0; i < employee_list['id'].length; i++) {
      $dropdown.append($('<option/>').val(employee_list['id'][i]).text(employee_list['name'][i]));
    }
    $dropdown.show();
  } else {
    $("#employee-record").hide();
  }
}); 

//activate correct modal when user click add new button
$('#select-employee').on('click', function (e) {
  var shownVal = document.getElementById("action-employee").value;
  var dropdownVal = $("#employee-record").val();
  if (shownVal == "add-employee") {
    $('#add-employee').modal('show');
    var employee_list = getAllEmployees();
    $('#employeeID').attr("value", employee_list['id'].length + 1);
    var department_list = getAllDepartments();
    for (i = 0; i < department_list['id'].length; i++) {
      $("#departmentID").append('<option value="' + (department_list['id'][i]) + '">' + department_list['name'][i] + '</option>');
    }  
  } else if (shownVal == "edit-employee") {
      var result = getEmployeeDetailByID(dropdownVal)
      $('#id_edit').attr("value", dropdownVal);
      $('#firstName_edit').attr("value",result['firstName']);
      $('#lastName_edit').attr("value",result['lastName']);
      $('#jobTitle_edit').attr("value",result['jobTitle']);
      $('#email_edit').attr("value",result['email']);
      var department_list = getAllDepartments();
      for (i = 0; i < department_list['id'].length; i++) {
        $("#departmentID_edit").append('<option value="' + (department_list['id'][i]) + '">' + department_list['name'][i] + '</option>');
      }   
      $("#departmentID_edit").val(result['departmentID']);
      $('#edit-employee').modal('show');
  } else if (shownVal == "delete-employee"){
      if(confirm("Are you sure you want to remove this employee?"))
        {
          $.ajax({
            url:"libs/php/deleteEmployeeByID.php",
            method:"POST",
            data:{id:dropdownVal},
            success:function(result){
              alert('Employee deleted!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
              //error code
              alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
      
              $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
              console.log('jqXHR:');
              console.log(jqXHR);
              console.log('textStatus:');
              console.log(textStatus);
              console.log('errorThrown:');
              console.log(errorThrown);
            }
          });
        } 
  }
});

$('#action-department').on('change', function (e) {
  $("#department-record").empty();
  var shownVal = document.getElementById("action-department").value;
  var $dropdown = $("#department-record");
  if (shownVal == "edit-department" || shownVal == "delete-department" ) {
    var department_list = getAllDepartments();
    for (i = 0; i < department_list['id'].length; i++) {
      $dropdown.append($('<option/>').val(department_list['id'][i]).text(department_list['name'][i]));
    }
    $dropdown.show();
  } else {
    $("#department-record").hide();
  }
}); 

$('#select-department').on('click', function (e) {
  var shownVal = document.getElementById("action-department").value;
  var dropdownVal = $("#department-record").val();
  if (shownVal == "add-department") {
    $('#add-department').modal('show');
    var location_list = getAllLocations();
    for (i = 0; i < location_list['id'].length; i++) {
      $("#locationID").append('<option value="' + (location_list['id'][i]) + '">' + location_list['name'][i] + '</option>');
    }  
   } else if (shownVal == "edit-department") {
      var result = getDepartmentDetailByID(dropdownVal)
      $('#depID_edit').attr("value", dropdownVal);
      $('#depName_edit').attr("value",result['name']);
      var location_list = getAllLocations();
      for (i = 0; i < location_list['id'].length; i++) {
        $("#locationID_edit").append('<option value="' + (location_list['id'][i]) + '">' + location_list['name'][i] + '</option>');
      }   
      $("#locationID_edit").val(result['locationID']);
      $('#edit-department').modal('show');
  } else if (shownVal == "delete-department"){
      if(confirm("Are you sure you want to remove this department?"))
        {
          $.ajax({
            url:"libs/php/deleteDepartmentByID.php",
            method:"POST",
            data:{id:dropdownVal},
            success:function(result){
              alert('Department deleted!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
              //error code
              alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
      
              $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
              console.log('jqXHR:');
              console.log(jqXHR);
              console.log('textStatus:');
              console.log(textStatus);
              console.log('errorThrown:');
              console.log(errorThrown);
            }
          });
        } 
  }
});

$('#action-location').on('change', function (e) {
  $("#location-record").empty();
  var shownVal = document.getElementById("action-location").value;
  var $dropdown = $("#location-record");
  if (shownVal == "edit-location" || shownVal == "delete-location" ) {
    var location_list = getAllLocations();
    for (i = 0; i < location_list['id'].length; i++) {
      $dropdown.append($('<option/>').val(location_list['id'][i]).text(location_list['name'][i]));
    }
    $dropdown.show();
  } else {
    $("#location-record").hide();
  }
});

$('#select-location').on('click', function (e) {
  var shownVal = document.getElementById("action-location").value;
  var dropdownVal = $("#location-record").val();
  if (shownVal == "add-location") {
    $('#add-location').modal('show');
    var location_list = getAllLocations();
    $('#locaID').attr("value", location_list['id'].length + 1);

   } else if (shownVal == "edit-location") {
      var result = getLocationDetailByID(dropdownVal)
      $('#locID_edit').attr("value", dropdownVal);
      $('#locName_edit').attr("value",result['name']);
      $('#edit-location').modal('show');
  } else if (shownVal == "delete-location"){
      if(confirm("Are you sure you want to remove this location?"))
        {
          $.ajax({
            url:"libs/php/deleteLocationByID.php",
            method:"POST",
            data:{id:dropdownVal},
            success:function(result){
              alert('Location deleted!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
              //error code
              alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
      
              $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
              console.log('jqXHR:');
              console.log(jqXHR);
              console.log('textStatus:');
              console.log(textStatus);
              console.log('errorThrown:');
              console.log(errorThrown);
            }
          });
        } 
  }
});





//show the list of records when user select from delete menu
$('#select-delete').on('change', function (e) {
  var shownVal = document.getElementById("select-delete").value;
  var $dropdown = $("#value-delete");
  $dropdown.empty();
  if (shownVal == "delete-department") {
    var department_list = getAllDepartments();
    for (i = 0; i < department_list['id'].length; i++) {
      $dropdown.append($('<option/>').val(department_list['id'][i]).text(department_list['name'][i]));
    }       
  } else if (shownVal == "delete-location") {
    var location_list = getAllLocations();
    for (i = 0; i < location_list['id'].length; i++) {
      $dropdown.append($('<option/>').val(location_list['id'][i]).text(location_list['name'][i]));
    }  
  } else if (shownVal == "delete-employee"){
    var employee_list = getAllEmployees();
    for (i = 0; i < employee_list['id'].length; i++) {
      $dropdown.append($('<option/>').val(employee_list['id'][i]).text(employee_list['name'][i]));
    }
  }
});

//when user click delete button
$('#delete-item').on('click', function (e) {
  var shownVal = document.getElementById("select-delete").value;
  var id = document.getElementById("value-delete").value;
  if (shownVal == "delete-department") {
    if(confirm("Are you sure you want to remove this department?"))
      {
        var employeesDepartment = getEmployeesByDepartment(id);
        if (employeesDepartment.length < 1) {
          $.ajax({
            url:"libs/php/deleteDepartmentByID.php",
            method:"POST",
            data:{id:id},
            success:function(data){
              alert('Department deleted!');
            },
            error: function(jqXHR, textStatus, errorThrown) {
              //error code
              alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
      
              $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
              console.log('jqXHR:');
              console.log(jqXHR);
              console.log('textStatus:');
              console.log(textStatus);
              console.log('errorThrown:');
              console.log(errorThrown);
            }
          });
        } else {
          alert('Can not delete Department with employee')
        }
      }
  } else if (shownVal == "delete-location") {
      if(confirm("Are you sure you want to remove this location?"))
        {
          var employeesLocation = getEmployeesByLocation(id);
          if (employeesLocation.length < 1) {
            $.ajax({
              url:"libs/php/deleteLocationByID.php",
              method:"POST",
              data:{id:id},
              success:function(data){
                alert('Location deleted!');
              },
              error: function(jqXHR, textStatus, errorThrown) {
                //error code
                alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
        
                $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);
              }
            });
          } else {
            alert('Can not delete Location with employee')
          }
        }
  } else if (shownVal == "delete-employee"){
      if(confirm("Are you sure you want to remove this employee?"))
      {
        $.ajax({
          url:"libs/php/deleteEmployeeByID.php",
          method:"POST",
          data:{id:id},
          success:function(result){
            alert('Employee deleted!');
          },
          error: function(jqXHR, textStatus, errorThrown) {
            //error code
            alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
    
            $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
            console.log('jqXHR:');
            console.log(jqXHR);
            console.log('textStatus:');
            console.log(textStatus);
            console.log('errorThrown:');
            console.log(errorThrown);
          }
        });
      }
    }
});


//when user click edit detail for a card
function edit_detail(obj) {
  var id = obj.value;
  var result = getEmployeeDetailByID(id)
  $('#id_edit').attr("value", id);
  $('#firstName_edit').attr("value",result['firstName']);
  $('#lastName_edit').attr("value",result['lastName']);
  $('#jobTitle_edit').attr("value",result['jobTitle']);
  $('#email_edit').attr("value",result['email']);
  var department_list = getAllDepartments();
  for (i = 0; i < department_list['id'].length; i++) {
     $("#departmentID_edit").append('<option value="' + (department_list['id'][i]) + '">' + department_list['name'][i] + '</option>');
  }   
  $("#departmentID_edit").val(result['departmentID']);
  $('#edit-employee').modal('show');

  $('#delete_edit').on('click', function (e) {
    if(confirm("Are you sure you want to remove this employee?"))
    {
      $.ajax({
        url:"libs/php/deleteEmployeeByID.php",
        method:"POST",
        data:{id:id},
        success:function(result){
          alert('Employee deleted!');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          //error code
          alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');
  
          $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
          console.log('jqXHR:');
          console.log(jqXHR);
          console.log('textStatus:');
          console.log(textStatus);
          console.log('errorThrown:');
          console.log(errorThrown);
        }
      });
    }
  });
}