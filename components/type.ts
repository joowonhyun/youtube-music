export interface ComponentProps {
  children: React.ReactNode;
}

interface PlayList {
  id: number;
  owner: string;
  playlistName: string;
  songList: Song[];
}

// Song 타입 정의
interface Song {
  name: string; 
  channelId: number; 
  channel: string;
  src: string;
  imageSrc: string;
}
// PlayListNav 컴포넌트의 props 타입 정의
export interface PlayListNavProps {
  playList: PlayList;
}