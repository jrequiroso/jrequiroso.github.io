trimSpaces = function ( array ) {
    array.map( function(string) {
        string.trim();
    })

    return array;
}

durnstenfeldShuffle = function ( array ) {

    for (var i = array.length - 1; i >= 0; i--) {
        
        var j = Math.floor( Math.random() * ( i + 1) );

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

badShuffle = function ( array ) {
    array.sort(function () {
        return .5 - Math.random();
    });

    return array;
}

createArrayOfArrays = function ( number_of_arrays ) {
    var array = [];
    for (var i = 0; i < number_of_arrays; i++) {
        var sub_array = [];
        array.push(sub_array);
    }
    return array;
}

$('#create-groups').click( function() {
    var name_list = $('#names').val().trim();
    var groups_to_create = $('#groups').val();
    var name_list_array = trimSpaces( name_list.split('\n') );

    // Make sure that the number of groups we're going to make is
    // less than or equal to the number of objects we are grouping.
    if (groups_to_create > name_list_array.length) {
        alert('Number of groups ('+ groups_to_create +') should be less than or equal to the number of objects ('+ shuffled_names.length +') to group.');
        return;
    }

    var shuffled_names = durnstenfeldShuffle( name_list_array );
    var final_groups = createArrayOfArrays(groups_to_create);
    var current_group_number = 0;

    do {
        if ( groups_to_create == (current_group_number) ) 
            current_group_number = 0;

        var popped = shuffled_names.pop();

        final_groups[current_group_number].push(popped);

        // Optional, you don't need to shuffle each time.
        // shuffled_names = durnstenfeldShuffle( shuffled_names );

        current_group_number++;
    } while ( shuffled_names.length > 0 );
    
    $('#groupings-output').html('');
    
    // Reversing the array for aesthetics (longer groups at the bottom)
    // because Bootstrap breaks when there are unequal length panels
    final_groups.reverse();

    final_groups.forEach(function (group, group_index){
        var names_string = '';
        // names_string = group.join('<br>')

        group.forEach(function (person) {
            person = person.split(':');
            var name = person[0];
            var color = person[1]; 
            var color_string = '';

            if (color != null) {
                console.log(color);
                color_string = 'style="background-color: #'+ color +'"';
            }

            if (name != null) {
                names_string += '<span '+ color_string +'>' + name + '</span> <br>';
            }
        });

        $('#groupings-output').append(
                '<div class="col-sm-3 group-panel-container">' +
                    '<div class="panel panel-primary">' +
                        '<div class="panel-heading text-center"><strong>Group '+ (group_index + 1) +' ( ' + group.length + ' members )</strong></div>' +
                        '<div class="panel-body">' +
                            names_string +
                        '</div>' +
                    '</div>' +
                '</div>'
            );
    });
});    