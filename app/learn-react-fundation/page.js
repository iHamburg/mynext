// https://nextjs.org/learn/react-foundations/displaying-data-with-props
function Header({title}) {
    return <h1>Develop. Preview. Ship. {title}</h1>;
}

function Header2({title}) {
    console.log(title);

    return (
        <>
            <h1>title</h1>
        </>
    )
}
function HomePage() {
    return (
        <div>
            <Header title="React" />

            <Header title="Nextjs" />
            <Header2 title="Nextjs" />
        </div>
    );
}

export default HomePage