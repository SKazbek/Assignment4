$(document).ready(function() {
    $("#submitBtn").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var suggestion = $("#suggestion").val();

        alert("Name: " + name + "\nEmail: " + email + "\nSuggestion: " + suggestion);
    });
});