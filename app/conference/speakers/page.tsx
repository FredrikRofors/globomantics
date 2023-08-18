
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

    return (
        <>
            <h1>Speakers</h1>
            <p>Last rendered: {new Date().toLocaleDateString()}</p>
            {data.speakers.map((speaker: ISpeaker) => {
                <div key={speaker.id}>
                    <h2>{speaker.name}</h2>
                    <p>{speaker.bio}</p>
                </div>
            })}
        </>
    );
}