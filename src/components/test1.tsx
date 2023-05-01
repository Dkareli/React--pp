import {useState} from 'react';

const Test1 = () => {
    const [data,setData] =useState([
        'eat',
        'earth',
        'apple',
        'ana',
        'bold',
        'big',
        'dog',
        'disc',
        'don',
        'hat'
    ])
    const [filterList, setFilterList] = useState(data);
    const handleSearch = (e:any) => {
        if (e.target.value === "") {
            setFilterList(data);
            return;
        }
        const filteredValues = data.filter(
            (item:string) =>
            item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
            setFilterList(filteredValues);
        };
    return(
        <div className='ml-10'>
            <input
            onChange={handleSearch}
            className='w-32 h-10'
            type='text'
            placeholder='search'
            />
            {filterList.map((item:string,index:number) => (
                <p key={index}
                >{item}</p>
            ))}
        </div>
        )
}
export default Test1