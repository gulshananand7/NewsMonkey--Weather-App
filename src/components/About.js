import React, {useState} from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'? 'white':'#042743',
        backgroundColor : props.mode === 'dark'? '#042743':'white',
        border:'2px solid',
        borderColor: props.mode === 'dark'? 'white':'#042743'
    }
    

    return(
        <div className="container" style ={{color: props.mode === 'dark'? 'white':'#042743',}}>
            <h1 className="my-3">About us</h1>
            <div className="accordion" id="accordionExample" style = {myStyle}>
            <div className="accordion-item">
            <h2 className="accordion-header">
        <button className="accordion-button" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Analyze your text
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle}>
            <strong>accordion-body 1</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus fugiat numquam sunt officiis facilis similique harum nam iure dolor autem eligendi necessitatibus quaerat sapiente provident odit doloremque pariatur quisquam nobis impedit magnam, quos labore? Ducimus!
        </div>
        </div>
    </div>
    <div className="accordion-item" style = {myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Free to Use
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle}>
            <strong>accordion-body 2</strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex hic, dolorum recusandae qui ullam natus iusto laboriosam nam quia illum eius, assumenda alias cupiditate, sunt officiis nostrum vero. Quam, omnis? Tenetur, blanditiis? Sit, eaque.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Browser Compatible
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style = {myStyle}>
            <strong>accordion-body 3</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus placeat iste sunt accusamus temporibus perferendis distinctio. Doloribus veniam nobis pariatur nulla, ipsam maxime delectus temporibus, fuga minus, eaque incidunt consequuntur! Qui distinctio fugit sequi!
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
