export interface ComponentProps {
  children: React.ReactNode;
}

export interface PlayList {
  id: number;
  owner: string;
  playlistName: string;
  songList: Song[];
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
  prevRank:number;
  rank:number
}

// PlayListNav 컴포넌트의 props 타입 정의
export interface PlayListNavProps {
  playList: PlayList;
}

export interface PlayListCarouselProps {
  title : string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playListArray?: PlayList[];
}

export interface Channel {
  id: number;
  subscribers: number;
  name: string;
  songList: Song[];
  playlistArray: PlayList[];
}