import React, { useContext, useState } from 'react';
import { GlobalContext } from "../context/StateManager";

export default function Sidebar() {

    const [searchCode, setSearchcode ] = useState('');
    const { codes,findCode } = useContext(GlobalContext);

    const submit = (e) => {
        e.preventDefault();
        // findCode(searchCode)
        setSearchcode('');
    }
    

    return (
        <>
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h2 className="subtitle">({codes.length}) Your Codes</h2>
                    <h3 className="subtitle is-6 mb-2">Search Snippets</h3>
                    <form onSubmit={submit}>
                        <input className="input" type="text" placeholder="Search your codes..." value={searchCode} onChange={e => setSearchcode(e.target.value)}/>
                    </form>
                </div>
                <div className="column is-12">
                    <h3 className="subtitle is-6 mb-2">Filter</h3>
                    <div className="select is-fullwidth">
                        <select>
                            <option value="">show all</option>
                            <option value="fruit">Javascript</option>
                            <option value="vegetables">Python</option>
                            <option value="meals">CSS</option>
                            <option value="beverages">Java</option>
                            <option value="utensils">C#</option>
                        </select>
                    </div>
                </div>
            </div>  
        </>
    )
}
