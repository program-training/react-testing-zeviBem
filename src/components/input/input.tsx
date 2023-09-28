import  {useState, useRef } from "react";
import Data from '../data_button/data_button';
function InputUrl() {
    const [url, setUrl] = useState('');
    const myRef = useRef<HTMLInputElement>(null);

    const [size, setSize] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [showData, setShowData] = useState(false);

    const handleButtonClick = () => {
        if (myRef.current) {
          const input_value = myRef.current.value;
          setUrl(`https://api.qrserver.com/v1/create-qr-code/?data=${input_value}&size=300x300`);
          setSize("300x300");
          setDateTime(new Date().toLocaleString());
          setShowData(true);
        }
    }
    return (
        <div>
         <h1>url for QR</h1>
         <input type="text"
            id="input_id"
            name="url"
            ref={myRef}
            placeholder="enter yore url"/>
        <button  onClick={() => {
            if(myRef.current){
                const input_value = myRef.current.value
                setUrl(`https://api.qrserver.com/v1/create-qr-code/?data=${input_value}&size=300x300`)
            }

        }}>CLICK
        </button>
        <br />
        <img src={url} alt="img QR" />
            <div>
            <button onClick={handleButtonClick} > SHow data </button>
                {showData ? <Data url={url} size={size} dateTime={dateTime} />: null}
            </div>
        </div>
    )
}
export default InputUrl
