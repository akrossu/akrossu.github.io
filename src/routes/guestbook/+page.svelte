<script>
    import Header from '$components/header.svelte';
    import Sidebar from '$components/sidebar.svelte';

    let title = "guestbook";
</script>

<svelte:head>
    <title>[ home@akross:/{title} ]</title>
</svelte:head>

<Sidebar title={title}></Sidebar>
<div class="max-w-content w-full">
    <Header title={title}></Header>

    <p>&gt thank you for visiting!! feel free to leave your mark here for others to find your site and have a nice journey :3</p>
    <h3 class="mb-4">// please be courteous and kind, comments are manually approved.</h3>

    <!-- begin wwww.htmlcommentbox.com -->
    <div id="HCB_comment_box" class="text-text">&gt loading comments...</div>
    <script type="text/javascript" id="hcb">
        if(!window.hcb_user) { hcb_user={}; }
        hcb_user.PAGE="https://akross.dev/";
        (function() {
            var s = document.createElement("script"),
            l=hcb_user.PAGE || (""+window.location).replace(/'/g,"%27"),
            h="https://www.htmlcommentbox.com";s.setAttribute("type","text/javascript");
            s.setAttribute("src", h + "/jread?page=" + encodeURIComponent(l).replace("+","%2B") + 
                "&mod=%241%24wq1rdBcg%24hkIBO3klmY8h3KTfjFGwQ." + "&opts=17558&num=10&ts=1723579112442");
            if (typeof s!="undefined") document.getElementsByTagName("head")[0].appendChild(s);})
        ();

        // onMount(() => {
        //     document.querySelector('admin-link').style.display = 'none';
        // });
    </script>
    <!-- end www.htmlcommentbox.com -->
</div>

<style>
    #HCB_comment_box {
        color: #FFFFFF;
        height: auto;
    }
</style>