$("#add_user").submit(function(event){
    alert("data inserted successfully")
})

//update data
$("#update_user").submit(function(event) {
    event.preventDefault(); // Corrected syntax: semicolon instead of a colon

    var unindexed_array = $(this).serializeArray();
    console.log(unindexed_array);
    var data = {};
    
    $.map(unindexed_array, function(n, i) { // Changed 'S.map' to '$.map', corrected function arguments
        data[n['name']] = n['value'];
    });

    console.log(data);

    var request = {
        "url": "http://localhost:3000/api/users/" + data.id , // Concatenated data.id correctly
        "method": "PUT",
        "data": data
    };

    $.ajax(request).done(function(response) { // Corrected 'S.ajax' to '$.ajax', added missing curly braces
        alert("Data Updated Successfully!");
    });
   
});

//delete data
if (window.location.pathname === "/") {
    var $onDelete = $(".table tbody td a.delete"); // Corrected variable name
    $onDelete.click(function() {
        var id = $(this).attr("data-id");
        var request = {
            "url": "http://localhost:3000/api/users/" + id, // Concatenated id correctly
            "method": "DELETE"
        };
        if (confirm("Do you really want to delete this record?")) {
            $.ajax(request).done(function(response) {
                alert("Data Deleted Successfully!");
                location.reload(); // Corrected syntax for location reload
            });
        }
    });
}

