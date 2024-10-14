<script>
    import Name from "./Name.svelte";
  import Photo from "./Photo.svelte";
</script>

<div class="main">
    <div class="title">
        <Name />
    </div>
</div>
<div class="secondhalf">
   <Photo />
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
}
</style>