'use client'

import style from './sessions.module.css';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function Sessions() {
    const [loading, setLoading] = useState<boolean>(true);
    const [sessions, setSessions] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [selectedTracks, setSelectedTracks] = useState<string[]>([]);

    useEffect(() => {
        console.log('useEffet::selectedTracks=', selectedTracks);

        if (loading) {
            const url = "https://raw.githubusercontent.com/adhithiravi/consuming-graphql-apollo/master/api/data/sessions.json"
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setSessions(data.sessions)
                    const allTracks = data.sessions.map((session: any) => session.track)
                        .filter((value: any, index: any, self: any) => self.indexOf(value) === index);
                    setTracks(allTracks);

                    setLoading(false);
                });
        }
    });

    const renderingTime = new Date();

    const toogleSelectedTrack = (trackName: string) => {
        let st = [...selectedTracks];
        let item = st.find((track) => track === trackName);

        if (item) {
            // if track already in the list, remove the track
            setSelectedTracks(st.filter((track) => track !== trackName));
        } else {
            // if not, add the track
            st.push(trackName);
            setSelectedTracks(st);
        }
    }

    return (
        <>
            {loading && <h1>Loading the sessions...</h1>}
            {!loading && (
                <>
                    <h1>Find your favourite sessions among all {sessions.length} sessions</h1>
                    <p>Last rendered: {`${renderingTime.toLocaleDateString()} ${renderingTime.toLocaleTimeString()}`}</p>
                    <div className={style.trackHeader}>
                        {tracks.map((track: string) => {
                            let selectedTrack = selectedTracks.find((trackName) => trackName === track);

                            return (
                                track &&
                                <div key={track} className={`${style.track} ${selectedTrack ? style.trackSelected : ''}`} onClick={() => toogleSelectedTrack(track)}>{track}</div>
                            )
                        })}
                    </div>
                    {sessions.map((session: any) => {

                        // is there a filter set? 
                        if (selectedTracks.length > 0) {

                            // then only include sessions matching that filter
                            if (selectedTracks.find((track) => track === session.track)) {
                                return (<div key={session.id} className={style.speaker}>
                                    <h2>{session.title}</h2>
                                    <h3>{session.track}</h3>
                                    <p>{session.description}</p>
                                </div>)
                            }
                        } else {
                            // when no filter is set, include all sessions
                            return (<div key={session.id} className={style.speaker}>
                                <h2>{session.title}</h2>
                                <h3>{session.track}</h3>
                                <p>{session.description}</p>
                            </div>)
                        }
                    })}
                </>
            )}
        </>
    );
}