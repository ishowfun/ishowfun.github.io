const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,    
    audio: [
      {
        name: "freedom",
        artist: 'Anthony Hamilton/Elayna Boynton',
        url: 'https://tencii.com/项目管理/禅道社区版git集成/freedom.mp3',
        cover: 'https://tencii.com/images/likeqin.jpg',
      },
      {
        name: '月半小夜曲',
        artist: '李克勤',
        url: 'https://tencii.com/项目管理/禅道社区版git集成/月半小夜曲.mp3',
        cover: 'https://tencii.com/images/likeqin.jpg',
      }
    ]
});
