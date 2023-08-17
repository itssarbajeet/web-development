document.addEventListener("DOMContentLoaded", function() {
    var counterElement = document.getElementById("counter");
    var count = 0;

    function updateCounter() {
        counterElement.textContent = count;
    }

    function increaseCount() {
        count++;
        updateCounter();
    }

    function resetCount() {
        count = 0;
        updateCounter();
    }

    function decreaseCount() {
        count--;
        updateCounter();
    }

    document.getElementById("increaseBtn").addEventListener("click", increaseCount);
    document.getElementById("resetBtn").addEventListener("click", resetCount);
    document.getElementById("decreaseBtn").addEventListener("click", decreaseCount);
});
