<template>
  <div id="app">
    <Header/>
    <VideoFrame/>
    <ContentFrame/>
  </div>
</template>

<script>
import Header from "./components/Header";
import VideoFrame from "./components/VideoFrame";
import ContentFrame from "./components/ContentFrame";

export default {
  name: 'app',
  components: {
    Header,
    VideoFrame,
    ContentFrame
  }
}
</script>
