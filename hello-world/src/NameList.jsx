export const NameList = () => {
    const names = ["Alice", "Bob", "Charlie", "Diana","Alice"];

    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>);

    return <div>{nameList}</div>;
};