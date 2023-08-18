import style from './speakers.module.css';

// Statid site generation by default
async function fetchSpeakers() {
    const response = await fetch(
        "https://raw.githubusercontent.com/adhithiravi/consuming-graphql-apollo/master/api/data/speakers.json"
    )

    const data = await response.json();
    return data;
}

interface ISpeaker {
    id: string,
    bio: string,
    name: string
}

export default async function Speakers() {
    const data = await fetchSpeakers();

    const renderingTime = new Date();

    return (
        <>
            <h1>Say hello to all our {data.speakers.length} speakers</h1>
            <p>Last rendered: {`${renderingTime.toLocaleDateString()} ${renderingTime.toLocaleTimeString()}`}</p>

            {data.speakers.map((speaker: any) => {
                return (<div key={speaker.id} className={style.speaker}>
                    <h2>{speaker.name}</h2>
                    <p>{speaker.bio}</p>
                </div>)
            })}
        </>
    );
}