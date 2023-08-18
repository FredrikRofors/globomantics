import style from './sessions.module.css';


async function fetchSessions() {
    const url = "https://raw.githubusercontent.com/adhithiravi/consuming-graphql-apollo/master/api/data/sessions.json"
    const response = fetch(url,
        {
            // Fetch server-side on each request
            cache: "no-store"
        });

    const data = (await response).json();
    return data;
}


export default async function Sessions() {
    const data = await fetchSessions();
    const renderingTime = new Date();

    return (
        <>
            <h1>Enjoy our {data.sessions.length} enlightning sessions</h1>
            <p>Last rendered: {`${renderingTime.toLocaleDateString()} ${renderingTime.toLocaleTimeString()}`}</p>
            {data.sessions.map((speaker: any) => {
                return (<div key={speaker.id} className={style.speaker}>
                    <h2>{speaker.title}</h2>
                    <p>{speaker.description}</p>
                </div>)
            })}
        </>
    );
}