
interface DataProps {
    url: string;
    size: string;
    dateTime: string
}

function Data(props: DataProps) {
    const { url, size, dateTime } = props;


    return (
        <div>
        <h2>Data:</h2>
        <p>URL: {url}</p>
        <p>Size: {size}</p>
        <p>Date and Time: {dateTime}</p>
      </div>
    )
}
export default Data;