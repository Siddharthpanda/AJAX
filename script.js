$('#search').keyup(function(){
    var searchField = $('#search').val();
    // console.log(searchField);
    var myexp = RegExp(searchField,"i");
    $.getJSON('data.json', function(data){
       //console.log(data); 
        var output = "<ul class='searchresults'>";
        $.each(data, function(key, val){
            if( ((val.color.search(myexp)) != -1) ||((val.value.search(myexp)) != -1) ) {
                output += '<li>';
                output += '<h2>' + val.color + '</h2>';
                output += '</li>';
            }
        });
        output += '</ul>';
        $('#update').html(output);
    });
});