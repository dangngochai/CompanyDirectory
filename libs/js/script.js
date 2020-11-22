var department_list, location_list;

function myFunction() {
    $("#department").html('');
    $("#location").html('');
    $.ajax({
      url: "libs/php/getAllDepartments.php",
      type: 'POST',
      dataType: 'json',
      async: false,
      success: function(result) {
          department_list=[];
          console.log(result['data'][0]['id']);
          for (i = 0; i < result['data'].length; i++) {
            if (!department_list.includes(result['data'][i]['name'])) {
              department_list.push(result['data'][i]['name']);
            }
          }
          department_list.sort((a, b) => a.localeCompare(b));
          var $dropdown = $("#department");
          for (i = 0; i < department_list.length; i++) {
              $dropdown.append($("<a />").val(department_list[i]).text(department_list[i]));
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
    });

    $.ajax({
      url: "libs/php/getAllLocations.php",
      type: 'POST',
      dataType: 'json',
      async: false,
      success: function(result) {
          location_list=[];
          console.log(result['data'][0]['id']);
          for (i = 0; i < result['data'].length; i++) {
            if (!location_list.includes(result['data'][i]['name'])) {
              location_list.push(result['data'][i]['name']);
            }
          }
          location_list.sort((a, b) => a.localeCompare(b));
          var $dropdown = $("#location");
          for (i = 0; i < location_list.length; i++) {
              $dropdown.append($("<a />").val(location_list[i]).text(location_list[i]));
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
    });

    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    var input, filter, ul, li, a, i;
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
    $.ajax({
      url: "libs/php/getAll.php",
      type: 'POST',
      dataType: 'json',
      data: {
      },
      success: function(result) {
        html='';
        for (i = 0; i < result['data'].length; i++) {
          if (!result['data'][i]['photo']) {
            photo = 'user.png';
          };
          html += `<li class="usercard">
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
                                        <button class="btn btn-primary">Edit detail
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
                            <strong>${result['data'][i]['department']}</strong>
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
    
   /* $('#searchBox').autocomplete({
        source:$.map(country_list, function (value) {
                 return {
                     label: value.name,
                     value: value.code
                 }
             }),
         
        minLength:0,
        delay:0,
        position:{
        collision:"fit",
        },
        select:handleSearchSubmit
    })
    //to get data for the country selected by searchBox
    function handleSearchSubmit(event, ui) {
        $('#searchBox').val(ui.item.label);
        selectedCountry = (ui.item.value).toString();
        getData(selectedCountry);
        
        return false;
    }*/


});

$(function () {
  $('span').click(function () {
      $('#cards li:hidden').show();
      if ($('#cards li').length == $('#cards li:visible').length) {
          $('span ').hide();
      }
  });
});

  
/*$('#select-change').addEventListener('change', function onSelect(e) {
  confirmvalue= $('#select-change').value;
});
$('#select-dialog').addEventListener('close', function onClose() {
  if (confirmvalue == "add-employee") {
    $('#employee-dialog').dialog();
  }
});*/