import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!" />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <di>
                    <button className="btn"
                    onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn"
                    onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn"
                    onClick={() => setCount(currect => currect + 100)}>+100</button>
                </di>

            </div>

            <SectionTitle title="Exercício #02" />
        </div>
    )
}

export default UseState
