export interface ComponentProps {
  children: React.ReactNode;
}

export interface PlayListPageProps {
  searchParams: {
    list: string;
  };
}

export interface PlayList {
  id: number;
  owner: string;
  playlistName: string;
  songList: Song[];
}

export interface PlayListProps {
  playlist: {
    playlistName: string;
    owner: string;
    songList: Song[];
  };
}

// Song 타입 정의
export interface Song {
  name: string;
  channelId: number;
  channel: string;
  src: string;
  imageSrc: string;
}

export interface TopSong extends Song {
  prevRank: number;
  rank: number;
}

// PlayListNav 컴포넌트의 props 타입 정의
export interface PlayListNavProps {
  playList: PlayList;
}

export interface BaseCarouselProps {
  title?: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
}

export interface PlayListCarouselProps extends BaseCarouselProps {
  playListArray?: PlayList[];
}

export interface SongListCarouselProps extends BaseCarouselProps {
  songListTop10: TopSong[];
}
export interface GenreListCarouselProps extends BaseCarouselProps {
  genreList: string[];
}
export interface Channel {
  id: number;
  subscribers: number;
  name: string;
  songList: Song[];
  playlistArray: PlayList[];
}

export interface SongCardProps {
  song: TopSong;
}

export interface GenrecardProps {
  genre: string;
}
export interface SongCardExpandProps {
  song: Song;
}
