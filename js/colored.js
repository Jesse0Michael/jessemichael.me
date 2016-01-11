<script>
    function blogEnter(id) {
        var r = Math.floor((Math.random() * 55) + 200);;
        var g = Math.floor((Math.random() * 55) + 200);;
        var b = Math.floor((Math.random() * 55) + 200);;

        var rand = (r.toString(16) + g.toString(16) + b.toString(16));
        $("#box-"+id).animate({ backgroundColor: '#' + rand });

        try {
            document.getElementById(id).play();
        }
        catch (er) { }

    }

    function blogExit(id) {
        $("#box-" + id).animate({ backgroundColor: '#f8f8f8' })
        try {
            document.getElementById(id).pause();
        }
        catch (er) { }
    }


</script>
