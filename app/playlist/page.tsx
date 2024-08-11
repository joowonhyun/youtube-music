import { getPlaylistById } from "@/lib/dummyData";
import { PlayListPageProps } from "@/types";
import { permanentRedirect } from "next/navigation";
import { getRandomElementFromArray } from "@/lib/utils";
import PagePadding from "@/components/PagePadding";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PlayListHead from "@/components/PlayListHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";

const page = async (props: PlayListPageProps) => {
  const playlist = await getPlaylistById(Number(props.searchParams.list));
  if (!playlist) permanentRedirect("/");
  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;
  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-12"></div>
      <PlayListHead playlist={playlist} />
      <div className="mt-12"></div>
      <section className="flex flex-col gap-2">
        {playlist.songList.map((song, _) => {
          return <SongCardRowExpand song={song} key={song} />;
        })}
      </section>
    </PagePadding>
  );
};

export default page;
