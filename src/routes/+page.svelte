<script>
    import Name from "./Name.svelte";
  import Photo from "./Photo.svelte";
  import Links from "./Links.svelte";
</script>

<div class="main">
    <div class="title">
        <Name />
    </div>
</div>
<div class="secondhalf">
    <div>
        <Photo />
    </div>
    <div class="lnks">
        <Links />
    </div>
</div>

<style>
.main {
    display: flex;
}
.title {
    padding-left: 20px;
    margin-top: 10px;
}

.secondhalf {
    padding-left: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
}

.lnks {
    padding-left: 15px;
    margin-top: -30px;
    margin-left: auto;
}
</style>