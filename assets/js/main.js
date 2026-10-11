$(document).ready(function () {
    $(".grid").diamonds({
        size: 200,
        gap: 5,
        hideIncompleteRow: false,
        autoRedraw: true,
        itemSelector: ".item",
    });
});
