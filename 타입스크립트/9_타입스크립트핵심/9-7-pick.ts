{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  // 기존 타입에서 원하는 속성과 value들만 뽑아서 만듬.
  type VideoMetadata = Pick<Video, "id" | "title">;

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
