import React, { useRef } from 'react';
import * as MusicPlayerApi from '../../../../services/MusicPlayerApi';
import translate from '../../../../utils/translations/Translations';
import PageContent from '../../../Common/PageContent/PageContent';
import PageTitle from '../../../Common/PageTitle/PageTitle';
import TracksList from '../../../Common/Tracks/TracksList/TracksList';
import { IPlayTrackParams } from '../../../Common/Tracks/TracksList/TracksListItem';

async function load(params: MusicKit.QueryParameters) {
  const music = MusicKit.getInstance();

  return ((await music.api.library.songs(null, params)) as unknown) as MusicKit.MediaItem[];
}

function playTrack({ tracks, index }: IPlayTrackParams) {
  MusicPlayerApi.playTrack(tracks, index);
}

const SongsPage: React.FC = () => {
  const scrollRef = useRef<HTMLElement>(null);

  return (
    <PageContent innerRef={scrollRef}>
      <PageTitle title={translate.songs} context={translate.myLibrary} />

      <TracksList
        load={load}
        scrollElement={scrollRef}
        showAlbum
        showArtist
        playTrack={playTrack}
      />
    </PageContent>
  );
};

export default SongsPage;