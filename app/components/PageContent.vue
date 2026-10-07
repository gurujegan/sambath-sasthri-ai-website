<template>
<div class="pagecontent">
  <div class="w-10/12 mt-36 mb-28 relative">
    <slot>This is the default content if nothing gets specified to go here</slot>
  </div>
  </div>
</template>

<style>
.pagecontent {
  display: flex;
  flex-direction: column;
  align-items: center;
    position: absolute;
    margin:auto;
    width:100%
}

.item {
  height: auto;
  margin-bottom: 2rem;
}
</style>
