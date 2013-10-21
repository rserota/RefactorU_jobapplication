$(function(){
    $('#application-form').on('submit', function(event){
        event.preventDefault()
        $.post('/applicant', $('#application-form').serialize(), function(data){
            if(data['success']==='success!'){
                $('#success-message').removeClass('hidden')
            }
        })
    })
});