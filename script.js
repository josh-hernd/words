<script>
        const initcounter = document.querySelector("#startcounter")
        const timer = document.getElementById("time")

        initcounter.addEventListener('focus', (event) => {
            focused()
        });

        function focused() {
            console.log(timer)

        }
    </script>