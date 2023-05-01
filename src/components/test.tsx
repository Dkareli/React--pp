import {useState,useEffect} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

const Test = () => {
    class Info {
        id: number;
        title: string;
        isActive: boolean;
        constructor(id: number ,title: string,isActive: boolean){
            this.id=id;
            this.title=title;
            this.isActive=isActive;
        }
        /*constructor(public id: number, public title: string, public isActive: boolean){}*/
    }
    const {data,isLoading} = useQuery('data', () =>
        axios('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.data))
    const [info,setInfo]=useState<string>('')
    const [list,setList]=useState([
        new Info(1000,'study',false),
        new Info(700,'eat',false),
    ])
    const handelAdd = () => {
        setList([
            new Info(list.length+10,info,false),
            ...list
        ])
        setInfo('')
    }
    const handelDelete = (Id:number) => {
        setList(list.filter(item => item.id !== Id  ))
    }
    useEffect(()=>{
        if(data)
        {
            data.map((item:any) => ((
                setList([
                    new Info(item.id,item.title,item.completed),
                    ...list
                ])
            )))
        }
        console.log(data)
    },[])
    if(isLoading)
    {
        return <p>Loading...</p>
    }
    return(
        <div>
            <input 
            onChange={(e) => setInfo(e.target.value)}
            className='w-32 h-10 ml-5'
            type="text"
            placeholder='enter todo'
            value={info}
            />
            <button
            onClick={handelAdd}
            className='mx-1'
            >add</button>
            <ul>
                {list.map((item:any) => (
                    <div 
                    className=''
                    key={item.id}>
                        <li 
                        className='px-10 inline-flex'
                        >{item.title}
                        </li>
                        <p 
                        onClick={() => handelDelete(item.id)}
                        className='inline-flex'>X</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Test