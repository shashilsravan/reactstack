import React from 'react'

export default function ShowStack({size, stack}) {
    return (
        <div className='row my-5'>
            {stack.map(each => (
                <div className='col border border-primary p-2' key={each}>
                    {each}
                </div>
            ))}
        </div>
    )
}
