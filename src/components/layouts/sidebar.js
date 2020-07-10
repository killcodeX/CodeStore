import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className="columns is-multiline">
                <div className="column is-12">
                    <h2 className="subtitle">(114) Your Codes</h2>
                    <div className="field has-addons">
                        <div className="control">
                            <button className="button is-dark">
                            <i class="fas fa-th-large"></i>
                            </button>
                        </div>
                        <div className="control">
                            <button className="button">
                            <i class="fas fa-grip-horizontal"></i>
                            </button>
                        </div>
                    </div>
                    <h3 className="subtitle is-6 mb-2">Search Snippets</h3>
                    <input class="input" type="text" placeholder="Search your codes..." />
                </div>
                <div className="column is-12">
                    <h3 className="subtitle is-6 mb-2">Filter</h3>
                    <div class="select is-fullwidth">
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
