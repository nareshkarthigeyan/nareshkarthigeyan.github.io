<script>
    let title = "Check me out on: ";
    let instagram = "https://www.instagram.com/nareshkarthigeyan/";
    let github = "https://github.com/nareshkarthigeyan";
    let linkedin = "";
    let x = "";
</script>

<div class="main">
    <div class="ttle">
        {title}
    </div>
    <div class="links">
        <a href="{instagram}">instagram</a>
        <a href="{github}">github</a>
        <a href="{linkedin}">linkedin</a>
        <a href="{x}">x</a>
    </div>
</div>

<style>
    .main{
        font-family: 'Times New Roman', Times, serif;
        color: #A8FF07;
        font-style: bold;
        font-style: italic;
    }
    .ttle {
        font-size: 50px;
    }

    a:link, a:visited {
        color: #A8FF07;
        font-style: italic;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
        color: #84cb00
    }

    .links {
        display: flex;
        flex-direction: column;
        font-size: 30px;
        text-align: right;
        padding-right: 10px;
    }
</style>