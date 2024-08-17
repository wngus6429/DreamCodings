{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  // ㅍvideo에 이것들이 있다면 제외한걸 만듬, 다른 어떠한 키도 가능함.
  type VideoMetadata = Omit<Video, "url" | "data" | "ㅗ">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
