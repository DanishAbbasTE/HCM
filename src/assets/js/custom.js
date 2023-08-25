$(document).ready(function(){
  $('.g_l_Active').click(function(){
    if(!$(this).hasClass('active')){
     $('.g_l_Active').removeClass('active');
    }
    $(this).addClass('active');
  });
});
function gridActive(){
  $('.grid__view__col').removeClass('d-none');
  $('.list__view__col').addClass('d-none');
}
function listActive(){
  $('.grid__view__col').addClass('d-none');
  $('.list__view__col').removeClass('d-none');
}

$(document).ready(function(){
  $('.showAll').click(function(){
     $('.gri_list_dBoxes').removeClass('d-none');
     $('.sideTabs').removeClass('active');
     $(this).addClass('active');
  });
  $('.showOnliAmin').click(function(){
     $('.gri_list_dBoxes').addClass('d-none');
     $('.admin').removeClass('d-none');
     $('.sideTabs').removeClass('active');
     $(this).addClass('active');
  });
  $('.showOnliHR').click(function(){
     $('.gri_list_dBoxes').addClass('d-none');
     $('.hrmanager').removeClass('d-none');
     $('.sideTabs').removeClass('active');
     $(this).addClass('active');
  });
});


